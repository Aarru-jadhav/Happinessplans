// import React from 'react'

// const Services = () => {
//   return (
//      <div className="p-10 text-center text-2xl">
//       this  is service
//     </div>
//   )
// }

// export default Services
import React from 'react';

const Services = () => {
  return (
    <div className="p-8 max-w-6xl mx-auto text-gray-800">
      <h1 className="text-4xl font-bold text-center text-yellow-600 mb-6">Our Services</h1>
      <p className="text-lg text-center mb-10">
        At <strong>Happiness Plans</strong>, we are dedicated to enriching lives through meaningful travel experiences,
        wellness programs, and personal growth initiatives. Explore our key services below:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Travel Planning */}
        <div className="border rounded-xl p-6 shadow-md hover:shadow-xl transition">
          <h2 className="text-2xl font-semibold text-blue-700 mb-2">Customized Travel Experiences</h2>
          <p>
            We design unforgettable domestic and international travel packages tailored to your preferences.
            From serene retreats to adventurous getaways – your journey, your way.
          </p>
        </div>

        {/* Happiness & Wellness Programs */}
        <div className="border rounded-xl p-6 shadow-md hover:shadow-xl transition">
          <h2 className="text-2xl font-semibold text-blue-700 mb-2">Happiness & Wellness Programs</h2>
          <p>
            Inspired by ancient wisdom and modern psychology, we offer guided meditation, yoga, and breathing workshops
            that promote inner peace and mental clarity.
          </p>
        </div>

        {/* Personality Development */}
        <div className="border rounded-xl p-6 shadow-md hover:shadow-xl transition">
          <h2 className="text-2xl font-semibold text-blue-700 mb-2">Personality Development & Seminars</h2>
          <p>
            Our transformational workshops empower individuals through confidence-building,
            leadership skills, and effective communication training.
          </p>
        </div>

        {/* Community Engagement */}
        <div className="border rounded-xl p-6 shadow-md hover:shadow-xl transition">
          <h2 className="text-2xl font-semibold text-blue-700 mb-2">Community & Social Initiatives</h2>
          <p>
            We actively collaborate with NGOs and citizen-led initiatives in Indore for environmental,
            educational, and social welfare programs. Join us in making a difference.
          </p>
        </div>
      </div>

      <div className="text-center mt-12">
        <p className="text-lg font-medium">
          Whether you're looking to travel, grow, or give back—Happiness Plans is your partner on the path to joy and fulfillment.
        </p>
      </div>
    </div>
  );
};

export default Services;
