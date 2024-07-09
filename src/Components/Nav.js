import {React,useState} from 'react';
import {NavLink} from 'react-router-dom';
import { IoMdMenu } from "react-icons/io";
import '../App.css';

const Nav = () => {
  const [isopen, setisopen] = useState(false);
  const open = () => {
    setisopen(!isopen);
  }
  return (
    <div className='text-white p-4 w-[55%]'>
      <div className='hidden lg:flex items-center justify-between w-full'>
      <NavLink to='#about' className='nav-link'>About Me</NavLink>
      <NavLink to='#certificates'className='nav-link'>Certificates</NavLink>
      <NavLink to='#experience'className='nav-link'>Experience</NavLink>
      <NavLink to='#projects'className='nav-link'>Projects</NavLink>
      <NavLink to='#interests'className='nav-link'>Interests</NavLink>
      <NavLink to='#contact'className='nav-link'>Contact</NavLink>
      </div>
      <div className='lg:hidden flex flex-row-reverse'>
      <button onClick={open} >{isopen?'X':<IoMdMenu className='w-7 h-7'/>}</button>
      </div>

      {isopen && (
        <div className='lg:hidden fixed right-0 top-0 h-full bg-black z-50 flex flex-col items-center justify-between p-4 w-1/3 shadow-lg'>
          <button onClick={open} className='self-end text-white mb-4'>X</button>
          <NavLink to='#about' className='p-2 text-white w-full'><span className='nav-link'>About Me</span></NavLink>
          <NavLink to='#certificates' className='p-2 text-white w-full'><span className='nav-link'>Certificates</span></NavLink>
          <NavLink to='#experience' className='p-2 text-white w-full'><span className='nav-link'>Experience</span></NavLink>
          <NavLink to='#projects' className='p-2 text-white w-full'><span className='nav-link'>Projects</span></NavLink>
          <NavLink to='#interests' className='p-2 text-white w-full'><span className='nav-link'>Interests</span></NavLink>
          <NavLink to='#contact' className='p-2 text-white w-full'><span className='nav-link'>Contact</span></NavLink>
        </div>
      )}

    </div>
  )
}

export default Nav
