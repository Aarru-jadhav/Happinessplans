
import React from 'react';

const Category = () => {
  return (
    <div className="bg-white">
     
      <div className="text-center py-16">
        <h1 className="text-5xl font-bold text-blue-950 ">Travel Categories</h1>
        <p className="text-black mt-4 text-lg">Find your perfect kind of getaway</p>
      </div>

     
      <div className="flex flex-col lg:flex-row items-center gap-12 px-8 lg:px-20 py-10 border-b-2 border-gray-400 ">
       
        <div className="lg:w-1/2 space-y-6">
          <h2 className="text-4xl font-bold text-blue-950 ">Adventure Trips</h2>
          <p className="text-gray-700 text-lg">
            Ready to conquer the wild? Our adventure trips take you to the edge of excitement — from high-altitude hikes to jungle escapades. Experience nature's raw power with confidence.
          </p>
          
        </div>

        
        <div className="lg:w-1/2 relative h-[400px] w-full flex items-center justify-center">
          <img
            src="/adventure.avif"
            alt="Adventure 1"
            className="absolute w-52 h-72 object-cover rounded-2xl border-4 border-white shadow-lg transform rotate-3"
          />
          <img
            src="/adventure2.avif"
            alt="Adventure 2"
            className="absolute w-52 h-72 object-cover rounded-2xl border-4 border-white shadow-lg left-20 top-24 transform -rotate-3"
          />
          
        </div>
      </div>

     
      <div className="flex flex-col lg:flex-row-reverse items-center gap-12 px-8 lg:px-20 py-10 bg-gradient-to-l from-pink-50 to-white border-b-2 border-gray-500">
       
        <div className="lg:w-1/2 space-y-6">
          <h2 className="text-4xl font-bold text-blue-950 ">International Tours</h2>
          <p className="text-gray-700 text-lg">
            Travel the world with ease — from romantic Paris nights to luxurious Dubai skyscrapers. We handle it all, from tickets to tour guides.
          </p>
          
        </div>

        
        <div className="lg:w-1/2 relative h-[400px] w-full flex items-center justify-center">
          <img
            src="/tour.avif"
            alt="Tour 1"
            className="absolute w-56 h-80 object-cover rounded-2xl border-4 border-white shadow-lg transform -rotate-6"
          />
          <img
            src="/tour2.avif"
            alt="Tour 2"
            className="absolute w-56 h-80 object-cover rounded-2xl border-4 border-white shadow-lg left-24 top-20 transform rotate-6"
          />
          
        </div>
      </div>
    </div>
  );
};

export default Category;
