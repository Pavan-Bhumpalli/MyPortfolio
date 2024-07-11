import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
    <Router>
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
    </Router>
  );
}

export default App;
