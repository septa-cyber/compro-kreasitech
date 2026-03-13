
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
    status: 'draft' | 'publish' | 'published';
}

export interface JobPosting {
    id: number;
    title: string;
    position: string;
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
    content?: string;
    quote?: string; // Matching JSON data
    rating?: number;
    category?: string;
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
    order?: number;
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
    marquee_row?: 'top' | 'bottom';
    gallery?: string[];
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

export interface SiteSettings {
    site_title?: string;
    site_description?: string;
    email?: string;
    phone?: string;
    address?: string;
    maps_url?: string;
    instagram?: string;
    linkedin?: string;
    twitter?: string;
    facebook?: string;
    whatsapp?: string;
    logo?: string;
    favicon?: string;
    [key: string]: any;
}
