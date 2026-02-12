
import fs from 'fs';
import path from 'path';
import { BlogPost, JobPosting, Testimonial, TeamMember, PortfolioItem, Partner } from './types';
import { supabase } from './supabase';

const DATA_DIR = path.join(process.cwd(), 'lib', 'data');
const ARTICLES_FILE = path.join(DATA_DIR, 'articles.json');
const JOBS_FILE = path.join(DATA_DIR, 'jobs.json');
const TESTIMONIALS_FILE = path.join(DATA_DIR, 'testimonials.json');
const USERS_FILE = path.join(DATA_DIR, 'users.json');
const TEAM_FILE = path.join(DATA_DIR, 'team.json');
const PORTFOLIO_FILE = path.join(DATA_DIR, 'portfolio.json');
const PARTNERS_FILE = path.join(DATA_DIR, 'partners.json');

// Helper to check if Supabase is enabled
const isSupabaseEnabled = () => !!process.env.NEXT_PUBLIC_SUPABASE_URL && !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// --- Generic Helper for JSON ---
function readData<T>(filePath: string, defaultValue: T[]): T[] {
    try {
        if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
        if (!fs.existsSync(filePath)) {
            fs.writeFileSync(filePath, JSON.stringify(defaultValue, null, 2));
            return defaultValue;
        }
        const content = fs.readFileSync(filePath, 'utf-8');
        return JSON.parse(content);
    } catch (error) {
        console.error(`Error reading ${filePath}:`, error);
        return defaultValue;
    }
}

function writeData<T>(filePath: string, data: T[]): void {
    try {
        if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    } catch (error) {
        console.error(`Error writing to ${filePath}:`, error);
    }
}

// --- Mappers ---

function mapArticleFromDB(row: any): BlogPost {
    return {
        id: row.id,
        slug: row.slug,
        title: row.title,
        excerpt: row.excerpt,
        content: row.content,
        date: row.date,
        author: {
            name: row.author_name || '',
            avatar: row.author_avatar || ''
        },
        category: row.category,
        categoryColor: row.category_color,
        coverImage: row.cover_image,
        tags: row.tags || [],
        status: row.status
    };
}

function mapArticleToDB(article: Partial<BlogPost>): any {
    const dbArticle: any = { ...article };
    if (article.author) {
        dbArticle.author_name = article.author.name;
        dbArticle.author_avatar = article.author.avatar;
        delete dbArticle.author;
    }
    if (article.categoryColor) {
        dbArticle.category_color = article.categoryColor;
        delete dbArticle.categoryColor;
    }
    if (article.coverImage) {
        dbArticle.cover_image = article.coverImage;
        delete dbArticle.coverImage;
    }
    return dbArticle;
}

function mapJobFromDB(row: any): JobPosting {
    return {
        id: row.id,
        title: row.title,
        company: row.company,
        icon: row.icon,
        iconBg: row.icon_bg,
        postedDate: row.posted_date,
        expiredDate: row.expired_date,
        salary: row.salary,
        description: row.description,
        type: row.type,
        location: row.location,
        category: row.category,
        status: row.status,
        department: row.department,
        requirements: row.requirements || [],
        responsibilities: row.responsibilities || [],
        benefits: row.benefits || [],
        experience: row.experience,
        education: row.education,
        whatsapp_url: row.whatsapp_url,
        logo_url: row.logo_url,
        location_type: row.location_type
    };
}

function mapJobToDB(job: Partial<JobPosting>): any {
    const dbJob: any = { ...job };
    // Category is already in snake_case/camelCase same if it's 'category'
    if (job.iconBg) {
        dbJob.icon_bg = job.iconBg;
        delete dbJob.iconBg;
    }
    if (job.postedDate) {
        dbJob.posted_date = job.postedDate;
        delete dbJob.postedDate;
    }
    if (job.expiredDate) {
        dbJob.expired_date = job.expiredDate;
        delete dbJob.expiredDate;
    }
    if (job.location_type) {
        dbJob.location_type = job.location_type;
    }
    return dbJob;
}

function mapTestimonialFromDB(row: any): Testimonial {
    return {
        id: row.id,
        name: row.name,
        role: row.role,
        company: row.company,
        avatar: row.avatar,
        content: row.content || row.quote, // Handle both for migration compatibility
        rating: row.rating,
        status: row.status
    };
}

// --- Articles Operations ---

