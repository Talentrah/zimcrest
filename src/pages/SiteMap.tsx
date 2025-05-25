import { Link } from "react-router-dom";
import Seo from "../components/SEO";

export default function SiteMap() {
  return (
    <>
      <Seo
        title="Sitemap - Zimcrest Technologies"
        description="Welcome to the Zimcrest Technologies sitemap. This page provides a complete overview of our website structure to help you navigate and find the information you need."
      />

      <section className="w-full md:w-3/4">
        <div className="p-4 mx-auto bg-white rounded-lg shadow-sm md:p-8">
          <div className="mb-8">
            <h1 className="mb-2 text-xl font-bold text-gray-900 sm:text-3xl">
              Sitemap
            </h1>
            <p className="text-sm text-gray-600 sm:text-base">
              Last updated: May 1, 2025
            </p>
          </div>
          <div className="mb-8">
            <p className="text-sm text-gray-700 sm:text-base">
              Welcome to the Zimcrest Technologies sitemap. This page provides a
              complete overview of our website structure to help you navigate
              and find the information you need.
            </p>
          </div>

          <section id="html-sitemap" className="mb-10">
            <h2 className="mb-4 text-lg font-semibold text-gray-800 sm:text-2xl">
              HTML Sitemap
            </h2>

            <div className="space-y-6">
              <div>
                <div className="flex items-center p-3 mb-2 bg-gray-100 rounded-lg cursor-pointer">
                  <i className="mr-3 text-blue-600 fas fa-home"></i>
                  <h3 className="text-base font-medium text-gray-800 sm:text-lg">
                    Main Pages
                  </h3>
                </div>
                <div id="main-pages" className="pl-8 space-y-2">
                  <div className="flex items-center py-2">
                    <Link
                      to="/"
                      className="text-sm text-blue-600 hover:underline sm:text-base"
                    >
                      Home
                    </Link>
                  </div>
                  <div className="flex items-center py-2">
                    <Link
                      to="/about"
                      className="text-sm text-blue-600 hover:underline sm:text-base"
                    >
                      About Us
                    </Link>
                  </div>
                  <div className="flex items-center py-2">
                    <Link
                      to="/consultation"
                      className="text-sm text-blue-600 hover:underline sm:text-base"
                    >
                      Contact
                    </Link>
                  </div>
                  <div className="flex items-center py-2">
                    <Link
                      to="/internship"
                      className="text-sm text-blue-600 hover:underline sm:text-base"
                    >
                      Internship
                    </Link>
                  </div>
                  <div className="flex items-center py-2">
                    <Link
                      to="/training"
                      className="text-sm text-blue-600 hover:underline sm:text-base"
                    >
                      Training
                    </Link>
                  </div>
                  <div className="flex items-center py-2">
                    <Link
                      to="/earn-refer"
                      className="text-sm text-blue-600 hover:underline sm:text-base"
                    >
                      Earn & Refer
                    </Link>
                  </div>
                </div>
              </div>
              {/* <div>
              <div className="flex items-center p-3 mb-2 bg-gray-100 rounded-lg cursor-pointer">
                <i className="mr-3 text-blue-600 fas fa-cogs"></i>
                <h3 className="text-base font-medium text-gray-800 sm:text-lg">
                  Services
                </h3>
              </div>
              <div id="services-section" className="pl-8 space-y-2">
                <div className="flex items-center py-2">
                  <Link
                    to="/services/web-development"
                    className="text-sm text-blue-600 hover:underline sm:text-base"
                  >
                    Web Development
                  </Link>
                </div>
                <div className="flex items-center py-2">
                  <Link
                    to="/services/mobile-apps"
                    className="text-sm text-blue-600 hover:underline sm:text-base"
                  >
                    Mobile Applications
                  </Link>
                </div>
                <div className="flex items-center py-2">
                  <Link
                    to="/services/cloud-solutions"
                    className="text-sm text-blue-600 hover:underline sm:text-base"
                  >
                    Cloud Solutions
                  </Link>
                </div>
                <div className="flex items-center py-2">
                  <Link
                    to="/services/ai-ml"
                    className="text-sm text-blue-600 hover:underline sm:text-base"
                  >
                    AI &amp; Machine Learning
                  </Link>
                </div>
                <div className="flex items-center py-2">
                  <Link
                    to="/services/consulting"
                    className="text-sm text-blue-600 hover:underline sm:text-base"
                  >
                    IT Consulting
                  </Link>
                </div>
              </div>
            </div> */}

              <div>
                <div className="flex items-center p-3 mb-2 bg-gray-100 rounded-lg cursor-pointer">
                  <i className="mr-3 text-blue-600 fas fa-gavel"></i>
                  <h3 className="text-base font-medium text-gray-800 sm:text-lg">
                    Legal
                  </h3>
                </div>
                <div id="legal-section" className="pl-8 space-y-2 ">
                  <div className="flex items-center py-2">
                    <Link
                      to="/privacy-policy"
                      className="text-sm text-blue-600 hover:underline sm:text-base"
                    >
                      Privacy Policy
                    </Link>
                  </div>
                  <div className="flex items-center py-2">
                    <Link
                      to="/terms-of-service"
                      className="text-sm text-blue-600 hover:underline sm:text-base"
                    >
                      Terms of Service
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}
