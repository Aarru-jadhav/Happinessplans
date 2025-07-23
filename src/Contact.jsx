
import React from 'react';

const Contact = () => {
  return (
    <div className="p-8 max-w-4xl mx-auto text-gray-800">
      <h1 className="text-4xl font-bold text-center text-yellow-600 mb-6">Contact Us</h1>

      <div className="bg-white rounded-lg shadow-md p-6 space-y-6">
        <div>
          <h2 className="text-xl font-semibold text-blue-700">Phone Number</h2>
          <p className="mt-1">📞 8224803424</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-blue-700">Address</h2>
          <p className="mt-1">
            408, Apollo Premier,<br />
            Vijay Nagar Square,<br />
            Ratna Lok Colony,<br />
            Indore, Madhya Pradesh 452011
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-blue-700">Website</h2>
          <a
            href="https://happinessplans.com"
            className="text-yellow-600 underline hover:text-yellow-800"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://happinessplans.com
          </a>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-blue-700">Follow Us</h2>
          <a
            href="https://www.instagram.com/happinessplans/"
            className="text-pink-600 hover:text-pink-800 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
