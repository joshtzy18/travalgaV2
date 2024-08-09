import React, { useState } from 'react';
import profile from '../assets/images/profile.jpg';
import profile4 from '../assets/images/pic4.jpg';
import profile5 from '../assets/images/pic5.jpg';

import Right from '@mui/icons-material/EastOutlined';
import Left from '@mui/icons-material/KeyboardBackspaceOutlined';
import Dot from '@mui/icons-material/FiberManualRecordOutlined';
import Dotfill from '@mui/icons-material/FiberManualRecord';
import { blue } from '@mui/material/colors';

const Testimonials = () => {
  const testimonialsData = [
    {
      name: 'Edward Newgate',
      position: 'Founder Circle',
      message: '“Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedious form, long calls, or administrative hassle) and securely.”',
      image: profile,
    },
    {
      name: 'Anna Doe',
      position: 'CEO Tech Solutions',
      message: '“A seamless and intuitive platform that has transformed how we engage with our clients.”',
      image: profile4,
    },
    {
      name: 'John Smith',
      position: 'Director of Operations',
      message: '“Efficient and reliable service that integrates perfectly with our workflow.”',
      image: profile5,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <>
      {/* Mobile view version */}
      <div id='testimonials' className="bg-gradient-to-r from-[#67C3F3] to-[#5A98F2] w-full h-auto p-10 flex justify-center flex-col items-center">
        <span className="font-muli text-lg font-bold leading-6 text-white">What our customer are saying</span>
        <hr className="mt-1 mb-2 custom-hr3" />

        <div className="flex flex-col items-center mt-6">
          {/* Profile image here */}
          <img className="h-28 w-28 mb-2 rounded-full border-4 border-solid border-white" src={testimonialsData[currentIndex].image} alt="profile" />

          {/* Name here */}
          <span className="font-muli text-md leading-6 font-bold text-white">{testimonialsData[currentIndex].name}</span>

          {/* Position here */}
          <span className="font-muli text-xs font-normal text-white opacity-70">{testimonialsData[currentIndex].position}</span>

          {/* Message here */}
          <span className="font-muli font-light mt-4 text-center text-white opacity-75">
            {testimonialsData[currentIndex].message}
          </span>
        </div>
      </div>

      {/* Arrow next */}
      <div className="flex flex-row items-center mt-2 p-4 gap-x-3 w-full justify-center">
        <button className="cursor-pointer mr-10" onClick={prevSlide}>
          <Left sx={{ color: blue[500], opacity: 0.5 }} />
        </button>

        {testimonialsData.map((_, index) => (
          <button key={index} className="cursor-pointer" onClick={() => setCurrentIndex(index)}>
            {index === currentIndex ? (
              <Dotfill fontSize="extra-small" sx={{ color: blue[500] }} />
            ) : (
              <Dot fontSize="extra-small" sx={{ color: blue[500] }} />
            )}
          </button>
        ))}

        <button className="cursor-pointer ml-10" onClick={nextSlide}>
          <Right sx={{ color: blue[500] }} />
        </button>
      </div>
      {/* End of mobile view version */}
    </>
  );
};

export default Testimonials;
