type ProjectKey = "fintech" | "ecommerce" | "healthcare" | "realestate";

interface ProjectData {
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  tags: string[];
  features: string[];
  technologies: string[];
  results: string[];
  testimonial: {
    content: string;
    author: string;
    role: string;
  };
}
type ProjectsData = Record<ProjectKey, ProjectData>;
export const projectsData: ProjectsData = {
  fintech: {
    title: "FinTech Platform",
    description:
      "A comprehensive financial management system with real-time analytics",
    fullDescription:
      "Our FinTech platform revolutionizes financial management with cutting-edge technology and intuitive design. The system provides real-time analytics, secure transactions, and comprehensive reporting tools for businesses of all sizes.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    tags: ["Fintech", "Dashboard", "Analytics"],
    features: [
      "Real-time financial analytics",
      "Secure payment processing",
      "Automated reporting",
      "Multi-currency support",
      "Compliance management",
      "API integration capabilities",
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "Redis", "Docker"],
    results: [
      "50% reduction in processing time",
      "99.9% system uptime",
      "30% increase in user engagement",
      "Successfully processed $1B+ in transactions",
    ],
    testimonial: {
      content:
        "The FinTech platform has transformed our financial operations, providing unprecedented visibility and control.",
      author: "Sarah Chen",
      role: "CFO, Global Finance Corp",
    },
  },
  ecommerce: {
    title: "E-commerce Solution",
    description: "Custom-built marketplace with advanced inventory management",
    fullDescription:
      "Our e-commerce solution delivers a seamless shopping experience with advanced inventory management, real-time tracking, and intelligent analytics to drive sales and customer engagement.",
    image:
      "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=1200&q=80",
    tags: ["E-commerce", "Marketplace", "Inventory"],
    features: [
      "Advanced inventory management",
      "Real-time order tracking",
      "Multi-vendor support",
      "Automated fulfillment",
      "Customer analytics",
      "Mobile-first design",
    ],
    technologies: ["Next.js", "GraphQL", "MongoDB", "Elasticsearch", "AWS"],
    results: [
      "200% increase in sales",
      "45% reduction in inventory costs",
      "98% customer satisfaction rate",
      "500,000+ products managed",
    ],
    testimonial: {
      content:
        "The platform has revolutionized our online presence and significantly boosted our sales performance.",
      author: "Michael Roberts",
      role: "CEO, Global Retail Solutions",
    },
  },
  healthcare: {
    title: "Healthcare Management System",
    description:
      "Integrated platform for patient care and medical record management",
    fullDescription:
      "Our healthcare management system streamlines patient care with secure electronic medical records, appointment scheduling, and comprehensive analytics for healthcare providers.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
    tags: ["Healthcare", "EMR", "Patient Care"],
    features: [
      "Electronic Medical Records",
      "Appointment scheduling",
      "Patient portal",
      "Billing integration",
      "Prescription management",
      "HIPAA compliance",
    ],
    technologies: ["Angular", "Java Spring", "Oracle", "Kubernetes", "Azure"],
    results: [
      "40% reduction in administrative time",
      "Zero security breaches",
      "95% patient satisfaction",
      "1M+ patient records managed",
    ],
    testimonial: {
      content:
        "This system has dramatically improved our patient care efficiency and record keeping.",
      author: "Dr. Emily Wilson",
      role: "Medical Director, Healthcare Plus",
    },
  },
  realestate: {
    title: "Real Estate Platform",
    description:
      "Advanced property management and listing platform with virtual tours",
    fullDescription:
      "Our real estate platform revolutionizes property management with virtual tours, automated listings, and comprehensive analytics for property managers and agents.",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80",
    tags: ["Real Estate", "Virtual Tours", "Property Management"],
    features: [
      "Virtual property tours",
      "Automated listings",
      "Lead management",
      "Document automation",
      "Market analytics",
      "Agent portal",
    ],
    technologies: ["Vue.js", "Python", "PostgreSQL", "TensorFlow", "GCP"],
    results: [
      "60% faster property listing time",
      "35% increase in lead conversion",
      "25% reduction in vacancy rates",
      "10,000+ properties managed",
    ],
    testimonial: {
      content:
        "The virtual tours and automated systems have transformed how we showcase and manage properties.",
      author: "James Anderson",
      role: "Director, Premier Properties",
    },
  },
};
