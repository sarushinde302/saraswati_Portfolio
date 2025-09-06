import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Track the menu state

  const navItems = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Skills", link: "#skills" },
    { name: "Education", link: "#education" },
    { name: "Portfolio", link: "#portfolio" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-90 shadow-md z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-white text-2xl font-bold">Saraswati</h1>

        {/* Mobile menu icon */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Navbar items */}
        <ul
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } md:flex space-x-6 transition-all duration-500 ease-in-out transform md:space-x-6`}
        >
          {navItems.map((item, index) => (
            <li key={index} className="transition duration-300">
              <a
                href={item.link}
                className="text-gray-300 hover:text-white transition duration-300"
                onClick={() => setIsMenuOpen(false)} // Close the menu after click
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile menu items - smooth slide-down */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } md:hidden absolute top-0 left-0 w-full bg-black bg-opacity-90 shadow-md transition-all duration-500 ease-in-out transform`}
      >
        <ul className="flex flex-col items-center space-y-6 p-6">
          {navItems.map((item, index) => (
            <li key={index}>
              <a
                href={item.link}
                className="text-gray-300 hover:text-white transition duration-300"
                onClick={() => setIsMenuOpen(false)} // Close the menu after clicking a link
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
