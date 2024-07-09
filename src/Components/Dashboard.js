import React from 'react';
import Nav from './Nav';
import bptr from '../pictures/bptr.png';
import image from '../pictures/header-bg.png';

const Dashboard = () => {
  return (
    <div className=' flex sticky top-0 justify-between items-center z-20' style={{ backgroundImage: `url(${image})` }}>
      <div>
        <a href='#home' ><img src={bptr} alt='bptr'  /></a>
      </div>
      <Nav />
    </div>
  )
}

export default Dashboard;