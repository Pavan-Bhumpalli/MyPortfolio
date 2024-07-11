import React from 'react';
import maguva from '../pictures/KeshavSoft.png';

const Experience = () => {
  return (
    <div className=" bg-black text-gray-100 p-4 " id="experience" >
      <div className='flex justify-center items-center mb-8'>
        <h1 className="text-3xl font-bold">
          <span style={{ textDecoration: "none", borderBottom: "3px solid aqua", borderRadius: "2px" }}>EXPERIENCE</span>
        </h1>
      </div>
      <div className='flex items-center justify-center'>
        <div className="bg-[#484747] p-6 rounded-lg shadow-lg flex flex-col md:flex-row items-center md:items-start gap-6 md:w-[80%] ">
            <img src={maguva} alt="KeshavSoft" className="lg:w-1/4 h-[150px] w-[300px] lg:h-full rounded-lg" />
            <div className="flex flex-col  items-start  md:text-left">
                <p className="lg:text-2xl text-xl font-bold mb-2 text-[#00FFFF]">KESHAV SOFT</p>
                <p className="text-lg mb-2"><b>INTERN</b>: SOFTWARE DEVELOPER</p>
                <p className="text-md mb-2"><b>PROJECT</b>: MAGUVA</p>
                <p className="text-md mb-2"><b>DURATION</b>: 2 Months</p>
                <p className="text-md mb-2"><b>TECHNOLOGIES</b>: HTML, CSS, EXPRESS JS</p>
                <p className="md:text-md md:mb-4 hidden md:block "><b>DESCRIPTION</b>: Developed Maguva, a Cloth Store web application to manage client's business. The application was developed using the HTML, CSS, BootStrap, Express JS, Node JS and Flat JSON files.</p>
                <button className="px-4 py-2 bg-[#00FFFF] text-black rounded-lg hover:bg-aqua-500 transition duration-300">
                    <a href="https://drive.google.com/file/d/1VwDCaGxer8gw85wAK5FPx7jRVPz4Kr8Q/view?usp=drive_link" target="_blank" rel="noopener noreferrer">View Certificate</a>
                </button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Experience;
