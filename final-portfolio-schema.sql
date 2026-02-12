-- Final Portfolio Schema Update
-- Execute in Supabase SQL Editor

-- 1. Drop subtitle column (no longer used)
ALTER TABLE portfolio DROP COLUMN IF EXISTS subtitle;

-- 2. Ensure size column has proper constraint and default
-- This is safe to run even if column exists
DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM information_schema.columns 
        WHERE table_name = 'portfolio' AND column_name = 'size'
    ) THEN
        ALTER TABLE portfolio 
        ADD COLUMN size TEXT DEFAULT 'large' CHECK (size IN ('large', 'medium'));
    END IF;
END $$;

-- 3. Update any NULL size values to 'large'
UPDATE portfolio SET size = 'large' WHERE size IS NULL;

-- 4. Verify the changes
SELECT id, title, category, size, status FROM portfolio ORDER BY id;
