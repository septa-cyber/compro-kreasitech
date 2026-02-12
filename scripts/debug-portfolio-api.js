const { createClient } = require('@supabase/supabase-js');

const SUPABASE_URL = 'https://xunkaiohgemoirtlafnz.supabase.co';
const SERVICE_ROLE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh1bmthaW9oZ2Vtb2lydGxhZm56Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MDg4MTMwNCwiZXhwIjoyMDg2NDU3MzA0fQ.p1ZdCBiKbsriIQmzBxw1C6_9-nzvAWylNtmtk9Xn56s';

const supabase = createClient(SUPABASE_URL, SERVICE_ROLE_KEY);

async function debugPortfolioAPI() {
    console.log('🔍 Debug: Comparing Database vs API Response\n');

    try {
        // 1. Direct database query
        console.log('📊 DIRECT DATABASE QUERY:');
        const { data: dbData, error: dbError } = await supabase
            .from('portfolio')
            .select('id, title, category, size, status')
            .order('id');

        if (dbError) {
            console.error('❌ Database error:', dbError.message);
            return;
        }

        console.table(dbData);
        console.log('');

        // 2. Simulate API call (what frontend sees)
        console.log('🌐 API SIMULATION (what admin panel fetches):');
        const { data: apiData, error: apiError } = await supabase
            .from('portfolio')
            .select('*')
            .order('id');

        if (apiError) {
            console.error('❌ API error:', apiError.message);
            return;
        }

        // Show what fields are returned
        if (apiData && apiData.length > 0) {
            const sampleItem = apiData[0];
            console.log('Fields returned from API:');
            console.log(Object.keys(sampleItem).join(', '));
            console.log('');
        }

        // Display API data same format as database
        const apiSimple = apiData.map(item => ({
            id: item.id,
            title: item.title,
            category: item.category,
            size: item.size,
            status: item.status
        }));

        console.table(apiSimple);
        console.log('');

        // 3. Compare
        console.log('🔄 COMPARISON:');
        let hasDifferences = false;

        for (let i = 0; i < dbData.length; i++) {
            const db = dbData[i];
            const api = apiSimple[i];

            if (db.size !== api.size || db.category !== api.category) {
                hasDifferences = true;
                console.log(`❌ MISMATCH at ID ${db.id}:`);
                console.log(`   Database: size=${db.size}, category=${db.category}`);
                console.log(`   API:      size=${api.size}, category=${api.category}`);
            }
        }

        if (!hasDifferences) {
            console.log('✅ Database and API return IDENTICAL data!');
            console.log('');
            console.log('If admin panel shows different data, the issue is:');
            console.log('1. Browser cache - try hard refresh (Ctrl+Shift+R)');
            console.log('2. API route not using correct fetch');
            console.log('3. Frontend state management issue');
        }

        console.log('');
        console.log('📝 RECOMMENDED ACTIONS:');
        console.log('1. Open browser DevTools (F12)');
        console.log('2. Go to Network tab');
        console.log('3. Refresh admin portfolio page');
        console.log('4. Look for /api/portfolio request');
        console.log('5. Check Response - should match database values above');

    } catch (err) {
        console.error('❌ Unexpected error:', err);
    }
}

debugPortfolioAPI();
