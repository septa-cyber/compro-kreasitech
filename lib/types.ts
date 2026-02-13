
export interface BlogPost {
    id: number;
    slug: string;
    title: string;
    excerpt: string;
    content: string;
    date: string;
    author: {
        name: string;
        avatar: string;
    };
    category: string;
    categoryColor: string;
    coverImage: string;
    tags: string[];
    status: 'draft' | 'publish';
}

export interface JobPosting {
    id: number;
    title: string;
    department?: string;
    company?: string;
    location: string;
    type: string;
    description: string;
    requirements?: string[];
    responsibilities?: string[];
    benefits?: string[];
    experience?: string;
    education?: string;
    whatsapp_url?: string;
    category?: string;
    logo_url?: string;
    location_type?: 'Remote' | 'WFO' | 'WFH' | 'Hybrid';
    status: 'open' | 'closed' | 'active' | 'inactive';
    postedDate?: string;
    expiredDate?: string;
    salary?: string;
    icon?: string;
    iconBg?: string;
}

export interface Testimonial {
    id: number;
    name: string;
    role: string;
    company?: string;
    avatar?: string;
    content: string; // Changed from quote
    rating?: number;
    status: 'visible' | 'hidden';
}

export interface TeamMember {
    id: number;
    name: string;
    role: string;
    avatar?: string;
    bio?: string;
    email?: string;
    linkedin?: string;
    status: 'active' | 'inactive';
}

export interface PortfolioItem {
    id: number;
    title: string;
    subtitle?: string;
    description?: string;
    image?: string;
    size?: 'large' | 'medium';
    category?: string;
    technologies?: string[];
    project_url?: string;
    github_url?: string;
    status: 'draft' | 'published';
    completed_date?: string;
}

export interface Partner {
    id: number;
    name: string;
    logo?: string;
    website?: string;
    description?: string;
    category?: string;
    status: 'active' | 'inactive';
}
