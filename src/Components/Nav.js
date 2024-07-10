import React, { useState } from 'react';
import { IoMdMenu } from "react-icons/io";
import AnchorLink from 'react-anchor-link-smooth-scroll';
import '../App.css';

const Nav = () => {
  const [isopen, setisopen] = useState(false);
  const open = () => {
    setisopen(!isopen);
  };

  return (
    <div className='text-white p-4 w-[55%]'>
      <div className='hidden lg:flex items-center justify-between w-full'>
        <AnchorLink href='#about' className='nav-link'>About Me</AnchorLink>
        <AnchorLink href='#certificates' className='nav-link'>Certificates</AnchorLink>
        <AnchorLink href='#experience' className='nav-link'>Experience</AnchorLink>
        <AnchorLink href='#projects' className='nav-link'>Projects</AnchorLink>
        <AnchorLink href='#interests' className='nav-link'>Interests</AnchorLink>
        <AnchorLink href='#contact' className='nav-link'>Contact</AnchorLink>
      </div>
      <div className='lg:hidden flex flex-row-reverse'>
        <button onClick={open}>{isopen ? 'X' : <IoMdMenu className='w-7 h-7' />}</button>
      </div>

      {isopen && (
        <div className='lg:hidden fixed right-0 top-0 h-full bg-black z-50 flex flex-col items-center justify-between p-4 w-1/3 shadow-lg'>
          <button onClick={open} className='self-end text-white mb-4'>X</button>
          <AnchorLink href='#about' className='p-2 text-white w-full'><span className='nav-link'>About Me</span></AnchorLink>
          <AnchorLink href='#certificates' className='p-2 text-white w-full'><span className='nav-link'>Certificates</span></AnchorLink>
          <AnchorLink href='#experience' className='p-2 text-white w-full'><span className='nav-link'>Experience</span></AnchorLink>
          <AnchorLink href='#projects' className='p-2 text-white w-full'><span className='nav-link'>Projects</span></AnchorLink>
          <AnchorLink href='#interests' className='p-2 text-white w-full'><span className='nav-link'>Interests</span></AnchorLink>
          <AnchorLink href='#contact' className='p-2 text-white w-full'><span className='nav-link'>Contact</span></AnchorLink>
        </div>
      )}
    </div>
  );
};

export default Nav;