export async function getArticles(status?: string): Promise<BlogPost[]> {
    if (isSupabaseEnabled()) {
        let query = supabase.from('articles').select('*').order('created_at', { ascending: false });
        if (status) query = query.eq('status', status);
        const { data, error } = await query;
        if (error) { console.error(error); return []; }
        return (data || []).map(mapArticleFromDB);
    }
    const articles = readData<BlogPost>(ARTICLES_FILE, []);
    // Sort desc by id for simplified "newest first" (or by date)
    articles.sort((a, b) => b.id - a.id);
    if (status) return articles.filter(a => a.status === status);
    return articles;
}

export async function getArticleById(id: number): Promise<BlogPost | null> {
    if (isSupabaseEnabled()) {
        const { data, error } = await supabase.from('articles').select('*').eq('id', id).single();
        if (error) return null;
        return mapArticleFromDB(data);
    }
    const articles = readData<BlogPost>(ARTICLES_FILE, []);
    return articles.find(a => a.id === id) || null;
}

export async function createArticle(article: Omit<BlogPost, 'id'>): Promise<BlogPost> {
    if (isSupabaseEnabled()) {
        const dbArticle = mapArticleToDB(article);
        const { data, error } = await supabase.from('articles').insert(dbArticle).select().single();
        if (error) throw error;
        return mapArticleFromDB(data);
    }
    const articles = readData<BlogPost>(ARTICLES_FILE, []);
    const newId = articles.length > 0 ? Math.max(...articles.map(a => a.id)) + 1 : 1;
    const newArticle = { ...article, id: newId };
    writeData(ARTICLES_FILE, [newArticle, ...articles]); // Prepend
    return newArticle;
}

export async function updateArticle(id: number, article: Partial<BlogPost>): Promise<BlogPost | null> {
    if (isSupabaseEnabled()) {
        const dbArticle = mapArticleToDB(article);
        // Remove undefined fields
        Object.keys(dbArticle).forEach(key => dbArticle[key] === undefined && delete dbArticle[key]);
        const { data, error } = await supabase.from('articles').update(dbArticle).eq('id', id).select().single();
        if (error) throw error;
        return mapArticleFromDB(data);
    }
    const articles = readData<BlogPost>(ARTICLES_FILE, []);
    const index = articles.findIndex(a => a.id === id);
    if (index === -1) return null;
    const updated = { ...articles[index], ...article };
    articles[index] = updated;
    writeData(ARTICLES_FILE, articles);
    return updated;
}

export async function deleteArticle(id: number): Promise<boolean> {
    if (isSupabaseEnabled()) {
        const { error } = await supabase.from('articles').delete().eq('id', id);
        return !error;
    }
    let articles = readData<BlogPost>(ARTICLES_FILE, []);
    const initialLen = articles.length;
    articles = articles.filter(a => a.id !== id);
    if (articles.length === initialLen) return false;
    writeData(ARTICLES_FILE, articles);
    return true;
}

// --- Jobs Operations ---

export async function getJobs(status?: string): Promise<JobPosting[]> {
    if (isSupabaseEnabled()) {
        let query = supabase.from('jobs').select('*').order('created_at', { ascending: false });
        if (status) query = query.eq('status', status);
        const { data, error } = await query;
        if (error) { console.error(error); return []; }
        return (data || []).map(mapJobFromDB);
    }
    const jobs = readData<JobPosting>(JOBS_FILE, []);
    if (status) return jobs.filter(j => j.status === status);
    return jobs;
}

export async function getJobById(id: number): Promise<JobPosting | null> {
    if (isSupabaseEnabled()) {
        const { data, error } = await supabase.from('jobs').select('*').eq('id', id).single();
        if (error) return null;
        return mapJobFromDB(data);
    }
    const jobs = readData<JobPosting>(JOBS_FILE, []);
    return jobs.find(j => j.id === id) || null;
}

export async function createJob(job: Omit<JobPosting, 'id'>): Promise<JobPosting> {
    if (isSupabaseEnabled()) {
        const dbJob = mapJobToDB(job);
        const { data, error } = await supabase.from('jobs').insert(dbJob).select().single();
        if (error) throw error;
        return mapJobFromDB(data);
    }
    const jobs = readData<JobPosting>(JOBS_FILE, []);
    const newId = jobs.length > 0 ? Math.max(...jobs.map(j => j.id)) + 1 : 1;
    const newJob = { ...job, id: newId };
    writeData(JOBS_FILE, [newJob, ...jobs]);
    return newJob;
}

