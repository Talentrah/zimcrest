import React from "react";
import { motion } from "framer-motion";
import { socialLinks } from "../data/socials";
import logoBig from "../assets/zimcrest.png";

const Footer: React.FC = () => {
  return (
    <footer
      className="w-full py-8 bg-white border-t border-gray-100"
      role="contentinfo"
    >
      <div className="grid w-full max-w-[1200px] sm:grid-cols-3 grid-cols-1 gap-10 sm:px-10 px-6 justify-items-center items-center mx-auto">
        {/* Logo and Copyright */}
        <div className="flex flex-col items-center justify-start gap-0 sm:items-start">
          <motion.div whileHover={{ scale: 1.05 }} className="flex-shrink-0">
            <img src={logoBig} alt="logo" className="w-32 aspect-[5/4]" />
          </motion.div>
          <p className="text-sm text-gray-500 sm:text-base">
            © {new Date().getFullYear()} Zimcrest Technologies. All rights
            reserved.
          </p>
        </div>

        {/* Navigation Links */}
        <nav
          className="flex flex-col items-start justify-start gap-6"
          aria-label="Footer navigation"
        >
          <a href="/#solutions" className="footer-link">
            Solutions
          </a>
          <a href="/#process" className="footer-link">
            Process
          </a>
          <a href="/#testimonials" className="footer-link">
            Testimonials
          </a>
          <a href="/#portfolio" className="footer-link">
            Portfolio
          </a>
        </nav>

        {/* Social and Legal Links */}
        <div className="flex flex-col items-start justify-start gap-8">
          {/* Social Links */}
          <div className="flex items-center space-x-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 transition-colors duration-300 hover:text-primary-600"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                aria-label={social.label}
                style={{ cursor: "pointer" }}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
          {/* Legal Links */}
          <div className="flex items-center justify-center space-x-4 text-sm md:text-base">
            <a
              href="/privacy"
              className="text-gray-500 transition-colors duration-300 hover:text-primary-600"
            >
              Privacy
            </a>
            <a
              href="/terms"
              className="text-gray-500 transition-colors duration-300 hover:text-primary-600"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
