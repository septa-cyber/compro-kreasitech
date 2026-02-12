-- Disable Row Level Security for CMS tables
-- This allows the application to insert/update/delete data using the anon key

ALTER TABLE team DISABLE ROW LEVEL SECURITY;
ALTER TABLE portfolio DISABLE ROW LEVEL SECURITY;
ALTER TABLE partners DISABLE ROW LEVEL SECURITY;

-- Note: Disabling RLS means anyone with the anon key can modify these tables.
-- For production, you should enable RLS and create proper policies instead.
-- 
-- Example policies (if you want to enable RLS later):
-- ALTER TABLE team ENABLE ROW LEVEL SECURITY;
-- CREATE POLICY "Allow authenticated users to manage team" 
--   ON team FOR ALL 
--   USING (true)
--   WITH CHECK (true);