export async function updateJob(id: number, job: Partial<JobPosting>): Promise<JobPosting | null> {
    if (isSupabaseEnabled()) {
        const dbJob = mapJobToDB(job);
        Object.keys(dbJob).forEach(key => dbJob[key] === undefined && delete dbJob[key]);
        const { data, error } = await supabase.from('jobs').update(dbJob).eq('id', id).select().single();
        if (error) throw error;
        return mapJobFromDB(data);
    }
    const jobs = readData<JobPosting>(JOBS_FILE, []);
    const index = jobs.findIndex(j => j.id === id);
    if (index === -1) return null;
    const updated = { ...jobs[index], ...job };
    jobs[index] = updated;
    writeData(JOBS_FILE, jobs);
    return updated;
}

export async function deleteJob(id: number): Promise<boolean> {
    if (isSupabaseEnabled()) {
        const { error } = await supabase.from('jobs').delete().eq('id', id);
        return !error;
    }
    let jobs = readData<JobPosting>(JOBS_FILE, []);
    const initialLen = jobs.length;
    jobs = jobs.filter(j => j.id !== id);
    if (jobs.length === initialLen) return false;
    writeData(JOBS_FILE, jobs);
    return true;
}

// --- Testimonials Operations ---

export async function getTestimonials(status?: string): Promise<Testimonial[]> {
    if (isSupabaseEnabled()) {
        let query = supabase.from('testimonials').select('*').order('created_at', { ascending: false });
        if (status) query = query.eq('status', status);
        const { data, error } = await query;
        if (error) { console.error(error); return []; }
        return (data || []).map(mapTestimonialFromDB);
    }
    const testimonials = readData<Testimonial>(TESTIMONIALS_FILE, []);
    if (status) return testimonials.filter(t => t.status === status);
    return testimonials;
}

export async function getTestimonialById(id: number): Promise<Testimonial | null> {
    if (isSupabaseEnabled()) {
        const { data, error } = await supabase.from('testimonials').select('*').eq('id', id).single();
        if (error) return null;
        return mapTestimonialFromDB(data);
    }
    const testimonials = readData<Testimonial>(TESTIMONIALS_FILE, []);
    return testimonials.find(t => t.id === id) || null;
}

export async function createTestimonial(testimonial: Omit<Testimonial, 'id'>): Promise<Testimonial> {
    if (isSupabaseEnabled()) {
        const { data, error } = await supabase.from('testimonials').insert(testimonial).select().single();
        if (error) throw error;
        return mapTestimonialFromDB(data);
    }
    const testimonials = readData<Testimonial>(TESTIMONIALS_FILE, []);
    const newId = testimonials.length > 0 ? Math.max(...testimonials.map(t => t.id)) + 1 : 1;
    const newTestimonial = { ...testimonial, id: newId };
    writeData(TESTIMONIALS_FILE, [newTestimonial, ...testimonials]);
    return newTestimonial;
}

export async function updateTestimonial(id: number, testimonial: Partial<Testimonial>): Promise<Testimonial | null> {
    if (isSupabaseEnabled()) {
        const { data, error } = await supabase.from('testimonials').update(testimonial).eq('id', id).select().single();
        if (error) throw error;
        return mapTestimonialFromDB(data);
    }
    const testimonials = readData<Testimonial>(TESTIMONIALS_FILE, []);
    const index = testimonials.findIndex(t => t.id === id);
    if (index === -1) return null;
    const updated = { ...testimonials[index], ...testimonial };
    testimonials[index] = updated;
    writeData(TESTIMONIALS_FILE, testimonials);
    return updated;
}

export async function deleteTestimonial(id: number): Promise<boolean> {
    if (isSupabaseEnabled()) {
        const { error } = await supabase.from('testimonials').delete().eq('id', id);
        return !error;
    }
    let testimonials = readData<Testimonial>(TESTIMONIALS_FILE, []);
    const initialLen = testimonials.length;
    testimonials = testimonials.filter(t => t.id !== id);
    if (testimonials.length === initialLen) return false;
    writeData(TESTIMONIALS_FILE, testimonials);
    return true;
}

// --- User Operations ---

export async function getUserByEmail(email: string): Promise<any | null> {
    if (isSupabaseEnabled()) {
        const { data, error } = await supabase.from('users').select('*').eq('email', email).single();
        if (error) return null;
        return data;
    }
    // JSON
    try {
        if (!fs.existsSync(USERS_FILE)) return null;
        const content = fs.readFileSync(USERS_FILE, 'utf-8');
        const data = JSON.parse(content);
        return data.users.find((u: any) => u.email.toLowerCase() === email.toLowerCase()) || null;
    } catch {
        return null;
    }
}

