import { motion } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/zimcrest.png";
export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const navigate = useNavigate();

  return (
    <header className="fixed z-50 w-full px-4 pt-4">
      <motion.nav
        className="mx-auto rounded-[28px] bg-white backdrop-blur-lg border-gray-300 shadow-sm max-w-[1000px]"
        role="nav"
        aria-label="Main navigation"
      >
        <div className="flex items-center justify-between gap-2 px-4 py-2">
          <Link to={"/"} className="outline-none">
            <img src={logo} alt="logo" className="w-10 aspect-[5/4]" />
          </Link>
          <div className="items-center justify-center hidden font-medium md:flex">
            <a href="#what-we-do" className="nav-link">
              What We Do
            </a>
            <a href="#solutions" className="nav-link">
              Solutions
            </a>
            <a href="#process" className="nav-link">
              Process
            </a>
            <a href="#testimonials" className="nav-link">
              Testimonials
            </a>
            <a href="#portfolio" className="nav-link">
              Portfolio
            </a>
            <Link to="/about" className="nav-link">
              About
            </Link>
          </div>
          <motion.button
            className="hidden btn-primary md:flex whitespace-nowrap"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/consultation")}
            aria-label="Get Started"
          >
            Get Started
          </motion.button>
          <motion.button
            className="p-2 md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.9 }}
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-600" aria-hidden="true" />
            ) : (
              <Menu className="w-6 h-6 text-gray-600" aria-hidden="true" />
            )}
          </motion.button>
        </div>
        {/* Mobile Menu */}
        <motion.div
          className={`md:hidden bg-white/50 rounded-b-[28px] border-t border-purple-100/50 ${
            isMobileMenuOpen ? "block" : "hidden"
          }`}
          initial={{ opacity: 0, y: -20 }}
          animate={{
            opacity: isMobileMenuOpen ? 1 : 0,
            y: isMobileMenuOpen ? 0 : -20,
          }}
          transition={{ duration: 0.2 }}
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="mobile-menu"
        >
          <div className="px-6 py-4 space-y-4">
            <a href="#what-we-do" className="block nav-link" role="menuitem">
              What We Do
            </a>
            <a href="#solutions" className="block nav-link" role="menuitem">
              Solutions
            </a>
            <a href="#process" className="block nav-link" role="menuitem">
              Process
            </a>
            <a href="#testimonials" className="block nav-link" role="menuitem">
              Testimonials
            </a>
            <a href="#portfolio" className="block nav-link" role="menuitem">
              Portfolio
            </a>
            <Link to="/about" className="block nav-link" role="menuitem">
              About
            </Link>
            <motion.button
              className="w-full btn-primary"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate("/consultation")}
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
