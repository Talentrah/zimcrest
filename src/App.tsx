import { Suspense } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import LoadingSpinner from "./components/LoadingSpinner";
import {
  About,
  ConsultationForm,
  EarnRefer,
  Error404,
  HireTalent,
  HomePage,
  Internship,
  PrivacyPolicy,
  ProjectDetails,
  ServicesDetails,
  SiteMap,
  TermService,
  Training,
} from "./pages";
import RootLayout from "./layout/RootLayout";
import LegalLayout from "./layout/LegalLayout";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/consultation"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <ConsultationForm />
            </Suspense>
          }
        />
        <Route
          path="/project/:id"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <ProjectDetails />
            </Suspense>
          }
        />
        <Route
          path="/services/:id"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <ServicesDetails />
            </Suspense>
          }
        />
        <Route
          path="/about"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <About />
            </Suspense>
          }
        />
        <Route
          path="/training"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <Training />
            </Suspense>
          }
        />
        <Route
          path="/internship"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <Internship />
            </Suspense>
          }
        />
        <Route
          path="/hire-talent"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <HireTalent />
            </Suspense>
          }
        />
        <Route
          path="/earn-refer"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <EarnRefer />
            </Suspense>
          }
        />

        <Route
          path="*"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <Error404 />
            </Suspense>
          }
        />
        <Route element={<LegalLayout />}>
          <Route
            path="/privacy-policy"
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <PrivacyPolicy />
              </Suspense>
            }
          />
          <Route
            path="/terms-of-service"
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <TermService />
              </Suspense>
            }
          />
          <Route
            path="/sitemap"
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <SiteMap />
              </Suspense>
            }
          />
        </Route>
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
