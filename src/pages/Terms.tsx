import { useState } from "react";
import Seo from "../components/SEO";

export default function TermService() {
  const [account, setAccount] = useState<boolean>(false);
  const [dispute, setDispute] = useState<boolean>(false);
  return (
    <>
      <Seo
        title="Terms - Zimcrest Technologies"
        description="These Terms of Service govern you access to and use of the ZimCrest Tech website and services. By accessing or using our services, you agree to be bound by these Terms. If you do not agree to these Terms, you may not access or use our services."
      />

      <section className="w-full md:w-3/4">
        <div className="w-full p-4 mx-auto bg-white rounded-lg shadow-sm md:p-8">
          <div className="mb-8">
            <h1 className="mb-2 text-2xl font-bold text-gray-900 md:text-3xl">
              Terms of Service
            </h1>
            <p className="text-sm text-gray-600 sm:text-base">
              Effective Date: May 1, 2025
            </p>
          </div>
          <div className="p-4 mb-8 rounded-lg bg-blue-50">
            <p className="text-sm text-gray-700 sm:text-base">
              These Terms of Service ("Terms") govern your access to and use of
              the ZimCrest Tech website and services. By accessing or using our
              services, you agree to be bound by these Terms. If you do not
              agree to these Terms, you may not access or use our services.
            </p>
          </div>
          <section id="user-agreement" className="mb-10">
            <h2 className="mb-4 text-lg font-semibold text-gray-800 md:text-2xl">
              User Agreement
            </h2>
            <p className="mb-4 text-sm sm:text-base">
              By using our website and services, you acknowledge that you have
              read, understood, and agree to be bound by these Terms. We reserve
              the right to modify these Terms at any time, and such
              modifications shall be effective immediately upon posting on our
              website.
            </p>
            <div className="p-4 mb-4 border-l-4 border-yellow-400 bg-yellow-50">
              <p className="text-sm font-medium text-yellow-800 sm:text-base">
                Important Notice
              </p>
              <p className="text-sm text-gray-700 sm:text-base">
                Your continued use of our services following the posting of
                changes to these Terms will mean you accept those changes. It is
                your responsibility to check these Terms periodically for
                changes.
              </p>
            </div>
            <p className="text-sm text-gray-700 sm:text-base">
              These Terms constitute the entire agreement between you and
              ZimCrest Tech regarding the use of our services.
            </p>
          </section>
          <section id="account-terms" className="mb-10">
            <h2 className="mb-4 text-lg font-semibold text-gray-800 md:text-2xl">
              Account Terms
            </h2>
            <p className="mb-4 text-sm sm:text-base">
              To access certain features of our services, you may be required to
              create an account. When you create an account, you agree to the
              following:
            </p>
            <ul className="pl-5 mb-4 space-y-2 text-sm text-gray-700 list-disc sm:text-base">
              <li>
                You are responsible for maintaining the confidentiality of your
                account and password.
              </li>
              <li>
                You accept responsibility for all activities that occur under
                your account.
              </li>
              <li>
                You must provide accurate, current, and complete information
                during the registration process.
              </li>
              <li>
                You must promptly update your account information to keep it
                accurate, current, and complete.
              </li>
              <li>
                You may not use another person's account without permission.
              </li>
              <li>You may not transfer your account to another person.</li>
            </ul>
            <div className="mt-4">
              <button
                className="flex items-center justify-between w-full text-left px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg !rounded-button whitespace-nowrap cursor-pointer transition-colors"
                onClick={() => setAccount((prev) => !prev)}
              >
                <span className="text-sm font-medium sm:text-base">
                  Account Termination
                </span>
                <i
                  className={`text-gray-500 fas fa-chevron-down transition-all duration-300 ${
                    account ? "rotate-180" : "rotate-0"
                  }`}
                ></i>
              </button>
              <div
                id="account-details"
                className={`pl-4 mt-2 ${account ? "" : "hidden"}`}
              >
                <p className="mb-2 text-sm sm:text-base">
                  We reserve the right to:
                </p>
                <ul className="pl-5 space-y-1 text-sm text-gray-700 list-disc sm:text-base">
                  <li>
                    Terminate or suspend your account immediately, without prior
                    notice or liability, for any reason, including if you breach
                    these Terms.
                  </li>
                  <li>Refuse service to anyone for any reason at any time.</li>
                  <li>Remove or edit content in our sole discretion.</li>
                </ul>
              </div>
            </div>
          </section>
          <section id="service-usage" className="mb-10">
            <h2 className="mb-4 text-lg font-semibold text-gray-800 md:text-2xl">
              Service Usage Rules
            </h2>
            <p className="mb-4 text-sm sm:text-base">
              When using our services, you agree not to:
            </p>
            <div className="grid gap-4 mb-4 md:grid-cols-2">
              <div className="p-4 bg-gray-100 rounded-lg">
                <h3 className="mb-2 text-base font-medium text-gray-800 sm:text-lg">
                  Prohibited Actions
                </h3>
                <ul className="pl-5 space-y-1 text-sm text-gray-700 list-disc sm:text-base">
                  <li>Violate any applicable laws or regulations.</li>
                  <li>Infringe upon the rights of others.</li>
                  <li>
                    Use our services for any illegal or unauthorized purpose.
                  </li>
                  <li>Interfere with or disrupt our services or servers.</li>
                </ul>
              </div>
              <div className="p-4 bg-gray-100 rounded-lg">
                <h3 className="mb-2 text-base font-medium text-gray-800 sm:text-lg">
                  Content Restrictions
                </h3>
                <ul className="pl-5 space-y-1 text-sm text-gray-700 list-disc sm:text-base">
                  <li>Post defamatory, abusive, or offensive content.</li>
                  <li>Share malicious code or harmful data.</li>
                  <li>Impersonate any person or entity.</li>
                  <li>Collect user information without consent.</li>
                </ul>
              </div>
            </div>
            <p className="text-sm text-gray-700 sm:text-base">
              We reserve the right to monitor and review content posted on our
              services and to remove any content that violates these Terms or
              that we find objectionable for any reason.
            </p>
          </section>
          <section id="intellectual-property" className="mb-10">
            <h2 className="mb-4 text-lg font-semibold text-gray-800 md:text-2xl">
              Intellectual Property Rights
            </h2>
            <p className="mb-4 text-sm sm:text-base">
              Our services and their entire contents, features, and
              functionality are owned by ZimCrest Tech, its licensors, or other
              providers and are protected by copyright, trademark, patent, trade
              secret, and other intellectual property or proprietary rights
              laws.
            </p>
            <div className="py-2 pl-4 mb-4 border-l-4 border-blue-500">
              <p className="text-sm text-gray-700 sm:text-base">
                You may not reproduce, distribute, modify, create derivative
                works of, publicly display, publicly perform, republish,
                download, store, or transmit any of the material on our website,
                except as follows:
              </p>
              <ul className="pl-5 mt-2 space-y-1 text-sm text-gray-700 list-disc sm:text-base">
                <li>
                  Your computer may temporarily store copies of such materials
                  in RAM incidental to your accessing and viewing those
                  materials.
                </li>
                <li>
                  You may store files that are automatically cached by your web
                  browser for display enhancement purposes.
                </li>
                <li>
                  You may print or download one copy of a reasonable number of
                  pages of the website for your own personal, non-commercial use
                  and not for further reproduction, publication, or
                  distribution.
                </li>
              </ul>
            </div>
          </section>
          <section id="limitation-liability" className="mb-10">
            <h2 className="mb-4 text-lg font-semibold text-gray-800 md:text-2xl">
              Limitation of Liability
            </h2>
            <p className="mb-4 text-sm sm:text-base">
              To the fullest extent permitted by applicable law, ZimCrest Tech
              shall not be liable for any indirect, incidental, special,
              consequential, or punitive damages, including but not limited to,
              damages for loss of profits, goodwill, use, data, or other
              intangible losses, resulting from:
            </p>
            <ul className="pl-5 mb-4 space-y-2 text-sm text-gray-700 list-disc sm:text-base">
              <li>
                Your access to or use of or inability to access or use our
                services.
              </li>
              <li>
                Any conduct or content of any third party on our services.
              </li>
              <li>Any content obtained from our services.</li>
              <li>
                Unauthorized access, use, or alteration of your transmissions or
                content.
              </li>
            </ul>
            <div className="p-4 border-l-4 border-red-400 bg-red-50">
              <p className="text-sm font-medium text-red-800 sm:text-base">
                Disclaimer
              </p>
              <p className="text-sm text-gray-700 sm:text-base">
                Our services are provided on an "as is" and "as available"
                basis, without any warranties of any kind, either express or
                implied. We disclaim all warranties, including but not limited
                to, implied warranties of merchantability, fitness for a
                particular purpose, and non-infringement.
              </p>
            </div>
          </section>
          <section id="dispute-resolution" className="mb-10">
            <h2 className="mb-4 text-lg font-semibold text-gray-800 md:text-2xl">
              Dispute Resolution
            </h2>
            <p className="mb-4 text-sm sm:text-base">
              Any disputes arising out of or relating to these Terms or our
              services shall be resolved as follows:
            </p>
            <div className="mt-4">
              <button
                className="flex items-center justify-between w-full text-left px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg !rounded-button whitespace-nowrap cursor-pointer transition-colors"
                onClick={() => setDispute((prev) => !prev)}
              >
                <span className="text-sm font-medium sm:text-base">
                  Dispute Resolution Process
                </span>
                <i
                  className={`text-gray-500 fas fa-chevron-down transition-all duration-300 ${
                    dispute ? "rotate-180" : "rotate-0"
                  }`}
                ></i>
              </button>
              <div
                id="dispute-details"
                className={`pl-4 mt-2 ${dispute ? "" : "hidden"}`}
              >
                <ol className="pl-5 space-y-2 text-sm text-gray-700 list-decimal sm:text-base">
                  <li>
                    <strong>Informal Resolution:</strong> We encourage you to
                    contact us first to seek an informal resolution to any
                    disputes.
                  </li>
                  <li>
                    <strong>Mediation:</strong> If informal resolution is
                    unsuccessful, the parties agree to attempt to resolve the
                    dispute through mediation conducted by a mutually agreed
                    upon mediator.
                  </li>
                  <li>
                    <strong>Arbitration:</strong> If mediation is unsuccessful,
                    any remaining disputes shall be resolved by binding
                    arbitration in accordance with the rules of the American
                    Arbitration Association.
                  </li>
                  <li>
                    <strong>Exceptions:</strong> Nothing in these Terms will
                    prevent either party from seeking injunctive relief in a
                    court of competent jurisdiction.
                  </li>
                </ol>
              </div>
            </div>
            <p className="mt-4 text-sm text-gray-700 sm:text-base">
              By using our services, you agree that the laws of the State of
              California, without regard to principles of conflict of laws, will
              govern these Terms and any dispute that might arise between you
              and ZimCrest Tech.
            </p>
          </section>
          <section id="termination-clauses" className="mb-6">
            <h2 className="mb-4 text-lg font-semibold text-gray-800 md:text-2xl">
              Termination Clauses
            </h2>
            <p className="mb-4 text-sm sm:text-base">
              We may terminate or suspend your access to our services
              immediately, without prior notice or liability, for any reason
              whatsoever, including without limitation if you breach these
              Terms.
            </p>
            <div className="p-4 mb-4 bg-gray-100 rounded-lg">
              <h3 className="mb-2 text-base font-medium text-gray-800 sm:text-lg">
                Effects of Termination
              </h3>
              <p className="text-sm text-gray-700 sm:text-base">
                Upon termination, your right to use our services will
                immediately cease. The following provisions of these Terms shall
                survive termination:
              </p>
              <ul className="pl-5 mt-2 space-y-1 text-sm text-gray-700 list-disc sm:text-base">
                <li>Intellectual Property Rights</li>
                <li>Limitation of Liability</li>
                <li>Dispute Resolution</li>
                <li>
                  Any other provisions that by their nature should survive
                  termination
                </li>
              </ul>
            </div>
            <p className="text-sm text-gray-700 sm:text-base">
              If you wish to terminate your account, you may simply discontinue
              using our services or contact us to request account deletion.
            </p>
          </section>
        </div>
      </section>
    </>
  );
}
