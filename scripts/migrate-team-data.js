const { createClient } = require('@supabase/supabase-js');

const SUPABASE_URL = 'https://xunkaiohgemoirtlafnz.supabase.co';
const SERVICE_ROLE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh1bmthaW9oZ2Vtb2lydGxhZm56Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MDg4MTMwNCwiZXhwIjoyMDg2NDU3MzA0fQ.p1ZdCBiKbsriIQmzBxw1C6_9-nzvAWylNtmtk9Xn56s';

const supabase = createClient(SUPABASE_URL, SERVICE_ROLE_KEY);

async function migrateRealTeamData() {
    console.log('🔄 Migrating real KreasiTech team data to database...\n');

    // Data asli Tim KreasiTech dari screenshot dan kode sebelumnya
    const realTeamMembers = [
        { name: "Nurjanah", role: "Finance, Accounting, and Tax Officer (FAT Officer)", avatar: "/assets/images/employee/Janah.png", status: "active" },
        { name: "Vincintia Dwi Tamara", role: "HR Lead (Operations, Legal & Employee Relations)", avatar: "/assets/images/employee/Tia.png", status: "active" },
        { name: "Nina Pungki Kusuma", role: "Talent Acquisition", avatar: "/assets/images/employee/Nina.png", status: "active" },
        { name: "Rio Kisna Eka Putra", role: "IT Project Manager & Business Analyst", avatar: "/assets/images/employee/Rio.png", status: "active" },
        { name: "Rahmat Khoirun Ni'am", role: "IT Project Manager & Business Analyst", avatar: "/assets/images/employee/Rahmat.png", status: "active" },
        { name: "Wafikulinnuha", role: "Outsystems & Backend Developer", avatar: "/assets/images/employee/Wafik.png", status: "active" },
        { name: "Fendi Rahman Saputro", role: "Frontend Web & Mobile Developer", avatar: "/assets/images/employee/Fendi.png", status: "active" },
        { name: "Prafitra Dimas Akbar", role: "Backend Developer", avatar: "/assets/images/employee/Dimas.png", status: "active" },
        { name: "Imdadu Rohman", role: "Frontend Web & Mobile Developer", avatar: "/assets/images/employee/Imdad.png", status: "active" },
        { name: "Galang Pratama Sukma Putra", role: "IT Support", avatar: "/assets/images/employee/Galang.png", status: "active" },
        { name: "Luthfi Robani", role: "IT Support", avatar: "/assets/images/employee/Luthfi.png", status: "active" },
        { name: "Canu Ali Subhan", role: "Quality Assurance Engineer", avatar: "/assets/images/employee/Canu.png", status: "active" },
        { name: "Rian Rama Nugraha", role: "Genexus Developer & DevOps Engineer", avatar: "/assets/images/employee/Rian.png", status: "active" },
        { name: "Trifena Katrina", role: "UIUX Designer & Quality Assurance Engineer", avatar: "/assets/images/employee/Fena.png", status: "active" },
        // Interns
        { name: "Wahyu Septa Pramudya", role: "UI/UX Designer (Intern)", avatar: "/assets/images/Intern/Septa.png", status: "active" },
        { name: "Pradipta Triatmaja Purwa Nugraha", role: "Frontend Web Developer (Intern)", avatar: "/assets/images/Intern/Dipta.png", status: "active" },
    ];

    try {
        // Pertama, hapus sample data palsu (John Doe, Jane Smith, Mike Johnson)
        console.log('🗑️  Removing sample data...');
        const { error: deleteError } = await supabase
            .from('team')
            .delete()
            .in('name', ['John Doe', 'Jane Smith', 'Mike Johnson']);

        if (deleteError && deleteError.code !== 'PGRST116') { // PGRST116 = no rows to delete
            console.log('   ⚠️  Error deleting sample data:', deleteError.message);
        } else {
            console.log('   ✅ Sample data removed');
        }

        // Insert data asli Tim KreasiTech
        console.log('\n👥 Inserting real KreasiTech team members...');
        const { data, error } = await supabase
            .from('team')
            .insert(realTeamMembers)
            .select();

        if (error) {
            console.error('   ❌ Error inserting team data:', error.message);
            console.error('   Details:', error);
            console.log('\n⚠️  This error might be due to Row Level Security (RLS).');
            console.log('   Please run disable-rls.sql first!');
        } else {
            console.log(`   ✅ Successfully added ${data.length} team members`);
            console.log('\n📋 Team members added:');
            data.forEach(member => {
                console.log(`   - ${member.name} (${member.role})`);
            });
        }

        console.log('\n✅ Migration complete!');
        console.log('\n🎉 You can now visit:');
        console.log('   - Admin: http://localhost:3001/admin/dashboard/team');
        console.log('   - Website: http://localhost:3001/company');

    } catch (err) {
        console.error('❌ Unexpected error:', err);
    }
}

migrateRealTeamData();
