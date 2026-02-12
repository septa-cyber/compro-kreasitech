const { createClient } = require('@supabase/supabase-js');

const SUPABASE_URL = 'https://xunkaiohgemoirtlafnz.supabase.co';
const SERVICE_ROLE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh1bmthaW9oZ2Vtb2lydGxhZm56Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MDg4MTMwNCwiZXhwIjoyMDg2NDU3MzA0fQ.p1ZdCBiKbsriIQmzBxw1C6_9-nzvAWylNtmtk9Xn56s';

const supabase = createClient(SUPABASE_URL, SERVICE_ROLE_KEY);

async function disableRLS() {
    console.log('🔓 Disabling Row Level Security for team, portfolio, and partners tables...\n');

    const tables = ['team', 'portfolio', 'partners'];

    for (const table of tables) {
        console.log(`📋 Disabling RLS for: ${table}`);

        try {
            // Using raw SQL via the Supabase REST API PostgreSQL extension
            const { data, error } = await supabase.rpc('exec', {
                sql: `ALTER TABLE ${table} DISABLE ROW LEVEL SECURITY;`
            });

            if (error) {
                console.log(`   ⚠️  Could not disable via RPC (expected):`, error.message);
                console.log(`   ℹ️  You need to run this SQL manually in Supabase Dashboard:`);
                console.log(`      ALTER TABLE ${table} DISABLE ROW LEVEL SECURITY;`);
            } else {
                console.log(`   ✅ RLS disabled for ${table}`);
            }
        } catch (err) {
            console.log(`   ⚠️  Error:`, err.message);
        }
    }

    console.log('\n' + '='.repeat(70));
    console.log('📌 MANUAL STEP REQUIRED:');
    console.log('Please run these SQL commands in Supabase SQL Editor:');
    console.log('https://supabase.com/dashboard/project/xunkaiohgemoirtlafnz/sql/new');
    console.log('='.repeat(70));
    console.log('\nALTER TABLE team DISABLE ROW LEVEL SECURITY;');
    console.log('ALTER TABLE portfolio DISABLE ROW LEVEL SECURITY;');
    console.log('ALTER TABLE partners DISABLE ROW LEVEL SECURITY;');
    console.log('\n' + '='.repeat(70));
    console.log('\n💡 Alternatively, you can enable RLS with policies that allow');
    console.log('   authenticated users to insert/update/delete data.');
    console.log('='.repeat(70));
}

disableRLS();
