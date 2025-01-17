import React, { useState, useEffect, useRef } from "react";
import { elvoraLogo2 } from "../../../Constants";
import { FaBars } from "react-icons/fa";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-gray-800 py-4 fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center px-4 md:px-0">
        {/* Logo */}
        <div className="logo">
          <img className="w-22 h-12" src={elvoraLogo2} alt="Logo" />
        </div>

        {/* Hamburger Menu */}
        <button
          ref={buttonRef}
          className="text-white md:hidden focus:outline-none"
          onClick={toggleMenu}
        >
          <FaBars className="h-6 w-6" />
        </button>

        {/* Menu Items */}
        <ul
          ref={menuRef}
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:flex md:items-center md:space-x-4 absolute md:static bg-gray-800 w-full md:w-auto left-0 top-full md:top-auto py-4 md:py-0`}
        >
          <li>
            <a
              href="#"
              className="text-white block px-4 py-2 md:py-0 hover:text-[#878127] transition duration-300"
            >
              Home
            </a>
          </li>
          <li className="relative group">
            <a
              href="#"
              className="text-white block px-4 py-2 md:py-0 hover:text-[#878127] transition duration-300"
            >
              Our Services
            </a>

            {/* Dropdown Menu */}
            <ul className="absolute left-0 top-full bg-gray-800 py-2 w-48 hidden group-hover:flex flex-col shadow-lg z-10">
              <li className="py-2 px-4 hover:bg-gray-700 cursor-pointer">
                <a
                  href="#"
                  className="text-white transition duration-300"
                >
                  Catering and Lobby Services
                </a>
              </li>
              <li className="py-2 px-4 hover:bg-gray-700 cursor-pointer">
                <a
                  href="#"
                  className="text-white transition duration-300"
                >
                  Services of Rooms and Units
                </a>
              </li>
              <li className="py-2 px-4 hover:bg-gray-700 cursor-pointer">
                <a
                  href="#"
                  className="text-white transition duration-300"
                >
                  Transportation Services
                </a>
              </li>
              <li className="py-2 px-4 hover:bg-gray-700 cursor-pointer">
                <a
                  href="#"
                  className="text-white transition duration-300"
                >
                  Management Services and Support for Daily
                  Needs
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a
              href="#"
              className="text-white block px-4 py-2 md:py-0 hover:text-[#878127] transition duration-300"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-white block px-4 py-2 md:py-0 hover:text-[#878127] transition duration-300"
            >
              Reservation & Contact Us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
