-- Portfolio Table: Grant SELECT access to size column for anon users
-- Execute this in Supabase SQL Editor

-- 1. Check current RLS policies
SELECT * FROM pg_policies WHERE tablename = 'portfolio';

-- 2. Ensure anon users can SELECT size column
-- Option A: Update existing SELECT policy to include all columns
DROP POLICY IF EXISTS "portfolio_select_published" ON portfolio;
CREATE POLICY "portfolio_select_published" ON portfolio
    FOR SELECT
    TO anon, authenticated
    USING (status = 'published' OR true);

-- Option B: If you want more control, create separate policies
-- This allows read access to all columns
DROP POLICY IF EXISTS "portfolio_select_all" ON portfolio;
CREATE POLICY "portfolio_select_all" ON portfolio
    FOR SELECT
    TO anon, authenticated
    USING (true);

-- 3. Verify size column is accessible
SELECT id, title, category, size, status FROM portfolio LIMIT 3;
