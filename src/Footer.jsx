import React from 'react';
import { FaInstagram, FaFacebookF, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className=" text-black py-12 px-6 border-t-2 border-yellow-500">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Brand */}
        <div>
          <img
            src="src/assets/file-removebg-preview.png"
            alt="Logo"
            className="w-[120px] h-[60px] object-cover pt-7 "
          />

          <p className='pt-8'>Your trusted travel partner for unforgettable journeys.</p>
        </div>


        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-yellow-500">Home</a></li>
            <li><a href="#" className="hover:text-yellow-500">Popular Destinations</a></li>
            <li><a href="#" className="hover:text-yellow-500">Categories</a></li>
            <li><a href="#" className="hover:text-yellow-500">Testimonials</a></li>
          </ul>
        </div>


        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Contact</h3>
          <p>Email: info@happinessplans.com</p>
          <p>Phone: +91 xxxxxxxxxx </p>
          <p>Indore, Madhya Pradesh</p>
        </div>


        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="https://instagram.com/happiness.plans" target="_blank" rel="noreferrer">
              <FaInstagram className="text-2xl hover:text-pink-400" />
            </a>
            <a href="#" className="hover:text-blue-500">
              <FaFacebookF className="text-2xl" />
            </a>
            <a href="#" className="hover:text-green-500">
              <FaWhatsapp className="text-2xl" />
            </a>
          </div>
        </div>
      </div>


      <div className="text-center text-sm text-gray-500 mt-10 border-t pt-4">
        &copy; {new Date().getFullYear()} Happiness Plans. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
