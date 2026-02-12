const { createClient } = require('@supabase/supabase-js');

const SUPABASE_URL = 'https://xunkaiohgemoirtlafnz.supabase.co';
const SERVICE_ROLE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh1bmthaW9oZ2Vtb2lydGxhZm56Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MDg4MTMwNCwiZXhwIjoyMDg2NDU3MzA0fQ.p1ZdCBiKbsriIQmzBxw1C6_9-nzvAWylNtmtk9Xn56s';

const supabase = createClient(SUPABASE_URL, SERVICE_ROLE_KEY);

async function testPortfolioSizeField() {
    console.log('🔍 Testing Portfolio Size Field\n');

    try {
        // Test 1: Check table schema
        console.log('1️⃣ Checking table columns...');
        const { data: schemaData, error: schemaError } = await supabase
            .from('portfolio')
            .select('*')
            .limit(1);

        if (schemaError) {
            console.error('❌ Error:', schemaError);
            return;
        }

        if (schemaData && schemaData.length > 0) {
            console.log('✅ Columns in table:', Object.keys(schemaData[0]).join(', '));
            console.log('✅ Has size column:', Object.keys(schemaData[0]).includes('size'));
            console.log('');
        }

        // Test 2: Select size explicitly
        console.log('2️⃣ Testing explicit size selection...');
        const { data: explicitData, error: explicitError } = await supabase
            .from('portfolio')
            .select('id, title, size')
            .limit(3);

        if (explicitError) {
            console.error('❌ Error selecting size:', explicitError);
            return;
        }

        console.log('✅ Explicit size query result:');
        console.table(explicitData);
        console.log('');

        // Test 3: Full select with size
        console.log('3️⃣ Testing full * selection...');
        const { data: fullData, error: fullError } = await supabase
            .from('portfolio')
            .select('*')
            .order('created_at', { ascending: false });

        if (fullError) {
            console.error('❌ Error:', fullError);
            return;
        }

        console.log(`✅ Retrieved ${fullData.length} items`);
        console.log('');

        // Check size values
        const sizeStats = {
            large: fullData.filter(i => i.size === 'large').length,
            medium: fullData.filter(i => i.size === 'medium').length,
            null: fullData.filter(i => i.size === null || i.size === undefined).length
        };

        console.log('📊 Size Distribution:');
        console.log(`  Large: ${sizeStats.large}`);
        console.log(`  Medium: ${sizeStats.medium}`);
        console.log(`  NULL: ${sizeStats.null}`);
        console.log('');

        // Show sample with all fields
        console.log('📋 Sample items with size:');
        fullData.slice(0, 3).forEach(item => {
            console.log(`  - ${item.title}: size=${item.size || 'NULL'}`);
        });
        console.log('');

        if (sizeStats.null > 0) {
            console.log('⚠️ WARNING: Some items have NULL size!');
            console.log('   Run this SQL to fix:');
            console.log('   UPDATE portfolio SET size = \'large\' WHERE size IS NULL;');
        } else if (sizeStats.medium === 4 && sizeStats.large === 6) {
            console.log('✅ All items have correct size values!');
        }

    } catch (err) {
        console.error('❌ Unexpected error:', err);
    }
}

testPortfolioSizeField();
