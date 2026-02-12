const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');

const SUPABASE_URL = 'https://xunkaiohgemoirtlafnz.supabase.co';
const SERVICE_ROLE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh1bmthaW9oZ2Vtb2lydGxhZm56Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MDg4MTMwNCwiZXhwIjoyMDg2NDU3MzA0fQ.p1ZdCBiKbsriIQmzBxw1C6_9-nzvAWylNtmtk9Xn56s';

// Create Supabase client with service role
const supabase = createClient(SUPABASE_URL, SERVICE_ROLE_KEY, {
    auth: {
        autoRefreshToken: false,
        persistSession: false
    }
});

// Read SQL file
const sqlPath = path.join(__dirname, '..', 'supabase_extension.sql');
const sqlContent = fs.readFileSync(sqlPath, 'utf8');

console.log('📝 SQL Schema:');
console.log(sqlContent);
console.log('\n🚀 Creating tables in Supabase...\n');

async function executeSql() {
    try {
        // Execute the SQL using rpc if available, otherwise create tables via REST API
        // Since we can't directly execute DDL via REST API, we'll use individual table checks and creation

        console.log('✅ Attempting to create tables...\n');

        // Test by trying to query each table - if it fails, we know it doesn't exist
        const tables = ['team', 'portfolio', 'partners'];

        for (const table of tables) {
            console.log(`📋 Checking table: ${table}`);

            const { data, error } = await supabase
                .from(table)
                .select('*')
                .limit(1);

            if (error) {
                if (error.message.includes('relation') || error.message.includes('does not exist')) {
                    console.log(`   ⚠️  Table "${table}" does not exist yet`);
                } else {
                    console.log(`   ❓ Unknown status for "${table}":`, error.message);
                }
            } else {
                console.log(`   ✅ Table "${table}" already exists`);
            }
        }

        console.log('\n' + '='.repeat(60));
        console.log('⚠️  Direct DDL execution requires manual SQL execution');
        console.log('📌 Please execute the SQL manually in Supabase Dashboard:');
        console.log('   1. Go to: https://supabase.com/dashboard/project/xunkaiohgemoirtlafnz/sql/new');
        console.log('   2. Copy the SQL from: supabase_extension.sql');
        console.log('   3. Paste and click "Run"');
        console.log('='.repeat(60));

    } catch (err) {
        console.error('❌ Error:', err.message);
    }
}

executeSql();
