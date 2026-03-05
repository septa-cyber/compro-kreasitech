
import fs from 'fs';
import path from 'path';
import { BlogPost, JobPosting, Testimonial, TeamMember, PortfolioItem, Partner, SiteSettings } from './types';
import { supabase } from './supabase';

const DATA_DIR = path.join(process.cwd(), 'lib', 'data');
const ARTICLES_FILE = path.join(DATA_DIR, 'articles.json');
const JOBS_FILE = path.join(DATA_DIR, 'jobs.json');
const TESTIMONIALS_FILE = path.join(DATA_DIR, 'testimonials.json');
const USERS_FILE = path.join(DATA_DIR, 'users.json');
const TEAM_FILE = path.join(DATA_DIR, 'team.json');
const PORTFOLIO_FILE = path.join(DATA_DIR, 'portfolio.json');
const PARTNERS_FILE = path.join(DATA_DIR, 'partners.json');
const SETTINGS_FILE = path.join(DATA_DIR, 'settings.json');

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

const CATEGORY_COLORS: Record<string, string> = {
    'TECHNOLOGY': 'bg-blue-100 text-blue-700',
    'NEWS': 'bg-green-100 text-green-700',
    'EVENT': 'bg-orange-100 text-orange-700',
    'TIPS_TRICKS': 'bg-pink-100 text-pink-700',
};

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
        categoryColor: CATEGORY_COLORS[row.category] || row.category_color || 'bg-gray-100 text-gray-700',
        coverImage: row.cover_image,
        tags: row.tags || [],
        status: row.status
    };
}

function mapArticleToDB(article: Partial<BlogPost>): any {
    const dbArticle: any = { ...article };
    delete dbArticle.id;
    if (article.author !== undefined) {
        dbArticle.author_name = article.author?.name || '';
        dbArticle.author_avatar = article.author?.avatar || '';
        delete dbArticle.author;
    }
    if ('categoryColor' in dbArticle) {
        dbArticle.category_color = article.categoryColor || '';
        delete dbArticle.categoryColor;
    }
    if ('coverImage' in dbArticle) {
        dbArticle.cover_image = article.coverImage || '';
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
    // Remove id to avoid Supabase updating the primary key constraint
    delete dbJob.id;
    delete dbJob.expiredDate; // Column does not exist in schema

    // Category is already in snake_case/camelCase same if it's 'category'
    if ('iconBg' in dbJob) {
        dbJob.icon_bg = job.iconBg;
        delete dbJob.iconBg;
    }
    if ('postedDate' in dbJob) {
        dbJob.posted_date = job.postedDate;
        delete dbJob.postedDate;
    }
    if ('location_type' in dbJob) {
        dbJob.location_type = job.location_type;
    }
    return dbJob;
}

function mapTestimonialFromDB(row: any): Testimonial {
    const testimonialText = row.content || row.quote || '';
    return {
        id: row.id,
        name: row.name,
        role: row.role,
        company: row.company,
        avatar: row.avatar,
        content: testimonialText,
        quote: testimonialText, // Handle both for migration compatibility
        rating: row.rating,
        status: row.status
    };
}

function mapTestimonialToDB(testimonial: Partial<Testimonial>): any {
    const dbTestimonial: any = { ...testimonial };
    delete dbTestimonial.id;
    // Map content to quote for DB
    if (testimonial.content) {
        dbTestimonial.quote = testimonial.content;
        delete dbTestimonial.content;
    }
    return dbTestimonial;
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
    const articles = readData<BlogPost>(ARTICLES_FILE, []).map(article => ({
        ...article,
        categoryColor: CATEGORY_COLORS[article.category] || article.categoryColor || 'bg-gray-100 text-gray-700'
    }));
    // Sort desc by publish date for "newest first" logic
    articles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
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
        const dbTestimonial = mapTestimonialToDB(testimonial);
        const { data, error } = await supabase.from('testimonials').insert(dbTestimonial).select().single();
        if (error) throw error;
        return mapTestimonialFromDB(data);
    }
    const testimonials = readData<Testimonial>(TESTIMONIALS_FILE, []);
    const newId = testimonials.length > 0 ? Math.max(...testimonials.map(t => t.id)) + 1 : 1;
    // Dual-write content and quote to support legacy components
    const newTestimonial = { ...testimonial, quote: testimonial.content, id: newId } as any;
    writeData(TESTIMONIALS_FILE, [newTestimonial, ...testimonials]);
    return newTestimonial;
}

