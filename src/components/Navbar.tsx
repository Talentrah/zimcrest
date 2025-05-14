import { Link } from "react-router-dom";
import logo from "../assets/zimcrest.png";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <header className="fixed z-50 w-full px-4 pt-4">
      <motion.nav
        className="max-w-7xl mx-auto rounded-[28px] shadow-lg shadow-purple-100/50 border border-purple-100/50 backdrop-blur-lg bg-white"
        role="nav"
        aria-label="Main navigation"
      >
        <div className="px-6 lg:px-8">
          <div className="flex items-center justify-between py-2">
            <motion.div
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to={"/"} className="outline-none">
                <img src={logo} alt="logo" className="object-contain w-14" />
              </Link>
            </motion.div>
            <div className="items-center hidden space-x-4 lg:flex">
              <Link to={"/"} className="nav-link">
                Home
              </Link>
              <Link to={"/hire-talent"} className="nav-link">
                Hire Talent
              </Link>
              <Link to={"/internship"} className="nav-link">
                Internship
              </Link>
              <Link to={"/training"} className="nav-link">
                Training
              </Link>
              <Link to={"/about"} className="nav-link">
                About
              </Link>
              <Link to={"/"} className="nav-link">
                Refer & Earn
              </Link>
              <Link to={"/consultation"}>
                <motion.button
                  className="btn-primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Get Started"
                >
                  Get Started
                </motion.button>
              </Link>
            </div>
            <motion.button
              className="p-2 lg:hidden"
              onClick={() => setIsOpen((prev) => !prev)}
              whileTap={{ scale: 0.9 }}
              aria-expanded={isOpen}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-6 h-6 text-gray-600" aria-hidden="true" />
              ) : (
                <Menu className="w-6 h-6 text-gray-600" aria-hidden="true" />
              )}
            </motion.button>
          </div>
        </div>
        {/* Mobile Menu */}
        <motion.div
          className={`lg:hidden bg-white/50 rounded-b-[28px] border-t border-purple-100/50 ${
            isOpen ? "block" : "hidden"
          }`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -20 }}
          transition={{ duration: 0.2 }}
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="mobile-menu"
        >
          <div className="px-6 py-4 space-y-4">
            <button className="block w-full text-left nav-link" role="menuitem">
              Home
            </button>
            <button className="block w-full text-left nav-link" role="menuitem">
              Hire Talent
            </button>
            <button className="block w-full text-left nav-link" role="menuitem">
              Internship
            </button>
            <button className="block w-full text-left nav-link" role="menuitem">
              Training
            </button>
            <button className="block w-full text-left nav-link" role="menuitem">
              About
            </button>
            <button className="block w-full text-left nav-link" role="menuitem">
              Refer & Earn
            </button>
            <motion.button
              className="w-full btn-primary"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              role="menuitem"
            >
              Get Started
            </motion.button>
          </div>
        </motion.div>
      </motion.nav>
    </header>
  );
};
