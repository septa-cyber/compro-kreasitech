export interface PortfolioItem {
    id: number;
    title: string;
    subtitle: string;
    image: string;
    size: 'large' | 'medium';
    category: string;
}

export const portfolioItems: PortfolioItem[] = [
    {
        id: 1,
        title: "Danarhadi CRM",
        subtitle: "Enterprise Management System",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
        size: "large",
        category: "Software Development"
    },
    {
        id: 2,
        title: "EcoMart e-Commerce",
        subtitle: "Sustainable Shopping Platform",
        image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=2089&auto=format&fit=crop",
        size: "medium",
        category: "Web Development"
    },
    {
        id: 3,
        title: "FitLife Mobile App",
        subtitle: "Personalized Fitness Tracker",
        image: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=2006&auto=format&fit=crop",
        size: "large",
        category: "Mobile App"
    },
    {
        id: 4,
        title: "Java Coffee Branding",
        subtitle: "Digital Marketing Campaign",
        image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070&auto=format&fit=crop",
        size: "large",
        category: "Digital Marketing"
    },
    {
        id: 5,
        title: "SkyLine Dashboard",
        subtitle: "Real Estate Analytics",
        image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2073&auto=format&fit=crop",
        size: "medium",
        category: "Software Development"
    },
    {
        id: 6,
        title: "Nusa Academy",
        subtitle: "Learning Management System",
        image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1974&auto=format&fit=crop",
        size: "large",
        category: "Web Development"
    },
    {
        id: 7,
        title: "QuickPay Wallet",
        subtitle: "Fintech Mobile Solution",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop",
        size: "large",
        category: "Mobile App"
    },
    {
        id: 8,
        title: "TravelGo SEO",
        subtitle: "SEO Performance Growth",
        image: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?q=80&w=2070&auto=format&fit=crop",
        size: "medium",
        category: "Digital Marketing"
    },
    {
        id: 9,
        title: "SmartFarm IoT",
        subtitle: "Agricultural Monitoring",
        image: "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?q=80&w=2072&auto=format&fit=crop",
        size: "large",
        category: "Software Development"
    },
    {
        id: 10,
        title: "Urban Mode UI/UX",
        subtitle: "Fashion Catalog Redesign",
        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop",
        size: "large",
        category: "UI/UX Design"
    }
];
