import web from "../assets/web.png";
import mobile from "../assets/mobile.png";
import design from "../assets/design.png";
import it from "../assets/IT.png";
import innovation from "../assets/innovation.png";
import integrity from "../assets/integrity.png";
import excellence from "../assets/excellence.png";
import consumers from "../assets/consumers.png";
import growth from "../assets/growth.png";
type aboutType = {
  heading: string;
  desc: string;
  image?: string;
};
export const whatwedo: aboutType[] = [
  {
    heading: "Web Application Development",
    desc: "Creating responsive and scalable web applications tailored to your business objectives.",
    image: web,
  },
  {
    heading: "Mobile Application Development",
    desc: "Developing user-friendly mobile apps that provide seamless experiences on both iOS and Android platforms.",
    image: mobile,
  },
  {
    heading: "UI/UX Design",
    desc: "Designing intuitive and engaging interfaces that enhance user satisfaction and drive engagement.",
    image: design,
  },
  {
    heading: "IT Consulting",
    desc: "Offering strategic guidance to help businesses leverage technology effectively and efficiently.",
    image: it,
  },
];
export const values: aboutType[] = [
  {
    heading: "Innovation",
    desc: "Continuously exploring new technologies and methodologies to deliver cutting-edge solutions.",
    image: innovation,
  },
  {
    heading: "Integrity",
    desc: " Maintaining transparency and honesty in all our interactions.",
    image: integrity,
  },
  {
    heading: "Excellence",
    desc: "Striving for the highest quality in every project we undertake.",
    image: excellence,
  },
  {
    heading: "Collaboration",
    desc: "Fostering strong partnerships with clients to achieve shared goals.",
    image: design,
  },
  {
    heading: "Customer-Centricity",
    desc: " Prioritizing our clients' needs to deliver solutions that exceed expectations.",
    image: consumers,
  },
  {
    heading: "Continuous Growth",
    desc: " We invest in our team's development and constantly refine our skills to stay at the forefront of technology.",
    image: growth,
  },
];
