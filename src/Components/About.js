import React from 'react';
import image from '../pictures/pavan1.jpg';
import java from '../pictures/java.png';
import html from '../pictures/html.png';
import css from '../pictures/css.png';
import node from '../pictures/node.png';
import react from '../pictures/react.png';
import mongodb from '../pictures/mongodb.png';
import express from '../pictures/express.png';
import tailwind from '../pictures/tailwind.png';
import github from '../pictures/github.png';
import Timeline from './Timeline';
import '../App.css';


const About = () => {
  return (
    <div id='about' className="bg-black  flex justify-center items-center flex-wrap gap-4 px-4 pt-0 mt-0">
      {/* Card 1: Image */}
      <div className=" rounded overflow-hidden shadow-lg h-[400px] w-[280px]">
        <img className="w-full" src={image} alt="pavan" />
      </div>

      {/* Card 2: Information */}
      <div className="ml-4 md:w-[70%] w-full">
        <div className=" rounded-xl overflow-hidden shadow-lg bg-[#484747] p-4 ">
          <center><h1 className="text-3xl text-gray-100 font-bold mb-2" ><span style={{ borderBottom: "3px solid aqua",borderRadius: "2px" }}>ABOUT ME</span></h1></center>
          <p className='text-lg text-gray-100 p-4'>I am <span className='font-semibold'>Bhumpalli Pavan Tirupathi Reddy</span> from Guntur. I am studying Computer Science at Gayatri Vidya Parishad College of Engineering in Visakhapatnam. I love Designing and solving problems. Outside of academics, I enjoy cooking, listening to music, and gardening.</p>
          <div className='flex justify-center items-center'>
            <h1 className="text-3xl text-gray-100 font-bold mb-2"><span style={{ borderBottom: "3px solid aqua",borderRadius: "2px" }}>SKILLS</span></h1>
          </div>
          {/* Skill Icons */}
          <div className="flex flex-wrap items-center">
            <SkillIcon src={java} name="JAVA" />
            <SkillIcon src={html} name="HTML" />
            <SkillIcon src={css} name="CSS" />
            <SkillIcon src={node} name="NODE JS" />
            <SkillIcon src={react} name="REACT JS" />
            <SkillIcon src={mongodb} name="MONGODB" />
            <SkillIcon src={express} name="EXPRESS JS" />
            <SkillIcon src={tailwind} name="TAILWIND CSS" />
            <SkillIcon src={github} name="GITHUB" />
          </div>
        </div>
      </div>
      <Timeline />
    </div>
  );
}

// Skill Icon Component
const SkillIcon = ({ src, name }) => (
  <div className="lg:w-1/6 p-2 w-1/2">
    <center><img className="w-16 h-16 rounded-full bg-aqua-200" src={src} alt={name} />
    <span className="block text-center mt-2 text-[#00FFFF]">{name}</span></center>
  </div>
);

export default About;
