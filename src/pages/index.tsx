import { lazy } from "react";

export { default as HomePage } from "./HomePage";
export const ConsultationForm = lazy(() => import("./ConsultationForm"));
export const ProjectDetails = lazy(() => import("./ProjectDetails"));
export const ServicesDetails = lazy(() => import("./ServicesDetails"));
export const About = lazy(() => import("./About"));
export const Training = lazy(() => import("./Training"));
