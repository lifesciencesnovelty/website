import React, { useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    setEmail("");
  };

  return (
    <footer className="bg-[#111010] text-white py-12">
      <div className="max-w-7xl mx-auto z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 px-4 sm:px-6 md:px-0">
          <div className="text-white">
            <h3 className="text-2xl md:text-3xl font-medium text-white mb-4 md:mb-6">
              About
            </h3>
            <div className="w-12 h-1 bg-white mb-4 md:mb-6"></div>

            <p className="text-sm md:text-base text-white/95 leading-relaxed">
              Novelty LifeSciences (est. 2019, Hyderabad) produces niche oral
              meds via facilities in Telangana, Mumbai and Himachal Pradesh. Trusted partner, part of
              reputed group.
            </p>
          </div>

          <div>
            <h3 className="text-2xl md:text-3xl font-medium text-white mb-4 md:mb-6">
              Quick Links
            </h3>
            <div className="w-12 h-1 bg-white mb-4 md:mb-6"></div>
            <ul className="space-y-2 md:space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-sm md:text-base text-white/95 hover:text-teal-600 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-sm md:text-base text-white/95 hover:text-teal-600 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/product"
                  className="text-sm md:text-base text-white/95 hover:text-teal-600 transition-colors"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-sm md:text-base text-white/95 hover:text-teal-600 transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl md:text-3xl font-medium text-white mb-4 md:mb-6">
              Contact
            </h3>
            <div className="w-12 h-1 bg-white mb-4 md:mb-6"></div>

            <div className="space-y-3 md:space-y-4">
              <div>
                <p className="text-sm md:text-base text-white/95">
                  E-309, Crystal Plaza,
                  <br />
                  Andheri(West),Mumbai
                  <br />
                  400053
                </p>
              </div>
              <div>
                <p className="text-sm md:text-base text-white/95">
                  sales@noveltylifesciences.com
                </p>
              </div>
              <div>
                <p className="text-sm md:text-base text-white/95">
                  +91 7837836626, +91 9381148576
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-[#2a2a2a] py-6 md:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-0">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-3 sm:items-center sm:justify-between">
            <div className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-white text-center sm:text-left whitespace-nowrap">
              Sign in and don't miss anything!
            </div>

            <div className="flex gap-0 w-full sm:w-auto">
              <input
                type="email"
                placeholder="Enter your e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 sm:flex-none px-3 sm:px-4 py-2 sm:py-2 outline-none text-black rounded-l-full bg-white focus:ring-2 focus:ring-red-500 text-xs sm:text-sm md:text-base"
              />
              <button
                onClick={handleSubmit}
                className="flex-shrink-0 bg-red-600 font-semibold text-white px-4 sm:px-6 py-2 rounded-r-full hover:bg-blue-500 transition-colors duration-300 text-xs sm:text-sm md:text-base"
              >
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-0">
        <div className="flex flex-col items-center justify-between gap-6 pt-8 md:flex-row">
          <div className="flex-shrink-0">
            <img src="/logo1.png" alt="logo" height={80} width={120} />
          </div>
          <div>
            <p className="text-xs sm:text-sm text-center md:text-right">
              Copyright &copy; 2019 Novelty Life Sciences. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
