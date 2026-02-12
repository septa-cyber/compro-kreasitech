
const fs = require('fs');
const path = require('path');
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
    console.error('Error: NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY must be set in .env.local');
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

const DATA_DIR = path.join(__dirname, '..', 'lib', 'data');

function readJson(filename) {
    const filePath = path.join(DATA_DIR, filename);
    if (!fs.existsSync(filePath)) return [];
    return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
}

async function migrateUsers() {
    console.log('Migrating Users...');
    const usersData = readJson('users.json');
    const users = usersData.users || []; // Extract from { users: [] } wrapper

    for (const user of users) {
        // Users table structure: id, email, password, name, role, created_at
        const { error } = await supabase.from('users').upsert({
            email: user.email,
            password: user.password,
            name: user.name,
            role: user.role,
            created_at: user.createdAt || new Date().toISOString()
        }, { onConflict: 'email' });

        if (error) console.error(`Failed to migrate user ${user.email}:`, error.message);
    }
}

async function migrateArticles() {
    console.log('Migrating Articles...');
    const articles = readJson('articles.json');

    for (const article of articles) {
        const dbArticle = {
            // id: article.id, // Let DB generate ID (bigint)
            title: article.title,
            slug: article.slug,
            excerpt: article.excerpt,
            content: article.content,
            date: article.date,
            category: article.category,
            category_color: article.categoryColor,
            cover_image: article.coverImage,
            status: article.status,
            tags: article.tags,
            author_name: article.author?.name,
            author_avatar: article.author?.avatar,
            // created_at?
        };

        const { error } = await supabase.from('articles').upsert(dbArticle, { onConflict: 'slug' });
        if (error) console.error(`Failed to migrate article ${article.slug}:`, error.message);
    }
}

async function migrateJobs() {
    console.log('Migrating Jobs...');
    const jobs = readJson('jobs.json');

    for (const job of jobs) {
        const dbJob = {
            // id: job.id,
            title: job.title,
            company: job.company,
            icon: job.icon,
            icon_bg: job.iconBg,
            posted_date: job.postedDate,
            expired_date: job.expiredDate,
            salary: job.salary,
            description: job.description,
            type: job.type,
            location: job.location,
            category: job.category,
            status: job.status
        };

        // Jobs don't have unique slug, so we might insert duplicates if run twice.
        // We can try to upsert by ID if we kept the ID, but ID in JSON is 1,2,3...
        // ID in DB is bigint. We can actually copy the ID.
        // Let's try to preserve ID.
        const { error } = await supabase.from('jobs').upsert({ ...dbJob, id: job.id });
        if (error) console.error(`Failed to migrate job ${job.title}:`, error.message);
    }
}

async function migrateTestimonials() {
    console.log('Migrating Testimonials...');
    const testimonials = readJson('testimonials.json');

    for (const t of testimonials) {
        const dbT = {
            // id: t.id,
            name: t.name,
            role: t.role,
            company: t.company,
            avatar: t.avatar,
            quote: t.quote,
            rating: t.rating,
            status: t.status
        };
        const { error } = await supabase.from('testimonials').upsert({ ...dbT, id: t.id });
        if (error) console.error(`Failed to migrate testimonial ${t.name}:`, error.message);
    }
}

async function main() {
    await migrateUsers();
    await migrateArticles();
    await migrateJobs();
    await migrateTestimonials();
    console.log('Migration complete!');
}

main();
