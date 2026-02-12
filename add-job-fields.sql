-- Add enrichment fields to jobs table
ALTER TABLE jobs 
ADD COLUMN IF NOT EXISTS requirements text[],
ADD COLUMN IF NOT EXISTS responsibilities text[],
ADD COLUMN IF NOT EXISTS benefits text[],
ADD COLUMN IF NOT EXISTS experience text,
ADD COLUMN IF NOT EXISTS education text,
ADD COLUMN IF NOT EXISTS whatsapp_url text,
ADD COLUMN IF NOT EXISTS logo_url text,
ADD COLUMN IF NOT EXISTS location_type text;

-- Dummy Data for testing
INSERT INTO jobs (title, department, location, type, category, status, posted_date, salary, description, requirements, responsibilities, benefits, experience, education, whatsapp_url, logo_url, location_type)
VALUES 
('Senior Frontend Developer', 'Engineering', 'Jakarta', 'Full-time', 'Technology', 'open', '2024-02-12', '12,000K-18,000K', 'We are looking for a Senior Frontend Developer to lead our web application development.', ARRAY['5+ years of React experience', 'Proficient in TailwindCSS', 'Strong TypeScript skills'], ARRAY['Lead frontend architecture', 'Mentor junior developers', 'Implement responsive designs'], ARRAY['Health Insurance', 'Flexible Working Hours', 'Learning Budget'], '5+ Years', 'S1 Computer Science', 'https://wa.me/6281234567890', 'https://img.logo.dev/google.com?token=pk_ST185vJtQO6-1e4Bf7k_Qw', 'Remote'),

('Backend Engineer (Go)', 'Engineering', 'Bandung', 'Full-time', 'Technology', 'open', '2024-02-12', '10,000K-15,000K', 'Join our backend team to build scalable microservices using Go and PostgreSQL.', ARRAY['Experience with Golang', 'Familiar with Docker/K8s', 'Knowledge of SQL/NoSQL'], ARRAY['Build scalable APIs', 'Optimize database performance', 'Implement security best practices'], ARRAY['Hybrid Work Setup', 'Performance Bonus', 'Office Snacks'], '3+ Years', 'S1 Information Systems', 'https://wa.me/6281234567890', 'https://img.logo.dev/microsoft.com?token=pk_ST185vJtQO6-1e4Bf7k_Qw', 'Hybrid'),

('UI/UX Designer', 'Product', 'Jakarta', 'Full-time', 'Creative', 'open', '2024-02-12', '8,000K-12,000K', 'We need a creative UI/UX Designer to design beautiful and intuitive user experiences.', ARRAY['Proficient in Figma', 'Portfolio demonstrating UI/UX skills', 'Understanding of design systems'], ARRAY['Create wireframes and prototypes', 'Conduct user research', 'Maintain design consistency'], ARRAY['Creative Workspace', 'Health Insurance', 'Commuter Allowance'], '2+ Years', 'S1 Design / Architecture', 'https://wa.me/6281234567890', 'https://img.logo.dev/figma.com?token=pk_ST185vJtQO6-1e4Bf7k_Qw', 'WFO');
