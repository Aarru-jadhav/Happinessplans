import React from 'react';

const testimonials = [
  {
    name: 'Priya Mehta',
    location: 'Mumbai, India',
    text: 'Our trip to Bali was unforgettable. Happiness Plans handled everything — all we had to do was relax and enjoy!',
    stars: 5,
  },
  {
    name: 'Rahul & Sneha',
    location: 'Delhi, India',
    text: 'Perfect honeymoon in Maldives! Everything was smooth, well-organized, and magical. Thank you!',
    stars: 5,
  },
  {
    name: 'Siddharth Rao',
    location: 'Bangalore, India',
    text: 'Highly recommended for family vacations. We had the best time in Manali. Great support team!',
    stars: 4,
  },
];

const Testimonials = () => {
  return (
    <section className="bg-gray-50 py-24 px-6">
      <h2 className="text-5xl font-bold text-center text-blue-950 mb-16">
        What Our Customers Say
      </h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {testimonials.map((review, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl shadow-xl p-10 transition duration-300 hover:shadow-2xl border border-gray-200"
          >
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              “{review.text}”
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between">
              <div className="text-lg font-semibold text-gray-800">
                {review.name}
                <div className="text-sm text-gray-500">{review.location}</div>
              </div>
              <div className="mt-4 sm:mt-0 inline-block px-3 py-1 bg-blue-100 text-blue-600 text-sm font-medium rounded-full">
                {review.stars}.0 ★ Rating
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
