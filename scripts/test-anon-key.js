const { createClient } = require('@supabase/supabase-js');

const SUPABASE_URL = 'https://xunkaiohgemoirtlafnz.supabase.co';
const ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh1bmthaW9oZ2Vtb2lydGxhZm56Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA4ODEzMDQsImV4cCI6MjA4NjQ1NzMwNH0.Q4p5UL7Y19yG7uyM7Rr0yoIVhobSJhQkNKqS-O-5U9U';

const supabase = createClient(SUPABASE_URL, ANON_KEY);

async function testAPIWithAnonKey() {
    console.log('🔍 Testing API with ANON KEY (what frontend uses)\n');

    try {
        console.log('Querying portfolio with ANON key...');
        const { data, error } = await supabase
            .from('portfolio')
            .select('*')
            .order('created_at', { ascending: false });

        if (error) {
            console.error('❌ Error:', error);
            return;
        }

        console.log(`✅ Retrieved ${data.length} items\n`);

        // Check size field
        console.log('📊 Size Distribution:');
        const simplified = data.map(item => ({
            id: item.id,
            title: item.title,
            category: item.category,
            size: item.size || 'NULL',
            status: item.status
        }));

        console.table(simplified);

        const sizeStats = {
            large: data.filter(i => i.size === 'large').length,
            medium: data.filter(i => i.size === 'medium').length,
            null: data.filter(i => !i.size).length
        };

        console.log('');
        console.log(`Large: ${sizeStats.large}`);
        console.log(`Medium: ${sizeStats.medium}`);
        console.log(`NULL: ${sizeStats.null}`);
        console.log('');

        if (sizeStats.medium === 4 && sizeStats.large === 6) {
            console.log('✅ SUCCESS! ANON key can now access size field!');
            console.log('');
            console.log('Next steps:');
            console.log('1. Refresh admin page (Ctrl+Shift+R)');
            console.log('2. Refresh test page: http://localhost:3001/test-portfolio-api.html');
            console.log('3. Size values should now be correct!');
        } else {
            console.log('⚠️ Size values still incorrect or NULL');
        }

    } catch (err) {
        console.error('❌ Unexpected error:', err);
    }
}

testAPIWithAnonKey();
