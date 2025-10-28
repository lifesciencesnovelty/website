import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/product", label: "Products" },
    { href: "/contact", label: "Contact Us" },
  ];

  return (
    <nav className="bg-white m-2 p-4 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex-shrink-0">
          <img 
            src="/logo1.png" 
            alt="logo" 
            onClick={() => navigate("/")}
            className="w-20 h-12 sm:w-24 sm:h-14 md:w-28 md:h-16 lg:w-32 lg:h-20 object-contain" 
          />
        </div>

        <div className="hidden md:flex space-x-4 lg:space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className="text-sm lg:text-xl font-normal text-[#5eb8b2] hover:text-[#ef6c00] transition-colors duration-200 whitespace-nowrap"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <button
          onClick={toggleMenu}
          className="md:hidden p-2 rounded-md text-[#5eb8b2] hover:text-[#ef6c00] hover:bg-gray-100 transition-colors duration-200"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden mt-4 py-4 border-t border-gray-200">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-lg font-semibold text-[#5eb8b2] hover:text-[#ef6c00] transition-colors duration-200 py-2 px-4 rounded-md hover:bg-gray-50"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

