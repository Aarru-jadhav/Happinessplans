
import React from 'react';

const Herosection = () => {
  return (
    <div className="relative">
     
      <img
        className="w-full h-[600px] object-cover rounded-xl"
        src="/herosection.avif"
        alt="hero image"
      />

    
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center bg-black bg-opacity-40 rounded-xl">
        <h1 className="text-5xl md:text-6xl font-bold">Make Every Moment</h1>
        <h2 className="text-5xl md:text-6xl font-bold mt-2">A Celebration</h2>
        <p className="text-2xl mt-4 max-w-3xl">
          Discover unforgettable journeys, exclusive destinations, and inspiring travel stories with us.
        </p>
      </div>
    </div>
  );
};

export default Herosection;
