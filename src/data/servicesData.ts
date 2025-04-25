type serviceKeys =
  | "product-scope"
  | "ux-ui-design"
  | "mvp-builder"
  | "dedicated-teams"
  | "custom-software"
  | "ai-development";

interface ServiceData {
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  benefits: string[];
  process: string[];
  deliverables: string[];
}
type ServicesData = Record<serviceKeys, ServiceData>;
export const servicesData: ServicesData = {
  "product-scope": {
    title: "Product Scope",
    description:
      "A structured 15 day process to align your product vision with your business goals.",
    fullDescription:
      "Our Product Scope service is a comprehensive 15-day process designed to transform your product vision into a clear, actionable roadmap. We work closely with stakeholders to define objectives, identify market opportunities, and create a detailed development strategy.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    benefits: [
      "Clear product vision and strategy",
      "Detailed market analysis",
      "Technical feasibility assessment",
      "Resource planning and timeline",
      "Risk assessment and mitigation strategies",
      "Budget estimation and planning",
    ],
    process: [
      "Initial consultation and requirement gathering",
      "Market research and competitor analysis",
      "Technical architecture planning",
      "MVP feature definition",
      "Resource allocation planning",
      "Final presentation and documentation",
    ],
    deliverables: [
      "Product requirement document",
      "Technical specification",
      "Project timeline",
      "Cost estimation",
      "Risk assessment report",
      "Implementation roadmap",
    ],
  },
  "ux-ui-design": {
    title: "UX/UI Design",
    description:
      "Design an engaging product that is easy-to-use, attractive and functional.",
    fullDescription:
      "Our UX/UI Design service focuses on creating intuitive, user-friendly interfaces that enhance user engagement and satisfaction. We combine aesthetic appeal with functional design to deliver exceptional user experiences.",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1200&q=80",
    benefits: [
      "Intuitive user interface",
      "Enhanced user engagement",
      "Improved conversion rates",
      "Consistent brand experience",
      "Accessible design",
      "Mobile-first approach",
    ],
    process: [
      "User research and personas",
      "Information architecture",
      "Wireframing",
      "Visual design",
      "Prototyping",
      "Usability testing",
    ],
    deliverables: [
      "User journey maps",
      "Wireframes",
      "UI style guide",
      "Interactive prototypes",
      "Design system",
      "Implementation guidelines",
    ],
  },
  "mvp-builder": {
    title: "MVP Builder",
    description:
      "Go to the market quickly with a high-quality Minimum Viable Product.",
    fullDescription:
      "Our MVP Builder service helps you launch your product quickly while maintaining high quality standards. We focus on essential features that deliver maximum value to your users and validate your business concept.",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
    benefits: [
      "Rapid market entry",
      "Cost-effective development",
      "Early user feedback",
      "Validated learning",
      "Scalable architecture",
      "Quick iterations",
    ],
    process: [
      "Feature prioritization",
      "Architecture setup",
      "Agile development",
      "Quality assurance",
      "Deployment",
      "User feedback collection",
    ],
    deliverables: [
      "Working MVP",
      "Source code",
      "Technical documentation",
      "User guide",
      "Analytics setup",
      "Maintenance plan",
    ],
  },
  "dedicated-teams": {
    title: "Dedicated Teams",
    description: "Build your product with a dedicated team of developers.",
    fullDescription:
      "Our Dedicated Teams service provides you with a full-time development team that works exclusively on your project. We handle team building, management, and ensure seamless integration with your existing processes.",
    image:
      "https://images.unsplash.com/photo-1522071901873-411886a10004?auto=format&fit=crop&w=1200&q=80",
    benefits: [
      "Exclusive team focus",
      "Flexible team scaling",
      "Direct communication",
      "Knowledge retention",
      "Consistent delivery",
      "Long-term partnership",
    ],
    process: [
      "Team requirements analysis",
      "Team selection",
      "Onboarding",
      "Process integration",
      "Regular reporting",
      "Continuous improvement",
    ],
    deliverables: [
      "Skilled development team",
      "Project management tools",
      "Regular progress reports",
      "Code quality metrics",
      "Performance analytics",
      "Knowledge transfer",
    ],
  },
  "custom-software": {
    title: "Custom Software Development",
    description:
      "Lean frameworks applied to your vision to create an innovative custom software solution.",
    fullDescription:
      "Our Custom Software Development service delivers tailored solutions that perfectly match your business needs. We use modern technologies and lean methodologies to create scalable, maintainable software.",
    image:
      "https://images.unsplash.com/photo-1549692520-acc6669e2f0c?auto=format&fit=crop&w=1200&q=80",
    benefits: [
      "Tailored solutions",
      "Scalable architecture",
      "Modern technology stack",
      "Security by design",
      "Performance optimization",
      "Future-proof development",
    ],
    process: [
      "Requirements analysis",
      "Architecture design",
      "Development sprints",
      "Quality assurance",
      "Deployment",
      "Maintenance",
    ],
    deliverables: [
      "Custom software solution",
      "Source code",
      "Documentation",
      "Deployment guide",
      "Training materials",
      "Support plan",
    ],
  },
  "ai-development": {
    title: "AI Development & Enablement",
    description:
      "We leverage ML and Generative AI strategically to ensure your business is future-ready.",
    fullDescription:
      "Our AI Development & Enablement service helps businesses harness the power of artificial intelligence and machine learning. We develop custom AI solutions that drive innovation and efficiency.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80",
    benefits: [
      "Advanced analytics",
      "Process automation",
      "Predictive capabilities",
      "Competitive advantage",
      "Scalable AI solutions",
      "Data-driven insights",
    ],
    process: [
      "AI feasibility assessment",
      "Data preparation",
      "Model development",
      "Training and testing",
      "Integration",
      "Monitoring and optimization",
    ],
    deliverables: [
      "AI models",
      "Integration APIs",
      "Performance metrics",
      "Documentation",
      "Training materials",
      "Maintenance plan",
    ],
  },
};
