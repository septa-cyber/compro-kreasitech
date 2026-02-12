const { createClient } = require('@supabase/supabase-js');

const SUPABASE_URL = 'https://xunkaiohgemoirtlafnz.supabase.co';
const SERVICE_ROLE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh1bmthaW9oZ2Vtb2lydGxhZm56Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MDg4MTMwNCwiZXhwIjoyMDg2NDU3MzA0fQ.p1ZdCBiKbsriIQmzBxw1C6_9-nzvAWylNtmtk9Xn56s';

const supabase = createClient(SUPABASE_URL, SERVICE_ROLE_KEY);

async function addSampleData() {
    console.log('🌱 Adding sample data to Supabase...\n');

    // Sample Team Members
    const sampleTeam = [
        {
            name: 'John Doe',
            role: 'CEO & Founder',
            avatar: 'https://placehold.co/400x400',
            bio: 'Passionate about technology and innovation',
            email: 'john@kreasitech.com',
            linkedin: 'https://linkedin.com/in/johndoe',
            status: 'active'
        },
        {
            name: 'Jane Smith',
            role: 'CTO',
            avatar: 'https://placehold.co/400x400',
            bio: 'Tech enthusiast with 10+ years experience',
            email: 'jane@kreasitech.com',
            linkedin: 'https://linkedin.com/in/janesmith',
            status: 'active'
        },
        {
            name: 'Mike Johnson',
            role: 'Lead Developer',
            avatar: 'https://placehold.co/400x400',
            bio: 'Full-stack developer specializing in React and Node.js',
            email: 'mike@kreasitech.com',
            status: 'active'
        }
    ];

    // Sample Portfolio Items
    const samplePortfolio = [
        {
            title: 'E-Commerce Platform',
            description: 'Modern e-commerce solution with real-time inventory management',
            image: 'https://placehold.co/600x400',
            category: 'Web Development',
            technologies: ['React', 'Node.js', 'PostgreSQL'],
            project_url: 'https://example.com',
            status: 'published'
        },
        {
            title: 'Mobile Banking App',
            description: 'Secure mobile banking application with biometric authentication',
            image: 'https://placehold.co/600x400',
            category: 'Mobile App',
            technologies: ['React Native', 'Firebase', 'TypeScript'],
            status: 'published'
        },
        {
            title: 'CRM System',
            description: 'Customer relationship management system for enterprises',
            image: 'https://placehold.co/600x400',
            category: 'Enterprise Software',
            technologies: ['Vue.js', 'Laravel', 'MySQL'],
            status: 'published'
        }
    ];

    // Sample Partners
    const samplePartners = [
        {
            name: 'Tech Corp',
            logo: 'https://placehold.co/200x100',
            website: 'https://techcorp.com',
            description: 'Leading technology company',
            category: 'Technology',
            status: 'active'
        },
        {
            name: 'Digital Solutions Inc',
            logo: 'https://placehold.co/200x100',
            website: 'https://digitalsolutions.com',
            description: 'Digital transformation partner',
            category: 'Consulting',
            status: 'active'
        },
        {
            name: 'Innovation Labs',
            logo: 'https://placehold.co/200x100',
            website: 'https://innovationlabs.com',
            description: 'Innovation and research partner',
            category: 'Research',
            status: 'active'
        }
    ];

    try {
        // Add team members
        console.log('👥 Adding team members...');
        const { data: teamData, error: teamError } = await supabase
            .from('team')
            .insert(sampleTeam)
            .select();

        if (teamError) {
            console.error('   ❌ Error adding team:', teamError.message);
        } else {
            console.log(`   ✅ Added ${teamData.length} team members`);
        }

        // Add portfolio items
        console.log('💼 Adding portfolio items...');
        const { data: portfolioData, error: portfolioError } = await supabase
            .from('portfolio')
            .insert(samplePortfolio)
            .select();

        if (portfolioError) {
            console.error('   ❌ Error adding portfolio:', portfolioError.message);
        } else {
            console.log(`   ✅ Added ${portfolioData.length} portfolio items`);
        }

        // Add partners
        console.log('🤝 Adding partners...');
        const { data: partnersData, error: partnersError } = await supabase
            .from('partners')
            .insert(samplePartners)
            .select();

        if (partnersError) {
            console.error('   ❌ Error adding partners:', partnersError.message);
        } else {
            console.log(`   ✅ Added ${partnersData.length} partners`);
        }

        console.log('\n✅ Sample data added successfully!');
        console.log('\n📊 Summary:');
        console.log(`   - Team Members: ${teamData?.length || 0}`);
        console.log(`   - Portfolio Items: ${portfolioData?.length || 0}`);
        console.log(`   - Partners: ${partnersData?.length || 0}`);

        console.log('\n🎉 You can now:');
        console.log('   1. Visit admin pages to manage content');
        console.log('   2. Check the website to see the data displayed');
        console.log('   3. Start the dev server: npm run dev');

    } catch (err) {
        console.error('❌ Unexpected error:', err);
    }
}

addSampleData();
