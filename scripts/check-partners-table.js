const { createClient } = require('@supabase/supabase-js');

const SUPABASE_URL = 'https://xunkaiohgemoirtlafnz.supabase.co';
const SERVICE_ROLE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh1bmthaW9oZ2Vtb2lydGxhZm56Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MDg4MTMwNCwiZXhwIjoyMDg2NDU3MzA0fQ.p1ZdCBiKbsriIQmzBxw1C6_9-nzvAWylNtmtk9Xn56s';

const supabase = createClient(SUPABASE_URL, SERVICE_ROLE_KEY);

async function checkPartnersTable() {
    console.log('🔍 Checking partners table...\n');

    try {
        const { data, error } = await supabase
            .from('partners')
            .select('*')
            .limit(1);

        if (error) {
            console.log('❌ Table likely does not exist or error:', error.message);
        } else {
            console.log('✅ Table exists!');
            if (data.length > 0) {
                console.log('   Columns:', Object.keys(data[0]).join(', '));
            } else {
                console.log('   Table is empty.');
            }
        }
    } catch (err) {
        console.error('❌ Unexpected error:', err);
    }
}

checkPartnersTable();
