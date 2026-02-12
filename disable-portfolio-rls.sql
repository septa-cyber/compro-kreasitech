-- QUICK FIX: Disable RLS for Portfolio Table
-- Execute in Supabase SQL Editor

-- This is the fastest fix - disable RLS entirely for portfolio table
ALTER TABLE portfolio DISABLE ROW LEVEL SECURITY;

-- Verify size field is now accessible
SELECT id, title, category, size, status FROM portfolio LIMIT 5;
