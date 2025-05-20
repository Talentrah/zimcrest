import { lazy } from "react";

export { default as HomePage } from "./HomePage";
export const ConsultationForm = lazy(() => import("./ConsultationForm"));
export const ProjectDetails = lazy(() => import("./ProjectDetails"));
export const ServicesDetails = lazy(() => import("./ServicesDetails"));
export const About = lazy(() => import("./About"));
export const Training = lazy(() => import("./Training"));
export const Internship = lazy(() => import("./Intership"));
export const HireTalent = lazy(() => import("./HireTalent"));
export const EarnRefer = lazy(() => import("./EarnRefer"));
export const PrivacyPolicy = lazy(() => import("./Privacy"));
export const TermService = lazy(() => import("./Terms"));
export const SiteMap = lazy(() => import("./SiteMap"));
export const Error404 = lazy(() => import("./Error404"));
