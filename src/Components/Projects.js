import React from 'react';
import Vrikshayan from '../pictures/VRIKSHAYAN.jpg';
import portfolio from '../pictures/portfolio.png';

const data = [
    {
        "image": Vrikshayan,
        "name": "VRIKSHAYAN - BILLING SYSTEM",
        "description1": "Vrikshayan is an administrative web app for an offline farm, simplifying visitor activity logging, billing, and customer data management.",
        "description2":"Developed using React.js and Tailwind CSS for the frontend, Express.js and Node.js for the backend, and MongoDB for the database, it ensures a smooth and efficient experience for both administrators and visitors.",
        "url": "https://github.com/Pavan-Bhumpalli/Vrikshayan-billing"
    },
    {
        "image": portfolio,
        "name": "PORTFOLIO WEBSITE",
        "description1": "Built with React and Tailwind CSS, this responsive web application showcases my skills and projects.",
        "description2":"It features a clean, modern design with Aqua color accents and transparent backgrounds, reflecting my attention to detail in UI/UX design and frontend development",
        "url": "https://github.com/Pavan-Bhumpalli/MyPortfolio"
    }
]

const Projects = () => {
  return (
    <div className="bg-black text-gray-100 p-4 " id="projects">
      <div className='flex justify-center items-center mb-8'>
        <h1 className="text-3xl font-bold">
          <span style={{ textDecoration: "none", borderBottom: "3px solid aqua", borderRadius: "2px" }}>PROJECTS</span>
        </h1>
      </div>
      <div className="flex md:flex-row flex-col gap-8">
        {data.map((project, index) => (
          <Project key={index} image={project.image} name={project.name} description1={project.description1} description2={project.description2} url={project.url} />
        ))}
      </div>
    </div>
  )
}

const Project = ({ image, name, description1,description2, url }) => {
    return (
        <div className="p-4 bg-[#484747] rounded-lg shadow-lg md:w-[48%] w-full mb-4 flex md:flex-row flex-col">
          <div className='w-full h-full'>
            <center><img src={image} alt={name} className="object-cover w-full md:h-full h-[200px] rounded-lg" /></center>
          </div>
          <div className='flex flex-col ml-4 w-[100%]'>
            <h2 className="text-xl font-semibold text-[#00FFFF] p-2">{name}</h2>
            <p className="text-gray-300 mb-4 pl-2 ">{description1}</p>
            <p className="text-gray-300 mb-4 pl-2 ">{description2}</p>
            <button className="px-4 py-2 text-black rounded-xl bg-[#00FFFF] ml-2 w-1/2">
              <a href={url} target="_blank" rel="noopener noreferrer">View Code</a>
            </button>
          </div>
        </div>
    );
}

export default Projects
