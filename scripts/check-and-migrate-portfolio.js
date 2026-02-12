const { createClient } = require('@supabase/supabase-js');

const SUPABASE_URL = 'https://xunkaiohgemoirtlafnz.supabase.co';
const SERVICE_ROLE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh1bmthaW9oZ2Vtb2lydGxhZm56Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MDg4MTMwNCwiZXhwIjoyMDg2NDU3MzA0fQ.p1ZdCBiKbsriIQmzBxw1C6_9-nzvAWylNtmtk9Xn56s';

const supabase = createClient(SUPABASE_URL, SERVICE_ROLE_KEY);

async function checkAndMigratePortfolio() {
    console.log('🔍 Checking portfolio table schema...\n');

    try {
        // Try to insert a test record with subtitle and size
        const testData = {
            title: "TEST - Schema Check",
            subtitle: "Testing subtitle field",
            size: "medium",
            category: "Test",
            status: "draft",
            image: "https://placehold.co/400x300"
        };

        console.log('📝 Attempting to insert test record with subtitle and size...');
        const { data: testInsert, error: testError } = await supabase
            .from('portfolio')
            .insert(testData)
            .select()
            .single();

        if (testError) {
            if (testError.message.includes('column') && testError.message.includes('does not exist')) {
                console.log('❌ Columns missing! Error:', testError.message);
                console.log('\n📋 ACTION REQUIRED:');
                console.log('Please execute this SQL in Supabase Dashboard → SQL Editor:\n');
                console.log('--------------------------------------------------');
                console.log('ALTER TABLE portfolio');
                console.log('ADD COLUMN IF NOT EXISTS subtitle TEXT,');
                console.log("ADD COLUMN IF NOT EXISTS size TEXT CHECK (size IN ('large', 'medium'));");
                console.log('--------------------------------------------------\n');
                console.log('After executing, run: node scripts/migrate-portfolio-data.js');
                return;
            } else {
                console.error('❌ Insert error:', testError.message);
                return;
            }
        }

        console.log('✅ Test insert successful! Columns exist.');
        console.log('📊 Test record:', testInsert);

        // Delete test record
        console.log('\n🗑️  Deleting test record...');
        await supabase.from('portfolio').delete().eq('id', testInsert.id);
        console.log('✅ Test record deleted');

        // Proceed with full migration
        console.log('\n🚀 Schema verified! Proceeding with data migration...\n');

        // Import and run migration
        const migration = require('./migrate-portfolio-data.js');

    } catch (err) {
        console.error('❌ Unexpected error:', err);
    }
}

checkAndMigratePortfolio();
