import { NavLink } from "react-router-dom";
import logo from "../assets/zimcrest.png";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <header className="relative z-20 flex items-center justify-between w-full px-8 py-4 bg-white shadow-sm">
      <div className="flex-shrink-0">
        <img src={logo} alt="logo" className="object-contain w-12" />
      </div>
      <nav
        className={`absolute flex flex-col items-center justify-center w-full lg:gap-8 gap-0 p-6 bg-white lg:left-0 lg:w-auto lg:flex-row lg:relative lg:top-auto top-14 lg:p-0 transition-all duration-500 ease-in-out ${
          isOpen ? "left-0" : "left-[100%]"
        }`}
      >
        <NavLink
          to="/"
          className={({ isActive }) =>
            `text-base font-medium border-primary-600 lg:py-0 py-4  ${
              isActive
                ? "text-primary-500 border-b-2"
                : "text-gray-600 border-b-0"
            }`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/hire-talent"
          className={({ isActive }) =>
            `text-base font-medium border-primary-600 lg:py-0 py-4  ${
              isActive
                ? "text-primary-500 border-b-2"
                : "text-gray-600 border-b-0"
            }`
          }
        >
          Hire Talent
        </NavLink>
        <NavLink
          to="/internship"
          className={({ isActive }) =>
            `text-base font-medium border-primary-600 lg:py-0 py-4  ${
              isActive
                ? "text-primary-500 border-b-2"
                : "text-gray-600 border-b-0"
            }`
          }
        >
          Internship
        </NavLink>
        <NavLink
          to="/training"
          className={({ isActive }) =>
            `text-base font-medium border-primary-600 lg:py-0 py-4  ${
              isActive
                ? "text-primary-500 border-b-2"
                : "text-gray-600 border-b-0"
            }`
          }
        >
          Training
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `text-base font-medium border-primary-600 lg:py-0 py-4  ${
              isActive
                ? "text-primary-500 border-b-2"
                : "text-gray-600 border-b-0"
            }`
          }
        >
          About Us
        </NavLink>
        <NavLink
          to="/consultation"
          className={({ isActive }) =>
            `text-base font-medium border-primary-600 lg:py-0 py-4  ${
              isActive
                ? "text-primary-500 border-b-2"
                : "text-gray-600 border-b-0"
            }`
          }
        >
          Contact
        </NavLink>
      </nav>
      <button
        className="block cursor-pointer lg:hidden"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
      </button>
    </header>
  );
};
