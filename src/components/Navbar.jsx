import { NavLink } from "react-router-dom"; // Use NavLink for active link styling
import { motion } from "framer-motion";
import { FaSearch, FaUser, FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to track menu visibility

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle menu visibility
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, delay: 0.2 }}
      className="absolute flex justify-around items-center py-10 top-0 left-0 w-full z-10 bg-transparent text-white py-4"
    >
      <div className="nav-container flex justify-between p-2 items-center w-11/12 overflow-hidden border-b border-b-neutral-500">
        {/* Logo */}
        <h1 className="lg:text-5xl text-2xl font-tittle font-bold ml-5">
          Luxe <span className="text-blue-400">Drive</span>
        </h1>

        {/* Hamburger Icon for Small Screens */}
        <div className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? (
            <FaTimes className="text-white cursor-pointer hover:text-blue-400" size={24} />
          ) : (
            <FaBars className="text-white cursor-pointer hover:text-blue-400" size={24} />
          )}
        </div>

        {/* Links for Medium and Larger Screens */}
        <ul className="hidden md:flex gap-20 items-center font-tittle z-10 mr-5">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-2xl hover:text-blue-400 hover:cursor-pointer ${
                  isActive ? "text-blue-400 font-bold" : ""
                }`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `text-2xl hover:text-blue-400 ${
                  isActive ? "text-blue-400 font-bold" : ""
                }`
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/models"
              className={({ isActive }) =>
                `text-2xl hover:text-blue-400 ${
                  isActive ? "text-blue-400 font-bold" : ""
                }`
              }
            >
              Models
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `text-2xl hover:text-blue-400 ${
                  isActive ? "text-blue-400 font-bold" : ""
                }`
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>

        {/* Sliding Menu for Small Screens */}
        <div
          className={`fixed top-0 left-0 h-screen w-screen bg-neutral-900 p-10 transition-transform duration-500 ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Close Button */}
          <div className="flex justify-end">
            <FaTimes
              className="text-white cursor-pointer hover:text-blue-400"
              size={30}
              onClick={toggleMenu}
            />
          </div>

          {/* Menu Items */}
          <ul className="flex flex-col gap-8 mt-10 items-start font-medium text-lg">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `text-white hover:text-blue-400 ${
                    isActive ? "text-blue-400 font-bold" : ""
                  }`
                }
                onClick={toggleMenu}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `text-white hover:text-blue-400 ${
                    isActive ? "text-blue-400 font-bold" : ""
                  }`
                }
                onClick={toggleMenu}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/models"
                className={({ isActive }) =>
                  `text-white hover:text-blue-400 ${
                    isActive ? "text-blue-400 font-bold" : ""
                  }`
                }
                onClick={toggleMenu}
              >
                Models
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `text-white hover:text-blue-400 ${
                    isActive ? "text-blue-400 font-bold" : ""
                  }`
                }
                onClick={toggleMenu}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Profile and Search Icons */}
        <div className="hidden md:flex gap-3">
          <FaUser className="hover:text-blue-400" size={24} />
          <FaSearch className="hover:text-blue-400" size={24} />
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;