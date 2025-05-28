type categoryType = {
  icon: string;
  title: string;
};
type faqType = {
  question: string;
  answer: string;
};
type hireService = {
  icon: string;
  title: string;
  description: string;
  features: string[];
};
export const categories: categoryType[] = [
  { icon: "fas fa-laptop-code", title: "Frontend Developers" },
  { icon: "fas fa-server", title: "Backend Developers" },
  { icon: "fas fa-layer-group", title: "Full Stack Engineers" },
  { icon: "fas fa-palette", title: "UI/UX Designers" },
  { icon: "fas fa-chart-bar", title: "Data Analysts" },
  { icon: "fas fa-bullhorn", title: "Digital Marketers" },
  { icon: "fas fa-cloud", title: "Cloud/DevOps Engineers" },
  { icon: "fas fa-tasks", title: "Product Managers" },
  { icon: "fas fa-project-diagram", title: "Project Managers" },
  { icon: "fas fa-chart-line", title: "Business Analysts" },
];

export const faqs: faqType[] = [
  {
    question: "How long does it take to match with a talent?",
    answer:
      "Our typical matching process takes 3-5 business days. For urgent requirements, we can expedite the process and provide candidates within 48 hours.",
  },
  {
    question: "What is your vetting process like?",
    answer:
      "Our vetting includes technical skill assessment, problem-solving tests, portfolio review, and multiple rounds of interviews to ensure both technical proficiency and cultural fit.",
  },
  {
    question: "Do you offer trial periods?",
    answer:
      "Yes, we typically offer a 1-2 week trial period to ensure the talent is the right fit for your team and project requirements.",
  },
  {
    question: "What if the talent doesn't meet our expectations?",
    answer:
      "If you're not satisfied with the talent during the trial period, we'll replace them at no additional cost. Your satisfaction is our priority.",
  },
  {
    question: "What engagement models do you support?",
    answer:
      "We support various engagement models including full-time hires, contract-to-hire, and project-based contracts, depending on your specific needs.",
  },
];

export const hireServices: hireService[] = [
  {
    icon: "fa-solid fa-briefcase",
    title: "Staff Augmentation",
    description:
      "Extend your team with our skilled professionals who integrate seamlessly with your existing workforce.",
    features: [
      "Immediate resource availability",
      "Flexible scaling options",
      "Cost-effective solution",
      "Quality assurance",
    ],
  },
  {
    icon: "fa-solid fa-people-group",
    title: "Dedicated Teams",
    description:
      "Get a complete, self-managed team that works exclusively on your project with full commitment.",
    features: [
      "Full-time dedication",
      "End-to-end delivery",
      "Agile methodology",
      "Regular reporting",
    ],
  },
  {
    icon: "fa-solid fa-diagram-project",
    title: "Project Outsourcing",
    description:
      "Outsource your entire project to our experienced team for efficient delivery and management.",
    features: [
      "Requirements analysis",
      "Custom solution development",
      "Quality assurance",
      "Ongoing support",
    ],
  },
];
