-- Update Portfolio table schema
-- Execute this in Supabase SQL Editor

-- Drop subtitle column if it exists (no longer needed)
ALTER TABLE portfolio DROP COLUMN IF EXISTS subtitle;

-- Add size column if it doesn't exist
ALTER TABLE portfolio 
ADD COLUMN IF NOT EXISTS size TEXT DEFAULT 'large' CHECK (size IN ('large', 'medium'));

-- Update existing records to have default size if null
UPDATE portfolio SET size = 'large' WHERE size IS NULL;
