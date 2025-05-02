import React from 'react';
import Dashboard from './Components/Dashboard';
import About from './Components/About';
import Certificates from './Components/Certificates';
import Experience from './Components/Experience';
import Projects from './Components/Projects';
import Interests from './Components/Interests';
import Contact from './Components/Contact';
import Home from './Components/Home';

const App = () => {
  return (
      <div className='bg-black'>
        <Dashboard />
        <Home />
        <About />
        <Certificates />
        <Experience />
        <Projects />
        <Interests />
        <Contact />
      </div>
  );
}

export default App;
