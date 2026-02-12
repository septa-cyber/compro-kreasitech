const { createClient } = require('@supabase/supabase-js');

const SUPABASE_URL = 'https://xunkaiohgemoirtlafnz.supabase.co';
const SERVICE_ROLE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh1bmthaW9oZ2Vtb2lydGxhZm56Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MDg4MTMwNCwiZXhwIjoyMDg2NDU3MzA0fQ.p1ZdCBiKbsriIQmzBxw1C6_9-nzvAWylNtmtk9Xn56s';

const supabase = createClient(SUPABASE_URL, SERVICE_ROLE_KEY);

async function verifyData() {
    console.log('🔍 Verifying team data in database...\n');

    try {
        const { data, error, count } = await supabase
            .from('team')
            .select('*', { count: 'exact' });

        if (error) {
            console.error('❌ Error fetching data:', error.message);
        } else {
            console.log(`✅ Found ${count} total team members`);
            console.log(`📊 Data sample:`);
            console.table(data.slice(0, 5).map(m => ({ name: m.name, status: m.status })));

            // Filter active members
            const activeMembers = data.filter(m => m.status === 'active');
            console.log(`\n✅ Found ${activeMembers.length} active members`);

            if (activeMembers.length < 7) {
                console.log('⚠️ Warning: Less than 7 active members found!');
            }
        }
    } catch (err) {
        console.error('❌ Unexpected error:', err);
    }
}

verifyData();
