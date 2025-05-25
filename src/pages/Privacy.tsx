import { useState } from "react";
import Seo from "../components/SEO";

export default function PrivacyPolicy() {
  const [collect, setCollect] = useState<boolean>(false);
  const [party, setParty] = useState<boolean>(false);
  return (
    <>
      <Seo
        title="Privacy Policy - Zimcrest Technologies"
        description="Page consist of every policy concerning your privacy and data sharing, third party, user rights, data protection & contact information."
      />
      <section className="w-full md:w-3/4">
        <div className="w-full p-4 mx-auto bg-white rounded-lg shadow-sm md:p-8">
          <div className="p-4 mb-8 rounded-lg bg-blue-50">
            <p className="text-sm text-gray-700 sm:text-base">
              This Privacy Policy describes how Zimcrest Technologies ("we",
              "us", or "our") collects, uses, and shares your personal
              information when you visit our website www.zimcresttech.com or use
              our services. Please read this policy carefully to understand our
              practices regarding your information.
            </p>
          </div>
          <section id="information-collection" className="mb-10">
            <h2 className="mb-4 text-lg font-semibold text-gray-800 sm:text-2xl">
              Information Collection
            </h2>
            <div className="pl-4 border-l-4 border-primary-500">
              <p className="mb-4 text-sm sm:text-base">
                We collect several types of information from and about users of
                our website, including information:
              </p>
              <ul className="pl-5 space-y-2 text-sm text-gray-700 list-disc sm:text-base">
                <li>
                  By which you may be personally identified, such as name, email
                  address, telephone number, or any other identifier by which
                  you may be contacted online or offline ("personal
                  information").
                </li>
                <li>
                  About your internet connection, the equipment you use to
                  access our website, and usage details.
                </li>
                <li>
                  Non-personal information about your interactions with our
                  website, such as the pages you visit and the features you use.
                </li>
              </ul>
            </div>
            <div className="mt-4">
              <button
                className="flex items-center justify-between w-full text-left px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg !rounded-button whitespace-nowrap cursor-pointer transition-colors"
                onClick={() => setCollect((prev) => !prev)}
              >
                <span className="text-sm font-medium sm:text-base">
                  How We Collect Information
                </span>
                <i
                  className={`text-gray-500 fas fa-chevron-down transition-all duration-300 ${
                    collect ? "rotate-180" : "rotate-0"
                  }`}
                ></i>
              </button>
              <div
                id="collection-details"
                className={`pl-4 mt-2 ${collect ? "" : "hidden"}`}
              >
                <p className="mb-2 text-sm sm:text-base">
                  We collect information through:
                </p>
                <ul className="pl-5 space-y-1 text-sm text-gray-700 list-disc sm:text-base">
                  <li>
                    Direct interactions when you provide information by filling
                    in forms or corresponding with us.
                  </li>
                  <li>
                    Automated technologies or interactions, including cookies
                    and similar tracking technologies.
                  </li>
                  <li>
                    Third parties or publicly available sources, such as
                    analytics providers and search engines.
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <section id="data-usage" className="mb-10">
            <h2 className="mb-4 text-lg font-semibold text-gray-800 sm:text-2xl">
              Data Usage
            </h2>
            <p className="mb-4text-sm sm:text-base">
              We use the information we collect about you for various purposes,
              including:
            </p>
            <ul className="pl-5 space-y-2 text-sm text-gray-700 list-disc sm:text-base">
              <li>To present our website and its contents to you.</li>
              <li>
                To provide you with information, products, or services that you
                request from us.
              </li>
              <li>To fulfill any other purpose for which you provide it.</li>
              <li>
                To carry out our obligations and enforce our rights arising from
                any contracts entered into between you and us.
              </li>
              <li>
                To notify you about changes to our website or any products or
                services we offer.
              </li>
              <li>
                To improve our website, products, services, marketing, and
                customer relationships.
              </li>
            </ul>
          </section>
          <section id="cookie-policy" className="mb-10">
            <h2 className="mb-4 text-lg font-semibold text-gray-800 sm:text-2xl">
              Cookie Policy
            </h2>
            <p className="mb-4 text-sm sm:text-base">
              Our website uses cookies to enhance your browsing experience.
              Cookies are small text files that are placed on your device when
              you visit our website.
            </p>
            <div className="p-4 mb-4 bg-gray-100 rounded-lg">
              <h3 className="mb-2 text-base font-medium text-gray-800 sm:text-lg">
                Types of Cookies We Use
              </h3>
              <ul className="pl-5 space-y-1 text-sm text-gray-700 list-disc sm:text-base">
                <li>
                  <strong>Essential Cookies:</strong> Required for the website
                  to function properly.
                </li>
                <li>
                  <strong>Analytical/Performance Cookies:</strong> Allow us to
                  recognize and count visitors and see how they move around our
                  website.
                </li>
                <li>
                  <strong>Functionality Cookies:</strong> Enable the website to
                  remember choices you make and provide enhanced features.
                </li>
                <li>
                  <strong>Targeting Cookies:</strong> Record your visit to our
                  website, the pages you have visited, and the links you have
                  followed.
                </li>
              </ul>
            </div>
            <p className="text-sm text-gray-700 sm:text-base">
              You can set your browser to refuse all or some browser cookies, or
              to alert you when websites set or access cookies. If you disable
              or refuse cookies, please note that some parts of this website may
              become inaccessible or not function properly.
            </p>
          </section>
          <section id="third-party" className="mb-10">
            <h2 className="mb-4 text-lg font-semibold text-gray-800 sm:text-2xl">
              Third-party Services
            </h2>
            <p className="mb-4 text-sm sm:text-base">
              Our website may include links to third-party websites, plug-ins,
              and applications. Clicking on those links or enabling those
              connections may allow third parties to collect or share data about
              you. We do not control these third-party websites and are not
              responsible for their privacy statements.
            </p>
            <div className="mt-4">
              <button
                className="flex items-center justify-between w-full text-left px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg !rounded-button whitespace-nowrap cursor-pointer transition-colors"
                onClick={() => setParty((prev) => !prev)}
              >
                <span className="text-sm font-medium sm:text-base">
                  Third-party Services We Use
                </span>
                <i
                  className={`text-gray-500 fas fa-chevron-down transition-all duration-300 ${
                    party ? "rotate-180" : "rotate-0"
                  }`}
                ></i>
              </button>
              <div
                id="third-party-details"
                className={`pl-4 mt-2 ${party ? "" : "hidden"}`}
              >
                <ul className="pl-5 space-y-1 text-sm text-gray-700 list-disc sm:text-base">
                  <li>
                    <strong>Google Analytics:</strong> For website traffic
                    analysis and reporting.
                  </li>
                  <li>
                    <strong>Payment Processors:</strong> To process payments
                    securely.
                  </li>
                  <li>
                    <strong>Social Media Platforms:</strong> For sharing content
                    and social interactions.
                  </li>
                  <li>
                    <strong>Marketing Services:</strong> For email
                    communications and targeted advertising.
                  </li>
                </ul>
                <p className="mt-2 text-gray-700">
                  Each of these third parties has their own privacy policies
                  that govern how they use your information.
                </p>
              </div>
            </div>
          </section>
          <section id="user-rights" className="mb-10">
            <h2 className="mb-4 text-lg font-semibold text-gray-800 sm:text-2xl">
              User Rights
            </h2>
            <p className="mb-4 text-sm sm:text-base">
              Depending on your location, you may have certain rights regarding
              your personal information, including:
            </p>
            <div className="grid gap-4 mb-4 md:grid-cols-2">
              <div className="p-4 bg-gray-100 rounded-lg">
                <h3 className="mb-2 text-base font-medium text-gray-800 sm:text-lg">
                  Access Rights
                </h3>
                <p className="text-sm text-gray-700 sm:text-base">
                  You have the right to request copies of your personal
                  information we hold.
                </p>
              </div>
              <div className="p-4 bg-gray-100 rounded-lg">
                <h3 className="mb-2 text-base font-medium text-gray-800 sm:text-lg">
                  Rectification Rights
                </h3>
                <p className="text-sm text-gray-700 sm:text-base">
                  You have the right to request that we correct any information
                  you believe is inaccurate or incomplete.
                </p>
              </div>
              <div className="p-4 bg-gray-100 rounded-lg">
                <h3 className="mb-2 text-base font-medium text-gray-800 sm:text-lg">
                  Erasure Rights
                </h3>
                <p className="text-sm text-gray-700 sm:text-base">
                  You have the right to request that we erase your personal
                  information in certain circumstances.
                </p>
              </div>
              <div className="p-4 bg-gray-100 rounded-lg">
                <h3 className="mb-2 text-base font-medium text-gray-800 sm:text-lg">
                  Restriction Rights
                </h3>
                <p className="text-sm text-gray-700 sm:text-base">
                  You have the right to request that we restrict the processing
                  of your personal information in certain circumstances.
                </p>
              </div>
            </div>
            <p className="text-sm text-gray-700 sm:text-base">
              To exercise any of these rights, please contact us using the
              information provided in the Contact Information section.
            </p>
          </section>
          <section id="data-protection" className="mb-10">
            <h2 className="mb-4 text-lg font-semibold text-gray-800 sm:text-2xl">
              Data Protection
            </h2>
            <p className="mb-4 text-sm sm:text-base">
              We have implemented appropriate technical and organizational
              measures to protect your personal information from accidental
              loss, unauthorized access, use, alteration, and disclosure.
            </p>
            <div className="py-2 pl-4 mb-4 border-l-4 border-yellow-500">
              <p className="text-sm text-gray-700 sm:text-base">
                <strong>Note:</strong> While we use commercially reasonable
                efforts to protect your personal information, no method of
                transmission over the Internet or electronic storage is 100%
                secure. We cannot guarantee absolute security.
              </p>
            </div>
            <p className="text-sm text-gray-700 sm:text-base">
              We limit access to your personal information to those employees,
              agents, contractors, and other third parties who have a business
              need to know. They are subject to a duty of confidentiality and
              will only process your personal information on our instructions.
            </p>
          </section>
          <section id="contact-information" className="mb-6">
            <h2 className="mb-4 text-lg font-semibold text-gray-800 sm:text-2xl">
              Contact Information
            </h2>
            <p className="mb-4 text-sm sm:text-base">
              If you have any questions about this Privacy Policy or our privacy
              practices, please contact us at:
            </p>
            <div className="p-4 text-sm bg-gray-100 rounded-lg sm:text-base">
              <p className="font-medium">Zimcrest Technologies</p>
              <p className="mt-2">Email: info@zimcresttech.com</p>
              <p>Phone: +234 (0)905 998 8298</p>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}
