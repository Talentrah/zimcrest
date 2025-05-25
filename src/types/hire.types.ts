
export interface HireService {
  title: string;
  description: string;
  features: string[];
}

export interface Category {
  title: string;
  icon: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface FormData {
  companyName: string;
  companySize: string;
  location: string;
  contactName: string;
  contactEmail: string;
  contactPhone: string;
  talentType: string;
  projectDetails: string;
  timeline: string;
  budgetRange: string;
}

export interface Testimonial {
  company: string;
  industry: string;
  icon: string;
  testimonial: string;
  rating: number;
}