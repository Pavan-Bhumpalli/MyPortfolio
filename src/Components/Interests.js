import React, { useState, useEffect } from 'react';
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import c1 from '../pictures/c1.jpg';
import c2 from '../pictures/c2.jpg';
import c3 from '../pictures/c3.jpg';
import c4 from '../pictures/c4.jpg';
import c5 from '../pictures/c5.jpg';
import c6 from '../pictures/c6.jpg';
import c7 from '../pictures/bg-lg.png';
import c8 from '../pictures/c8.jpg';
import c9 from '../pictures/c9.jpg';
import c10 from '../pictures/c10.jpg';
import c11 from '../pictures/c11.jpg';
import c12 from '../pictures/c12.jpg';
import c13 from '../pictures/c13.jpg';
import { FaHeart } from "react-icons/fa";

const Interests = () => {
  const data = [c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11, c12, c13];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextClick();
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex]);

  return (
    <div className=" bg-black text-gray-100 p-8 " id="interests">
      <div className='flex justify-center items-center mb-8'>
        <h1 className="text-3xl font-bold flex items-center">
          <FaHeart className='text-[#00FFFF]'/>
          <span style={{ textDecoration: "none", borderBottom: "3px solid aqua", borderRadius: "2px" }}>INTERESTS</span>
          <FaHeart className='text-[#00FFFF]'/>
        </h1>
      </div>
      <div className='flex md:flex-row flex-col h-full  '>
        <div className=" w-full max-w-lg mx-auto flex items-center">
          <button className=" top-1/2 left-4 transform -translate-y-1/2 text-3xl text-white" onClick={handlePrevClick}>
            <FaChevronLeft />
          </button>
          <div className=" w-full md:h-64 h-22 overflow-hidden">
            <img
              src={data[currentIndex]}
              alt={`Slide ${currentIndex}`}
              className=" top-0 left-0  w-full h-full object-cover transition-transform duration-500 ease-in-out"
            />
          </div>
          <button className=" top-1/2 right-4 transform -translate-y-1/2 text-3xl text-white"onClick={handleNextClick}>
            <FaChevronRight />
          </button>
        </div>
        <div className='md:w-1/2 text-start'>
          <p className=" text-lg mt-4">I love creating cute, small things that make my heart happy in traditional ways. The process brings me more joy than the outcome. I enjoy <b className='text-[#00FFFF]'>Designing</b> and often spend my free time using tools like Blender and Canva to create images, logos, and wallpapers that <b className='text-[#00FFFF]'>reflect my interests</b>. I also enjoy <b className='text-[#00FFFF]'>DIY</b> projects, making items like paper carts and vases from paper and waste, and I've started saving flowers for <b className='text-[#00FFFF]'>printed flower art</b>. Cooking for my family is something I love, and I'm passionate about <b className='text-[#00FFFF]'>gardening and plants</b>.</p>
        </div>
      </div>
    </div>
  );
};

export default Interests;
