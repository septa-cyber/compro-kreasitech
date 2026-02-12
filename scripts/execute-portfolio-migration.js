const { createClient } = require('@supabase/supabase-js');

const SUPABASE_URL = 'https://xunkaiohgemoirtlafnz.supabase.co';
const SERVICE_ROLE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh1bmthaW9oZ2Vtb2lydGxhZm56Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MDg4MTMwNCwiZXhwIjoyMDg2NDU3MzA0fQ.p1ZdCBiKbsriIQmzBxw1C6_9-nzvAWylNtmtk9Xn56s';

const supabase = createClient(SUPABASE_URL, SERVICE_ROLE_KEY);

async function executeSQLMigration() {
    console.log('🔧 Attempting to add subtitle and size columns to portfolio table...\n');

    try {
        // Try using RPC to execute raw SQL
        const { data, error } = await supabase.rpc('exec_sql', {
            sql: `
                ALTER TABLE portfolio 
                ADD COLUMN IF NOT EXISTS subtitle TEXT,
                ADD COLUMN IF NOT EXISTS size TEXT CHECK (size IN ('large', 'medium'));
            `
        });

        if (error) {
            console.log('⚠️  RPC method not available. This is expected.');
            console.log('📋 Please execute the following SQL manually in Supabase SQL Editor:\n');
            console.log('--------------------------------------------------');
            console.log('ALTER TABLE portfolio');
            console.log("ADD COLUMN IF NOT EXISTS subtitle TEXT,");
            console.log("ADD COLUMN IF NOT EXISTS size TEXT CHECK (size IN ('large', 'medium'));");
            console.log('--------------------------------------------------\n');
            console.log('After executing the SQL, run: node scripts/migrate-portfolio-data.js');
            return false;
        }

        console.log('✅ SQL migration executed successfully!');
        return true;
    } catch (err) {
        console.log('⚠️  Direct SQL execution not available via API.');
        console.log('📋 Please execute the SQL manually in Supabase Dashboard.\n');
        console.log('Alternative: I will try to insert data anyway, Supabase might auto-handle new columns...\n');
        return false;
    }
}

executeSQLMigration();
