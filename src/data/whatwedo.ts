import {
  Box,
  Brain,
  Diamond,
  Hexagon,
  LucideProps,
  Pyramid,
  Tent,
} from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";
type whatwedoType = {
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
  title: string;
  description: string;
  id: string;
};
export const whatWeDoServices: whatwedoType[] = [
  {
    icon: Diamond,
    title: "Product Scope",
    description:
      "A structured 15 day process to align your product vision with your business goals.",
    id: "product-scope",
  },
  {
    icon: Box,
    title: "UX/UI Design",
    description:
      "Design an engaging product that is easy-to-use, attractive and functional.",
    id: "ux-ui-design",
  },
  {
    icon: Pyramid,
    title: "MVP Builder",
    description:
      "Go to the market quickly with a high-quality Minimum Viable Product.",
    id: "mvp-builder",
  },
  {
    icon: Tent,
    title: "Dedicated Teams",
    description: "Build your product with a dedicated team of developers.",
    id: "dedicated-teams",
  },
  {
    icon: Hexagon,
    title: "Custom Software Development",
    description:
      "Lean frameworks applied to your vision to create an innovative custom software solution.",
    id: "custom-software",
  },
  {
    icon: Brain,
    title: "AI Development & Enablement",
    description:
      "We leverage ML and Generative AI strategically to ensure your business is future-ready.",
    id: "ai-development",
  },
];
