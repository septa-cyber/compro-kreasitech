const { createClient } = require('@supabase/supabase-js');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
    console.error('Supabase credentials missing in .env.local');
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function testFetch() {
    console.log('Fetching jobs with status=open...');
    const { data, error } = await supabase
        .from('jobs')
        .select('*')
        .eq('status', 'open');

    if (error) {
        console.error('Error fetching jobs:', error);
    } else {
        console.log('Jobs found:', data.length);
        data.forEach(job => {
            console.log(`- ${job.id}: ${job.title} (${job.status})`);
        });
    }
}

testFetch();
