import React, { useEffect, useState } from 'react';
import image from '../pictures/background-lg2.png';
import smimage from '../pictures/bptr3.png';

const Home = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div id='home'>
      <div className="h-screen bg-contain bg-no-repeat bg-center sm:pl-[5%] lg:pt-[5%] flex sm:items-center  items-start text-center sm:text-start" style={{backgroundImage: isLargeScreen ? `url(${image})` : `url(${smimage})`}}>
        <div className='text-white text-6xl font-semibold h-[70%]'>
          Hi,<br />I am <span className='text-[#00FFFF]'>Pavan</span> Bhumpalli
        </div>
      </div>
  </div>
  );
}

export default Home;
