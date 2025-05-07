import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import LoadingSpinner from "./components/LoadingSpinner";
import {
  About,
  ConsultationForm,
  HomePage,
  ProjectDetails,
  ServicesDetails,
  Training,
} from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
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
    </Routes>
  );
}

export default App;