export async function getUserById(id: string): Promise<any | null> {
    if (isSupabaseEnabled()) {
        const { data, error } = await supabase.from('users').select('*').eq('id', id).single();
        if (error) return null;
        return data;
    }
    // JSON
    try {
        if (!fs.existsSync(USERS_FILE)) return null;
        const content = fs.readFileSync(USERS_FILE, 'utf-8');
        const data = JSON.parse(content);
        return data.users.find((u: any) => u.id === id) || null;
    } catch {
        return null;
    }
}

// --- Team Operations ---

export async function getTeam(status?: string): Promise<TeamMember[]> {
    if (isSupabaseEnabled()) {
        let query = supabase.from('team').select('*').order('created_at', { ascending: false });
        if (status) query = query.eq('status', status);
        const { data, error } = await query;
        if (error) { console.error(error); return []; }
        return data || [];
    }
    const team = readData<TeamMember>(TEAM_FILE, []);
    if (status) return team.filter(t => t.status === status);
    return team;
}

export async function getTeamById(id: number): Promise<TeamMember | null> {
    if (isSupabaseEnabled()) {
        const { data, error } = await supabase.from('team').select('*').eq('id', id).single();
        if (error) return null;
        return data;
    }
    const team = readData<TeamMember>(TEAM_FILE, []);
    return team.find(t => t.id === id) || null;
}

export async function createTeamMember(member: Omit<TeamMember, 'id'>): Promise<TeamMember> {
    if (isSupabaseEnabled()) {
        const { data, error } = await supabase.from('team').insert(member).select().single();
        if (error) throw error;
        return data;
    }
    const team = readData<TeamMember>(TEAM_FILE, []);
    const newId = team.length > 0 ? Math.max(...team.map(t => t.id)) + 1 : 1;
    const newMember = { ...member, id: newId };
    writeData(TEAM_FILE, [newMember, ...team]);
    return newMember;
}

export async function updateTeamMember(id: number, member: Partial<TeamMember>): Promise<TeamMember | null> {
    if (isSupabaseEnabled()) {
        const { data, error } = await supabase.from('team').update(member).eq('id', id).select().single();
        if (error) throw error;
        return data;
    }
    const team = readData<TeamMember>(TEAM_FILE, []);
    const index = team.findIndex(t => t.id === id);
    if (index === -1) return null;
    const updated = { ...team[index], ...member };
    team[index] = updated;
    writeData(TEAM_FILE, team);
    return updated;
}

export async function deleteTeamMember(id: number): Promise<boolean> {
    if (isSupabaseEnabled()) {
        const { error } = await supabase.from('team').delete().eq('id', id);
        return !error;
    }
    let team = readData<TeamMember>(TEAM_FILE, []);
    const initialLen = team.length;
    team = team.filter(t => t.id !== id);
    if (team.length === initialLen) return false;
    writeData(TEAM_FILE, team);
    return true;
}

// --- Portfolio Operations ---

function mapPortfolioFromDB(row: any): PortfolioItem {
    return {
        id: row.id,
        title: row.title,
        description: row.description,
        image: row.image,
        category: row.category,
        technologies: row.technologies || [],
        project_url: row.project_url,
        github_url: row.github_url,
        status: row.status,
        completed_date: row.completed_date
    };
}

function mapPortfolioToDB(item: Partial<PortfolioItem>): any {
    const dbItem: any = { ...item };
    if (item.project_url !== undefined) {
        dbItem.project_url = item.project_url;
        delete dbItem.project_url;
    }
    if (item.github_url !== undefined) {
        dbItem.github_url = item.github_url;
        delete dbItem.github_url;
    }
    if (item.completed_date !== undefined) {
        dbItem.completed_date = item.completed_date;
        delete dbItem.completed_date;
    }
    return dbItem;
}

export async function getPortfolio(status?: string): Promise<PortfolioItem[]> {
    if (isSupabaseEnabled()) {
        let query = supabase.from('portfolio').select('*').order('created_at', { ascending: false });
        if (status) query = query.eq('status', status);
        const { data, error } = await query;
        if (error) { console.error(error); return []; }
        return data || [];
    }
    const portfolio = readData<PortfolioItem>(PORTFOLIO_FILE, []);
    if (status) return portfolio.filter(p => p.status === status);
    return portfolio;
}

export async function getPortfolioById(id: number): Promise<PortfolioItem | null> {
    if (isSupabaseEnabled()) {
        const { data, error } = await supabase.from('portfolio').select('*').eq('id', id).single();
        if (error) return null;
        return mapPortfolioFromDB(data);
    }
    const portfolio = readData<PortfolioItem>(PORTFOLIO_FILE, []);
    return portfolio.find(p => p.id === id) || null;
}

