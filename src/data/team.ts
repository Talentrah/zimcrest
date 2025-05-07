// teamData.ts
import { Linkedin, Twitter, Github, LucideProps } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

export type SocialLink = {
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
  href: string;
};

export type TeamMember = {
  name: string;
  role: string;
  image: string;
  description: string;
  socials: SocialLink[];
};

export const teamMembers: TeamMember[] = [
  {
    name: "Dr. Michael Chikwanda",
    role: "Founder & CEO",
    image:
      "https://readdy.ai/api/search-image?query=Professional%2520portrait%2520of%2520African%2520male%2520CEO%2520in%2520his%252040s%2520wearing%2520business%2520suit%2520with%2520confident%2520expression%252C%2520studio%2520lighting%2520with%2520neutral%2520background%252C%2520high-quality%2520corporate%2520headshot%2520with%2520professional%2520demeanor%2520and%2520approachable%2520smile%252C%2520executive%2520portrait&width=600&height=800&seq=2&orientation=portrait",
    description:
      "Former tech executive with 15+ years experience at global companies. PhD in Computer Science from MIT. Passionate about tech education and African innovation.",
    socials: [
      { icon: Linkedin, href: "#" },
      { icon: Twitter, href: "#" },
    ],
  },
  {
    name: "Grace Mutambo",
    role: "Chief Operations Officer",
    image:
      "https://readdy.ai/api/search-image?query=Professional%2520portrait%2520of%2520African%2520female%2520executive%2520in%2520her%252030s%2520wearing%2520business%2520attire%2520with%2520confident%2520expression%252C%2520studio%2520lighting%2520with%2520neutral%2520background%252C%2520high-quality%2520corporate%2520headshot%2520with%2520professional%2520demeanor%2520and%2520approachable%2520smile%252C%2520leadership%2520portrait&width=600&height=800&seq=3&orientation=portrait",
    description:
      "Strategic leader with background in operations at Microsoft and Oracle. MBA from Stanford. Expert in scaling educational organizations across Africa.",
    socials: [
      { icon: Linkedin, href: "#" },
      { icon: Twitter, href: "#" },
    ],
  },
  {
    name: "David Ndlovu",
    role: "Chief Technology Officer",
    image:
      "https://readdy.ai/api/search-image?query=Professional%2520portrait%2520of%2520young%2520African%2520male%2520tech%2520executive%2520in%2520his%252030s%2520wearing%2520smart%2520casual%2520attire%2520with%2520confident%2520expression%252C%2520studio%2520lighting%2520with%2520neutral%2520background%252C%2520high-quality%2520corporate%2520headshot%2520with%2520professional%2520demeanor%2520and%2520approachable%2520smile%252C%2520CTO%2520portrait&width=600&height=800&seq=4&orientation=portrait",
    description:
      "Tech innovator with experience at Google and African startups. MSc in Software Engineering. Leads curriculum development and technical strategy.",
    socials: [
      { icon: Linkedin, href: "#" },
      { icon: Github, href: "#" },
    ],
  },
  {
    name: "Dr. Nyasha Moyo",
    role: "Director of Education",
    image:
      "https://readdy.ai/api/search-image?query=Professional%2520portrait%2520of%2520mature%2520African%2520female%2520education%2520director%2520in%2520her%252050s%2520wearing%2520professional%2520attire%2520with%2520confident%2520expression%252C%2520studio%2520lighting%2520with%2520neutral%2520background%252C%2520high-quality%2520corporate%2520headshot%2520with%2520professional%2520demeanor%2520and%2520approachable%2520smile%252C%2520education%2520leader%2520portrait&width=600&height=800&seq=5&orientation=portrait",
    description:
      "Education expert with 20+ years experience in curriculum development. PhD in Education from UCT. Passionate about accessible tech education.",
    socials: [
      { icon: Linkedin, href: "#" },
      { icon: Twitter, href: "#" },
    ],
  },
  {
    name: "Tafadzwa Ncube",
    role: "Director of Talent",
    image:
      "https://readdy.ai/api/search-image?query=Professional%2520portrait%2520of%2520young%2520African%2520female%2520talent%2520director%2520in%2520her%252030s%2520wearing%2520business%2520casual%2520attire%2520with%2520confident%2520expression%252C%2520studio%2520lighting%2520with%2520neutral%2520background%252C%2520high-quality%2520corporate%2520headshot%2520with%2520professional%2520demeanor%2520and%2520approachable%2520smile%252C%2520HR%2520leader%2520portrait&width=600&height=800&seq=6&orientation=portrait",
    description:
      "HR and recruitment specialist with experience at international firms. MBA from INSEAD. Leads our talent placement and career services.",
    socials: [
      { icon: Linkedin, href: "#" },
      { icon: Twitter, href: "#" },
    ],
  },
  {
    name: "Samuel Dube",
    role: "Global Partnerships",
    image:
      "https://readdy.ai/api/search-image?query=Professional%2520portrait%2520of%2520African%2520male%2520partnerships%2520director%2520in%2520his%252040s%2520wearing%2520business%2520attire%2520with%2520confident%2520expression%252C%2520studio%2520lighting%2520with%2520neutral%2520background%252C%2520high-quality%2520corporate%2520headshot%2520with%2520professional%2520demeanor%2520and%2520approachable%2520smile%252C%2520business%2520development%2520portrait&width=600&height=800&seq=7&orientation=portrait",
    description:
      "International business development expert with experience across Africa, Europe, and North America. Builds strategic partnerships with global tech companies.",
    socials: [
      { icon: Linkedin, href: "#" },
      { icon: Twitter, href: "#" },
    ],
  },
];
