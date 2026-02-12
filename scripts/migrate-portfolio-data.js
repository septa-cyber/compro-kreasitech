const { createClient } = require('@supabase/supabase-js');

const SUPABASE_URL = 'https://xunkaiohgemoirtlafnz.supabase.co';
const SERVICE_ROLE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh1bmthaW9oZ2Vtb2lydGxhZm56Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MDg4MTMwNCwiZXhwIjoyMDg2NDU3MzA0fQ.p1ZdCBiKbsriIQmzBxw1C6_9-nzvAWylNtmtk9Xn56s';

const supabase = createClient(SUPABASE_URL, SERVICE_ROLE_KEY);

// Portfolio items from data/portfolioData.ts
const portfolioItems = [
    {
        title: "Danarhadi CRM",
        subtitle: "Enterprise Management System",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
        size: "large",
        category: "Software Development",
        status: "published",
        description: "Comprehensive enterprise management system for Danarhadi",
        technologies: ["React", "Node.js", "PostgreSQL"],
        project_url: null,
        github_url: null,
        completed_date: "2024-01-15"
    },
    {
        title: "EcoMart e-Commerce",
        subtitle: "Sustainable Shopping Platform",
        image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=2089&auto=format&fit=crop",
        size: "medium",
        category: "Web Development",
        status: "published",
        description: "Sustainable shopping platform focused on eco-friendly products",
        technologies: ["Next.js", "Stripe", "MongoDB"],
        project_url: null,
        github_url: null,
        completed_date: "2024-02-20"
    },
    {
        title: "FitLife Mobile App",
        subtitle: "Personalized Fitness Tracker",
        image: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=2006&auto=format&fit=crop",
        size: "large",
        category: "Mobile App",
        status: "published",
        description: "Personalized fitness tracking mobile application",
        technologies: ["React Native", "Firebase", "Redux"],
        project_url: null,
        github_url: null,
        completed_date: "2024-03-10"
    },
    {
        title: "Java Coffee Branding",
        subtitle: "Digital Marketing Campaign",
        image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070&auto=format&fit=crop",
        size: "large",
        category: "Digital Marketing",
        status: "published",
        description: "Comprehensive digital marketing campaign for Java Coffee brand",
        technologies: ["Google Ads", "Facebook Ads", "SEO"],
        project_url: null,
        github_url: null,
        completed_date: "2024-04-05"
    },
    {
        title: "SkyLine Dashboard",
        subtitle: "Real Estate Analytics",
        image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2073&auto=format&fit=crop",
        size: "medium",
        category: "Software Development",
        status: "published",
        description: "Real estate analytics dashboard with advanced data visualization",
        technologies: ["Vue.js", "Chart.js", "Laravel"],
        project_url: null,
        github_url: null,
        completed_date: "2024-05-18"
    },
    {
        title: "Nusa Academy",
        subtitle: "Learning Management System",
        image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1974&auto=format&fit=crop",
        size: "large",
        category: "Web Development",
        status: "published",
        description: "Comprehensive learning management system for online courses",
        technologies: ["Next.js", "PostgreSQL", "AWS"],
        project_url: null,
        github_url: null,
        completed_date: "2024-06-22"
    },
    {
        title: "QuickPay Wallet",
        subtitle: "Fintech Mobile Solution",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop",
        size: "large",
        category: "Mobile App",
        status: "published",
        description: "Digital wallet and payment solution mobile app",
        technologies: ["Flutter", "Firebase", "Payment Gateway"],
        project_url: null,
        github_url: null,
        completed_date: "2024-07-30"
    },
    {
        title: "TravelGo SEO",
        subtitle: "SEO Performance Growth",
        image: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?q=80&w=2070&auto=format&fit=crop",
        size: "medium",
        category: "Digital Marketing",
        status: "published",
        description: "SEO optimization and performance growth campaign for TravelGo",
        technologies: ["SEO Tools", "Content Marketing", "Analytics"],
        project_url: null,
        github_url: null,
        completed_date: "2024-08-12"
    },
    {
        title: "SmartFarm IoT",
        subtitle: "Agricultural Monitoring",
        image: "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?q=80&w=2072&auto=format&fit=crop",
        size: "large",
        category: "Software Development",
        status: "published",
        description: "IoT-based agricultural monitoring and automation system",
        technologies: ["IoT", "Python", "MQTT", "React"],
        project_url: null,
        github_url: null,
        completed_date: "2024-09-25"
    },
    {
        title: "Urban Mode UI/UX",
        subtitle: "Fashion Catalog Redesign",
        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop",
        size: "large",
        category: "UI/UX Design",
        status: "published",
        description: "Complete UI/UX redesign for fashion catalog",
        technologies: ["Figma", "Adobe XD", "User Research"],
        project_url: null,
        github_url: null,
        completed_date: "2024-10-08"
    }
];

async function migratePortfolioData() {
    console.log('🚀 Starting portfolio data migration...\n');

    try {
        // Step 1: Clear existing data
        console.log('📦 Clearing existing portfolio data...');
        const { error: deleteError } = await supabase
            .from('portfolio')
            .delete()
            .neq('id', 0); // Delete all rows

        if (deleteError && deleteError.code !== 'PGRST116') { // PGRST116 = no rows to delete
            console.error('❌ Error clearing data:', deleteError.message);
            return;
        }
        console.log('✅ Existing data cleared\n');

        // Step 2: Insert new data
        console.log('📝 Inserting portfolio items...');
        const { data, error } = await supabase
            .from('portfolio')
            .insert(portfolioItems)
            .select();

        if (error) {
            console.error('❌ Error inserting data:', error.message);
            console.error('Error details:', error);
            return;
        }

        console.log(`✅ Successfully inserted ${data.length} portfolio items\n`);
        console.log('📊 Summary:');
        console.table(data.map(item => ({
            title: item.title,
            subtitle: item.subtitle,
            size: item.size,
            category: item.category,
            status: item.status
        })));

        console.log('\n🎉 Portfolio migration completed successfully!');

    } catch (err) {
        console.error('❌ Unexpected error:', err);
    }
}

migratePortfolioData();
