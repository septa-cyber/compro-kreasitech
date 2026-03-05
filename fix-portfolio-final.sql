
-- FINAL FIX FOR PORTFOLIO TABLE
-- Execute this in Supabase SQL Editor (https://supabase.com/dashboard/project/_/sql)

-- 1. Add missing columns with proper defaults
ALTER TABLE portfolio 
ADD COLUMN IF NOT EXISTS size TEXT DEFAULT 'large' CHECK (size IN ('large', 'medium')),
ADD COLUMN IF NOT EXISTS marquee_row TEXT DEFAULT 'top' CHECK (marquee_row IN ('top', 'bottom')),
ADD COLUMN IF NOT EXISTS subtitle TEXT;

-- 2. Ensure status column has correct default if it somehow differs
ALTER TABLE portfolio 
ALTER COLUMN status SET DEFAULT 'draft';

-- 3. Update existing NULL values to prevent UI issues
UPDATE portfolio SET size = 'large' WHERE size IS NULL;
UPDATE portfolio SET marquee_row = 'top' WHERE marquee_row IS NULL;
UPDATE portfolio SET status = 'draft' WHERE status IS NULL;

-- 4. Verify table structure
SELECT column_name, data_type, is_nullable 
FROM information_schema.columns 
WHERE table_name = 'portfolio';
