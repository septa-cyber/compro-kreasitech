# Portfolio Migration - Manual Steps

## ⚠️ SQL Migration Required

Supabase tidak mengizinkan ALTER TABLE via REST API, jadi perlu dijalankan manual.

### Langkah 1: Execute SQL di Supabase Dashboard

1. **Buka:** https://supabase.com/dashboard/project/xunkaiohgemoirtlafnz/sql/new

2. **Paste SQL berikut:**
```sql
ALTER TABLE portfolio 
ADD COLUMN IF NOT EXISTS subtitle TEXT,
ADD COLUMN IF NOT EXISTS size TEXT CHECK (size IN ('large', 'medium'));
```

3. **Klik tombol "RUN"** (Ctrl+Enter)

4. **Tunggu pesan sukses** (biasanya "Success. No rows returned")

---

### Langkah 2: Migrate Data (Otomatis via Script)

Setelah SQL berhasil dijalankan, saya akan execute:

```bash
node scripts/migrate-portfolio-data.js
```

Script ini akan:
- ✅ Hapus data portfolio lama (jika ada)
-  Tambah 10 portfolio items dari `portfolioData.ts`
  - Danarhadi CRM
  - EcoMart e-Commerce
  - FitLife Mobile App
  - Java Coffee Branding
  - SkyLine Dashboard
  - Nusa Academy
  - QuickPay Wallet
  - TravelGo SEO
  - SmartFarm IoT
  - Urban Mode UI/UX

---

### Langkah 3: Update Frontend Components

Setelah data berhasil dimigrate, saya akan update:
- `components/portfolio/FeaturedShowcase.tsx` → Fetch dari API
- `components/landing/Portfolio3.tsx` → Fetch dari API

---

## Status Saat Ini

❌ **Kolom database belum ditambahkan** (size & subtitle)
⏳ **Menunggu user execute SQL di Supabase Dashboard**

Setelah selesai, beri tahu saya agar bisa lanjut migrate data!
