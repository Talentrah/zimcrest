import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { useEffect } from "react";

export default function RootLayout() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <Navbar />
      <main className="w-full">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
