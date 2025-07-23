
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="flex h-[90px] w-full justify-around items-center px-8 bg-white shadow-md border-b border-gray-300">

      <div>
        <img
          className="w-[140px] h-[79px] object-cover rounded-full"
          src="/src/assets/file-removebg-preview.png"
          alt="company logo"
        />
      </div>

      <ul className="flex gap-10">
        <li>
          <Link to="/" className="text-lg font-semibold text-gray-700 hover:text-yellow-600 transition-colors duration-200">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="text-lg font-semibold text-gray-700 hover:text-yellow-600 transition-colors duration-200">
            About
          </Link>
        </li>
        <li>
          <Link to="/services" className="text-lg font-semibold text-gray-700 hover:text-yellow-600 transition-colors duration-200">
            Services
          </Link>
        </li>
        <li>
          <Link to="/contact" className="text-lg font-semibold text-gray-700 hover:text-yellow-600 transition-colors duration-200">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
