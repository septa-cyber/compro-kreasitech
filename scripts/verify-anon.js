// Values from .env.local
const SUPABASE_URL = 'https://xunkaiohgemoirtlafnz.supabase.co';
const ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh1bmthaW9oZ2Vtb2lydGxhZm56Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA4ODEzMDQsImV4cCI6MjA4NjQ1NzMwNH0.RESUfrc3RJE1SRXRz0rKBKWPMTkfRuwJhXxtawLtxxM';

async function verifyAnonAccess() {
    console.log('🔍 Verifying access with ANON KEY (Public Client)...\n');
    console.log('Target: team table');

    // Manually fetch using REST API to simulate exactly what the browser/nextjs client does
    try {
        const response = await fetch(`${SUPABASE_URL}/rest/v1/team?select=*`, {
            headers: {
                'apikey': ANON_KEY,
                'Authorization': `Bearer ${ANON_KEY}`
            }
        });

        if (response.ok) {
            const data = await response.json();
            console.log(`✅ Status: ${response.status} ${response.statusText}`);
            console.log(`📊 Rows returned: ${data.length}`);

            if (data.length === 0) {
                console.log('\n❌ RESULT: 0 rows returned.');
                console.log('👉 CAUSE: Row Level Security (RLS) is active and blocking access.');
                console.log('👉 SOLUTION: You MUST execute the SQL to disable RLS.');
            } else {
                console.log('\n✅ RESULT: Access successful! Found ' + data.length + ' rows.');
            }
        } else {
            console.error(`❌ Error: ${response.status} ${response.statusText}`);
        }
    } catch (err) {
        console.error('❌ Unexpected error:', err);
    }
}

verifyAnonAccess();