export async function updateTestimonial(id: number, testimonial: Partial<Testimonial>): Promise<Testimonial | null> {
    if (isSupabaseEnabled()) {
        const dbTestimonial = mapTestimonialToDB(testimonial);
        // Remove undefined fields
        Object.keys(dbTestimonial).forEach(key => dbTestimonial[key] === undefined && delete dbTestimonial[key]);

        const { data, error } = await supabase.from('testimonials').update(dbTestimonial).eq('id', id).select().single();
        if (error) throw error;
        return mapTestimonialFromDB(data);
    }
    const testimonials = readData<Testimonial>(TESTIMONIALS_FILE, []);
    const index = testimonials.findIndex(t => t.id === id);
    if (index === -1) return null;
    // Sync quote with content if content is updated
    const updatedData = { ...testimonial };
    if (updatedData.content) {
        (updatedData as any).quote = updatedData.content;
    }
    const updated = { ...testimonials[index], ...updatedData };
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
        let query = supabase.from('team').select('*');
        if (status) query = query.eq('status', status);
        const { data, error } = await query;
        if (error) { console.error(error); return []; }
        // Sort by order in JS (handles missing order column gracefully)
        const result = data || [];
        result.sort((a: any, b: any) => (a.order ?? 9999) - (b.order ?? 9999));
        return result;
    }
    let team = readData<TeamMember>(TEAM_FILE, []);
    if (status) team = team.filter(t => t.status === status);
    team.sort((a, b) => (a.order ?? 9999) - (b.order ?? 9999));
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
        // Try to get next order value, but don't fail if column doesn't exist
        let nextOrder = 0;
        try {
            const { data: allMembers } = await supabase.from('team').select('*');
            if (allMembers && allMembers.length > 0) {
                const maxOrder = Math.max(...allMembers.map((m: any) => m.order ?? 0));
                nextOrder = maxOrder + 1;
            }
        } catch (e) {
            // order column might not exist yet, use 0
        }
        const memberData: any = { ...member };
        memberData.order = member.order ?? nextOrder;
        const { data, error } = await supabase.from('team').insert(memberData).select().single();
        if (error) {
            // If error is due to order column, retry without it
            if (error.message?.includes('order')) {
                const { order, ...memberWithoutOrder } = memberData;
                const { data: data2, error: error2 } = await supabase.from('team').insert(memberWithoutOrder).select().single();
                if (error2) throw error2;
                return data2;
            }
            throw error;
        }
        return data;
    }
    const team = readData<TeamMember>(TEAM_FILE, []);
    const newId = team.length > 0 ? Math.max(...team.map(t => t.id)) + 1 : 1;
    const maxOrder = team.length > 0 ? Math.max(...team.map(t => t.order ?? 0)) : -1;
    const newMember = { ...member, id: newId, order: member.order ?? maxOrder + 1 };
    writeData(TEAM_FILE, [...team, newMember]);
    return newMember;
}

export async function updateTeamMember(id: number, member: Partial<TeamMember>): Promise<TeamMember | null> {
    if (isSupabaseEnabled()) {
        const dbMember: any = { ...member };
        delete dbMember.id;
        const { data, error } = await supabase.from('team').update(dbMember).eq('id', id).select().single();
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

export async function reorderTeam(orderedIds: number[]): Promise<boolean> {
    if (isSupabaseEnabled()) {
        try {
            const updates = orderedIds.map((id, index) =>
                supabase.from('team').update({ order: index }).eq('id', id)
            );
            const results = await Promise.all(updates);
            return results.every(r => !r.error);
        } catch (e) {
            console.error('Reorder failed (order column may not exist):', e);
            return false;
        }
    }
    const team = readData<TeamMember>(TEAM_FILE, []);
    orderedIds.forEach((id, index) => {
        const member = team.find(t => t.id === id);
        if (member) member.order = index;
    });
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
        completed_date: row.completed_date,
        marquee_row: row.marquee_row
    };
}

function mapPortfolioToDB(item: Partial<PortfolioItem>): any {
    const dbItem: any = { ...item };
    delete dbItem.id;
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
        const dbPartner: any = { ...partner };
        delete dbPartner.id;
        const { data, error } = await supabase.from('partners').update(dbPartner).eq('id', id).select().single();
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

// --- Site Settings Operations ---

export async function getSiteSettings(): Promise<SiteSettings> {
    if (isSupabaseEnabled()) {
        try {
            const { data, error } = await supabase.from('site_settings').select('key, value');
            if (error) throw error;

            const settings: SiteSettings = {};
            if (data && data.length > 0) {
                data.forEach(item => {
                    settings[item.key] = item.value;
                });
                return settings;
            }
        } catch (e) {
            // Silently swallow error if table doesn't exist yet, as we have a JSON fallback
            // console.warn('Supabase site_settings table might not exist yet. Falling back to JSON.');
        }
    }

    // JSON Fallback
    try {
        if (!fs.existsSync(SETTINGS_FILE)) return {};
        const content = fs.readFileSync(SETTINGS_FILE, 'utf-8');
        return JSON.parse(content);
    } catch {
        return {};
    }
}

export async function updateSiteSettings(settings: SiteSettings): Promise<boolean> {
    if (isSupabaseEnabled()) {
        try {
            // Upsert requires iterating over keys, since settings is a single object but the DB is key-value
            const updates = Object.keys(settings).map(key => ({
                key,
                value: settings[key],
                updated_at: new Date().toISOString()
            }));

            if (updates.length > 0) {
                const { error } = await supabase.from('site_settings').upsert(updates, { onConflict: 'key' });
                if (error) throw error;
            }
        } catch (e) {
            console.error('Error updating settings in supabase:', e);
            // Fallback to JSON below if UPSERT fails
        }
    }

    // Update JSON File
    try {
        if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });

        let currentSettings = {};
        if (fs.existsSync(SETTINGS_FILE)) {
            currentSettings = JSON.parse(fs.readFileSync(SETTINGS_FILE, 'utf-8'));
        }

        fs.writeFileSync(SETTINGS_FILE, JSON.stringify({ ...currentSettings, ...settings }, null, 2));
        return true;
    } catch (e) {
        console.error('Error writing to settings.json:', e);
        return false;
    }
}

