import React from 'react';
import { LiaJava } from "react-icons/lia";
import { FaReact } from "react-icons/fa";

const data = [
    {
        "icon": <LiaJava  className='w-12 h-12'/>,
        "name": "Programming in Java",
        "description": "won Elite + Silver badge(81%) from NPTEL",
        "url": "https://drive.google.com/file/d/1rOKxCacOotZk3JZ8mwNdcN9VdAe8rQGR/view?usp=sharing"
    },
    {
        "icon": <FaReact  className='w-9 h-9'/>,
        "name": "Full Stack Development in React and Node JS",
        "description": "successfully completed a 10 week course at GeeksForGeeks",
        "url":"https://drive.google.com/file/d/1vn9cyjfXfgWdTbbt3QdThCX1WmM4rv4q/view?usp=sharing"
    }
];

const Certificates = () => {
  return (
    <div className=" bg-black text-gray-100 p-4 " id="certificates">
      <div className='flex  justify-center items-center mb-8'>
        <h1 className="text-3xl font-bold">
          <span style={{ textDecoration: "none", borderBottom: "3px solid aqua", borderRadius: "2px" }}>CERTIFICATIONS</span>
        </h1>
      </div>
      <div className="flex md:flex-row flex-col  gap-8">
        {data.map((certificate, index) => (
          <Certificate key={index} icon={certificate.icon} name={certificate.name} description={certificate.description} url={certificate.url} />
        ))}
      </div>
    </div>
  );
};

const Certificate = ({icon, name, description, url }) => {
  return (
    <div className="p-4 bg-[#484747] rounded-lg shadow-lg md:w-[48%] w-full mb-4">
      <div>{icon}</div>
      <h2 className="text-xl font-semibold  text-[#00FFFF] p-2">{name}</h2>
      <p className="text-gray-300 mb-4 pl-2">{description}</p>
      <button className="px-4 py-2 bg-aqua-600 text-black rounded-xl bg-[#00FFFF] ml-2">
        <a href={url} target="_blank" rel="noopener noreferrer">View Certificate</a>
      </button>
    </div>
  );
};

export default Certificates;
