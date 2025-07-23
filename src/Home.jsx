
import React from 'react';
import Testimonials from './Testimonials';
import Footer from './Footer';
import Herosection from './Herosection';
import Populartrip from './Populartrip';
import Category from './Catogory';




const Home = () => {
  return (
    <>
   <Herosection/>
    
    <Populartrip/>
    <Category/>
   <Testimonials/>
   <Footer/>
    </>
  );
};

export default Home;