export async function createPortfolioItem(item: Omit<PortfolioItem, 'id'>): Promise<PortfolioItem> {
    if (isSupabaseEnabled()) {
        const dbItem = mapPortfolioToDB(item);
        const { data, error } = await supabase.from('portfolio').insert(dbItem).select().single();
        if (error) throw error;
        return mapPortfolioFromDB(data);
    }
    const portfolio = readData<PortfolioItem>(PORTFOLIO_FILE, []);
    const newId = portfolio.length > 0 ? Math.max(...portfolio.map(p => p.id)) + 1 : 1;
    const newItem = { ...item, id: newId };
    writeData(PORTFOLIO_FILE, [newItem, ...portfolio]);
    return newItem;
}

export async function updatePortfolioItem(id: number, item: Partial<PortfolioItem>): Promise<PortfolioItem | null> {
    if (isSupabaseEnabled()) {
        const dbItem = mapPortfolioToDB(item);
        const { data, error } = await supabase.from('portfolio').update(dbItem).eq('id', id).select().single();
        if (error) throw error;
        return mapPortfolioFromDB(data);
    }
    const portfolio = readData<PortfolioItem>(PORTFOLIO_FILE, []);
    const index = portfolio.findIndex(p => p.id === id);
    if (index === -1) return null;
    const updated = { ...portfolio[index], ...item };
    portfolio[index] = updated;
    writeData(PORTFOLIO_FILE, portfolio);
    return updated;
}

export async function deletePortfolioItem(id: number): Promise<boolean> {
    if (isSupabaseEnabled()) {
        const { error } = await supabase.from('portfolio').delete().eq('id', id);
        return !error;
    }
    let portfolio = readData<PortfolioItem>(PORTFOLIO_FILE, []);
    const initialLen = portfolio.length;
    portfolio = portfolio.filter(p => p.id !== id);
    if (portfolio.length === initialLen) return false;
    writeData(PORTFOLIO_FILE, portfolio);
    return true;
}

// --- Partners Operations ---

export async function getPartners(status?: string): Promise<Partner[]> {
    if (isSupabaseEnabled()) {
        let query = supabase.from('partners').select('*').order('created_at', { ascending: false });
        if (status) query = query.eq('status', status);
        const { data, error } = await query;
        if (error) { console.error(error); return []; }
        return data || [];
    }
    const partners = readData<Partner>(PARTNERS_FILE, []);
    if (status) return partners.filter(p => p.status === status);
    return partners;
}

export async function getPartnerById(id: number): Promise<Partner | null> {
    if (isSupabaseEnabled()) {
        const { data, error } = await supabase.from('partners').select('*').eq('id', id).single();
        if (error) return null;
        return data;
    }
    const partners = readData<Partner>(PARTNERS_FILE, []);
    return partners.find(p => p.id === id) || null;
}

export async function createPartner(partner: Omit<Partner, 'id'>): Promise<Partner> {
    if (isSupabaseEnabled()) {
        const { data, error } = await supabase.from('partners').insert(partner).select().single();
        if (error) throw error;
        return data;
    }
    const partners = readData<Partner>(PARTNERS_FILE, []);
    const newId = partners.length > 0 ? Math.max(...partners.map(p => p.id)) + 1 : 1;
    const newPartner = { ...partner, id: newId };
    writeData(PARTNERS_FILE, [newPartner, ...partners]);
    return newPartner;
}

export async function updatePartner(id: number, partner: Partial<Partner>): Promise<Partner | null> {
    if (isSupabaseEnabled()) {
        const { data, error } = await supabase.from('partners').update(partner).eq('id', id).select().single();
        if (error) throw error;
        return data;
    }
    const partners = readData<Partner>(PARTNERS_FILE, []);
    const index = partners.findIndex(p => p.id === id);
    if (index === -1) return null;
    const updated = { ...partners[index], ...partner };
    partners[index] = updated;
    writeData(PARTNERS_FILE, partners);
    return updated;
}

export async function deletePartner(id: number): Promise<boolean> {
    if (isSupabaseEnabled()) {
        const { error } = await supabase.from('partners').delete().eq('id', id);
        return !error;
    }
    let partners = readData<Partner>(PARTNERS_FILE, []);
    const initialLen = partners.length;
    partners = partners.filter(p => p.id !== id);
    if (partners.length === initialLen) return false;
    writeData(PARTNERS_FILE, partners);
    return true;
}
