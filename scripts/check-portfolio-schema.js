const { createClient } = require('@supabase/supabase-js');

const SUPABASE_URL = 'https://xunkaiohgemoirtlafnz.supabase.co';
const SERVICE_ROLE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh1bmthaW9oZ2Vtb2lydGxhZm56Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MDg4MTMwNCwiZXhwIjoyMDg2NDU3MzA0fQ.p1ZdCBiKbsriIQmzBxw1C6_9-nzvAWylNtmtk9Xn56s';

const supabase = createClient(SUPABASE_URL, SERVICE_ROLE_KEY);

async function checkAndFixPortfolioSchema() {
    console.log('🔍 Checking portfolio table schema...\n');

    try {
        // Step 1: Fetch current data to check columns
        console.log('📊 Fetching current portfolio data...');
        const { data: currentData, error: fetchError } = await supabase
            .from('portfolio')
            .select('*')
            .limit(1);

        if (fetchError) {
            console.error('❌ Error fetching data:', fetchError.message);
            return;
        }

        if (currentData && currentData.length > 0) {
            const columns = Object.keys(currentData[0]);
            console.log('✅ Current columns:', columns.join(', '));
            console.log('');

            // Check if 'size' column exists
            const hasSize = columns.includes('size');
            const hasSubtitle = columns.includes('subtitle');

            console.log('Column Status:');
            console.log(`  - size: ${hasSize ? '✅ EXISTS' : '❌ MISSING'}`);
            console.log(`  - subtitle: ${hasSubtitle ? '⚠️ EXISTS (should be removed)' : '✅ NOT EXISTS'}`);
            console.log('');

            if (!hasSize) {
                console.log('❌ PROBLEM FOUND: "size" column is missing!');
                console.log('');
                console.log('📝 REQUIRED ACTION:');
                console.log('You MUST execute this SQL in Supabase Dashboard:');
                console.log('');
                console.log('```sql');
                console.log('-- Add size column');
                console.log('ALTER TABLE portfolio ADD COLUMN IF NOT EXISTS size TEXT DEFAULT \'large\' CHECK (size IN (\'large\', \'medium\'));');
                console.log('');
                console.log('-- Update existing records');
                console.log('UPDATE portfolio SET size = \'large\' WHERE size IS NULL;');
                console.log('```');
                console.log('');
                return;
            }

            // Step 2: Check current size values
            console.log('📊 Checking size values in database...');
            const { data: allData, error: allError } = await supabase
                .from('portfolio')
                .select('id, title, size, category');

            if (allError) {
                console.error('❌ Error fetching all data:', allError.message);
                return;
            }

            console.log('');
            console.log('Current Portfolio Items:');
            console.table(allData.map(item => ({
                ID: item.id,
                Title: item.title,
                Category: item.category || 'N/A',
                Size: item.size || 'NULL'
            })));
            console.log('');

            // Count size distribution
            const sizeCount = allData.reduce((acc, item) => {
                const size = item.size || 'NULL';
                acc[size] = (acc[size] || 0) + 1;
                return acc;
            }, {});

            console.log('Size Distribution:');
            Object.entries(sizeCount).forEach(([size, count]) => {
                console.log(`  ${size}: ${count} items`);
            });
            console.log('');

            // Step 3: Fix NULL sizes
            const nullSizes = allData.filter(item => !item.size);
            if (nullSizes.length > 0) {
                console.log(`⚠️ Found ${nullSizes.length} items with NULL size. Updating to 'large'...`);

                for (const item of nullSizes) {
                    const { error: updateError } = await supabase
                        .from('portfolio')
                        .update({ size: 'large' })
                        .eq('id', item.id);

                    if (updateError) {
                        console.error(`❌ Failed to update ${item.title}:`, updateError.message);
                    } else {
                        console.log(`✅ Updated "${item.title}" to size: large`);
                    }
                }
                console.log('');
            }

            console.log('✅ Schema check complete!');
            console.log('');
            console.log('Next Steps:');
            console.log('1. Refresh admin page (Ctrl+Shift+R)');
            console.log('2. Change a portfolio item size to "medium"');
            console.log('3. Click "Simpan Perubahan"');
            console.log('4. Refresh homepage to see changes');

        } else {
            console.log('⚠️ No portfolio data found in database');
        }

    } catch (err) {
        console.error('❌ Unexpected error:', err);
    }
}

checkAndFixPortfolioSchema();
