import React from "react";
import { socialLinks } from "../data/socials";
import logoBig from "../assets/zimcrest.png";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="w-full text-white bg-primary-800">
      <div className="w-full px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <Link to={"/"}>
              <img src={logoBig} alt="logo" className="object-contain w-28" />
            </Link>
            <p className="text-gray-300">
              Connecting top tech talent with innovative companies since 2018.
            </p>
            <div className="flex mt-4 space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white"
                  aria-label={link.label}
                >
                  <link.icon size={20} />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/hire-talent"
                  className="text-gray-300 cursor-pointer hover:text-white"
                >
                  Hire Talent
                </Link>
              </li>
              <li>
                <Link
                  to="/internship"
                  className="text-gray-300 cursor-pointer hover:text-white"
                >
                  Internship Programs
                </Link>
              </li>
              <li>
                <Link
                  to="/training"
                  className="text-gray-300 cursor-pointer hover:text-white"
                >
                  Tech Training
                </Link>
              </li>
              <li>
                <Link
                  to="/consultation"
                  className="text-gray-300 cursor-pointer hover:text-white"
                >
                  Consulting
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-300 cursor-pointer hover:text-white"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-300 cursor-pointer hover:text-white"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/consultation"
                  className="text-gray-300 cursor-pointer hover:text-white"
                >
                  Consultation
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <i className="mr-2 text-indigo-400 fas fa-phone"></i>
                <span className="text-gray-300">+234 (0)905 998 8298</span>
              </li>
              <li className="flex items-center">
                <i className="mr-2 text-indigo-400 fas fa-envelope"></i>
                <Link
                  to={"mailto:info@zimcresttech.com"}
                  className="text-gray-300"
                >
                  info@zimcresttech.com
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col flex-wrap items-center justify-between w-full pt-8 mt-12 border-t border-white md:flex-row">
          <p className="text-base text-gray-400">
            © {new Date().getFullYear()} ZimcrestTech. All rights reserved.
          </p>
          <div className="flex flex-col flex-wrap items-center justify-center w-full mt-4 space-y-6 sm:space-x-6 sm:flex-row md:mt-0">
            <Link
              to="#"
              className="text-gray-400 cursor-pointer hover:text-white whitespace-nowrap"
            >
              Privacy Policy
            </Link>
            <Link
              to="#"
              className="text-gray-400 cursor-pointer hover:text-white whitespace-nowrap"
            >
              Terms of Service
            </Link>
            <Link
              to="#"
              className="text-gray-400 cursor-pointer hover:text-white whitespace-nowrap"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
