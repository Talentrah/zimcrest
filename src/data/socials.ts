import {
  Twitter,
  Instagram,
  Linkedin,
  Facebook,
  Mail,
  LucideProps,
} from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";
type socialType = {
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
  url: string;
  label: string;
};
export const socialLinks: socialType[] = [
  {
    icon: Twitter,
    url: "https://x.com/zimcrest_",
    label: "Twitter",
  },
  {
    icon: Instagram,
    url: "https://www.instagram.com/zimcrest_technologies/",
    label: "Instagram",
  },
  {
    icon: Linkedin,
    url: "https://www.linkedin.com/in/zimcrest-technologies-a23026206/",
    label: "LinkedIn",
  },
  {
    icon: Facebook,
    url: "https://www.facebook.com/Zimcresttechnologies/",
    label: "Facebook",
  },
  {
    icon: Mail,
    url: "https://mail.google.com/mail/?view=cm&fs=1&to=zimcresttechnologies@gmail.com",
    label: "Email",
  },
];
