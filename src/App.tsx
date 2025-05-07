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
  HireTalent,
  HomePage,
  Internship,
  ProjectDetails,
  ServicesDetails,
  Training,
} from "./pages";
import RootLayout from "./layout/RootLayout";

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
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
