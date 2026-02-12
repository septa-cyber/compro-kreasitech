-- Portfolio Table: Add subtitle and size fields
ALTER TABLE portfolio 
ADD COLUMN IF NOT EXISTS subtitle TEXT,
ADD COLUMN IF NOT EXISTS size TEXT CHECK (size IN ('large', 'medium'));
