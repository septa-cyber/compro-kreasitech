-- Add avatar_url column to users table if it doesn't exist
-- Run this in the Supabase SQL Editor: https://supabase.com/dashboard/project/xunkaiohgemoirtlafnz/sql/new

ALTER TABLE users ADD COLUMN IF NOT EXISTS avatar_url TEXT;

-- Refresh the schema cache
NOTIFY pgrst, 'reload schema';
