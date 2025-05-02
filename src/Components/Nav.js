import React, { useState } from 'react';
import { IoMdMenu } from "react-icons/io";
import '../App.css';

const Nav = () => {
  const [isopen, setisopen] = useState(false);
  const open = () => {
    setisopen(!isopen);
  };

  const handleScroll = (event, id) => {
    event.preventDefault();
    const element = document.getElementById(id);
    const offset = 80; // Adjust this value according to your navbar height
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = element.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });

    if (isopen) {
      setisopen(false); // Close the menu if it's open
    }
  };

  return (
    <div className='text-white p-4 w-[55%]'>
      <div className='hidden lg:flex items-center justify-between w-full'>
        <a href='#about' onClick={(e) => handleScroll(e, 'about')} className='nav-link'>About Me</a>
        <a href='#certificates' onClick={(e) => handleScroll(e, 'certificates')} className='nav-link'>Certificates</a>
        <a href='#experience' onClick={(e) => handleScroll(e, 'experience')} className='nav-link'>Experience</a>
        <a href='#projects' onClick={(e) => handleScroll(e, 'projects')} className='nav-link'>Projects</a>
        <a href='#interests' onClick={(e) => handleScroll(e, 'interests')} className='nav-link'>Interests</a>
        <a href='#contact' onClick={(e) => handleScroll(e, 'contact')} className='nav-link'>Contact</a>
      </div>
      <div className='lg:hidden flex flex-row-reverse'>
        <button onClick={open}>{!isopen && <IoMdMenu className='w-7 h-7' />}</button>
      </div>

      {isopen && (
        <div className='lg:hidden fixed right-0 top-0 h-full bg-black z-50 flex flex-col items-center justify-between p-4 w-1/2 shadow-lg'>
          <button onClick={open} className='self-end text-white mb-4'>X</button>
          <a href='#about' onClick={(e) => handleScroll(e, 'about')} className='p-2 text-white w-full'><span className='nav-link'>About Me</span></a>
          <a href='#certificates' onClick={(e) => handleScroll(e, 'certificates')} className='p-2 text-white w-full'><span className='nav-link'>Certificates</span></a>
          <a href='#experience' onClick={(e) => handleScroll(e, 'experience')} className='p-2 text-white w-full'><span className='nav-link'>Experience</span></a>
          <a href='#projects' onClick={(e) => handleScroll(e, 'projects')} className='p-2 text-white w-full'><span className='nav-link'>Projects</span></a>
          <a href='#interests' onClick={(e) => handleScroll(e, 'interests')} className='p-2 text-white w-full'><span className='nav-link'>Interests</span></a>
          <a href='#contact' onClick={(e) => handleScroll(e, 'contact')} className='p-2 text-white w-full'><span className='nav-link'>Contact</span></a>
        </div>
      )}
    </div>
  );
};

export default Nav;
