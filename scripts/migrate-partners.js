const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');

const SUPABASE_URL = 'https://xunkaiohgemoirtlafnz.supabase.co';
const SERVICE_ROLE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh1bmthaW9oZ2Vtb2lydGxhZm56Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MDg4MTMwNCwiZXhwIjoyMDg2NDU3MzA0fQ.p1ZdCBiKbsriIQmzBxw1C6_9-nzvAWylNtmtk9Xn56s';

const supabase = createClient(SUPABASE_URL, SERVICE_ROLE_KEY);

const partnerLogos = [
    "/assets/images/LOGO CLIENT/LOGO CLIENT/4life.png",
    "/assets/images/LOGO CLIENT/LOGO CLIENT/AWS.png",
    "/assets/images/LOGO CLIENT/LOGO CLIENT/Ayro_Trading_Jaya_1.png",
    "/assets/images/LOGO CLIENT/LOGO CLIENT/Bekawan.png",
    "/assets/images/LOGO CLIENT/LOGO CLIENT/BIG.png",
    "/assets/images/LOGO CLIENT/LOGO CLIENT/BP.png",
    "/assets/images/LOGO CLIENT/LOGO CLIENT/btrade.png",
    "/assets/images/LOGO CLIENT/LOGO CLIENT/callisto erp.png",
    "/assets/images/LOGO CLIENT/LOGO CLIENT/Ceicilia.png",
    "/assets/images/LOGO CLIENT/LOGO CLIENT/CKS_PEARL_LOGO_MASTER.png",
    "/assets/images/LOGO CLIENT/LOGO CLIENT/Danamon.png",
    "/assets/images/LOGO CLIENT/LOGO CLIENT/danarhadi.png",
    "/assets/images/LOGO CLIENT/LOGO CLIENT/eduline.png",
    "/assets/images/LOGO CLIENT/LOGO CLIENT/FIF Group.png",
    "/assets/images/LOGO CLIENT/LOGO CLIENT/gracia bag.png",
    "/assets/images/LOGO CLIENT/LOGO CLIENT/IKN.jpeg",
    "/assets/images/LOGO CLIENT/LOGO CLIENT/kalbu.png",
    "/assets/images/LOGO CLIENT/LOGO CLIENT/kusuma medika.png",
    "/assets/images/LOGO CLIENT/LOGO CLIENT/logo bayarind 1.png",
    "/assets/images/LOGO CLIENT/LOGO CLIENT/logo bisa basi.png",
    "/assets/images/LOGO CLIENT/LOGO CLIENT/logo callisto.png",
    "/assets/images/LOGO CLIENT/LOGO CLIENT/logo eds.png",
    "/assets/images/LOGO CLIENT/LOGO CLIENT/logo GSK.png",
    "/assets/images/LOGO CLIENT/LOGO CLIENT/logo khs.png",
    "/assets/images/LOGO CLIENT/LOGO CLIENT/logo medlink.png",
    "/assets/images/LOGO CLIENT/LOGO CLIENT/logo octa meyer.png",
    "/assets/images/LOGO CLIENT/LOGO CLIENT/logo spfio.png",
    "/assets/images/LOGO CLIENT/LOGO CLIENT/Logo-Aizonee-v3.png",
    "/assets/images/LOGO CLIENT/LOGO CLIENT/logo-bsi.png",
    "/assets/images/LOGO CLIENT/LOGO CLIENT/Logo-QuBisa.png",
    "/assets/images/LOGO CLIENT/LOGO CLIENT/LOGO-SINODE-1.png",
    "/assets/images/LOGO CLIENT/LOGO CLIENT/logo-zep.png",
    "/assets/images/LOGO CLIENT/LOGO CLIENT/logo_central_small.png",
    "/assets/images/LOGO CLIENT/LOGO CLIENT/mkw.png",
    "/assets/images/LOGO CLIENT/LOGO CLIENT/Nyalacinta.png",
    "/assets/images/LOGO CLIENT/LOGO CLIENT/obviously sustainable.png",
    "/assets/images/LOGO CLIENT/LOGO CLIENT/ohana.png",
    "/assets/images/LOGO CLIENT/LOGO CLIENT/Outsystems.png",
    "/assets/images/LOGO CLIENT/LOGO CLIENT/PPU.png",
    "/assets/images/LOGO CLIENT/LOGO CLIENT/PT Ako Media Asia.png",
    "/assets/images/LOGO CLIENT/LOGO CLIENT/queeri.png",
    "/assets/images/LOGO CLIENT/LOGO CLIENT/Sangfor.png",
    "/assets/images/LOGO CLIENT/LOGO CLIENT/save-the-children-logo-horizontal-color-positive_2.png",
    "/assets/images/LOGO CLIENT/LOGO CLIENT/Sehat_meyer.png",
    "/assets/images/LOGO CLIENT/LOGO CLIENT/Sequis Tower.png",
    "/assets/images/LOGO CLIENT/LOGO CLIENT/spfio.png",
    "/assets/images/LOGO CLIENT/LOGO CLIENT/susi.png",
    "/assets/images/LOGO CLIENT/LOGO CLIENT/This is april.jpg",
    "/assets/images/LOGO CLIENT/LOGO CLIENT/Titik_nol.png",
    "/assets/images/LOGO CLIENT/LOGO CLIENT/tokocrypto.png",
    "/assets/images/LOGO CLIENT/LOGO CLIENT/UT - Forum Study Ilmu Hukum.png",
    "/assets/images/LOGO CLIENT/LOGO CLIENT/xendit.png",
];

async function migratePartners() {
    console.log('🚀 Starting Partners Migration...\n');

    // 1. Clean up existing data (optional, but good for clean slate)
    // console.log('🧹 Cleaning existing partners...');
    // const { error: deleteError } = await supabase.from('partners').delete().neq('id', 0);
    // if (deleteError) console.error('Error deleting:', deleteError);

    // 2. Prepare data
    const partnersData = partnerLogos.map(logoPath => {
        // Extract filename from path
        const filename = path.basename(logoPath);
        // Remove extension and clean up name
        let name = filename.replace(/\.(png|jpg|jpeg|svg)$/i, '');
        // Replace underscores/hyphens with spaces
        name = name.replace(/[-_]/g, ' ');
        // Remove "logo" prefix if present
        name = name.replace(/^logo\s+/i, '');

        // Capitalize words
        name = name.split(' ').map(word =>
            word.charAt(0).toUpperCase() + word.slice(1)
        ).join(' ');

        return {
            name: name.trim(),
            logo: logoPath,
            status: 'active',
            category: 'client'
        };
    });

    console.log(`📦 Prepared ${partnersData.length} partners.`);
    console.log('Sample data:', partnersData[0]);

    // 3. Insert data
    console.log('💾 Inserting into database...');

    // Insert in batches to avoid payload limits
    const BATCH_SIZE = 10;
    let insertedCount = 0;

    for (let i = 0; i < partnersData.length; i += BATCH_SIZE) {
        const batch = partnersData.slice(i, i + BATCH_SIZE);
        const { data, error } = await supabase
            .from('partners')
            .insert(batch)
            .select();

        if (error) {
            console.error(`❌ Error inserting batch ${i}:`, error.message);
        } else {
            insertedCount += data.length;
            console.log(`   ✅ Inserted batch ${i / BATCH_SIZE + 1} (${data.length} items)`);
        }
    }

    console.log(`\n🎉 Migration complete! Inserted ${insertedCount} partners.`);
}

migratePartners();
