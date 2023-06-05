import './styles.css';

import React from 'react';
import Header from './components/Header.js';
import Navbar from './components/Navbar.js';
import AboutMe from './pages/About.js';
import Home from './pages/Home.js';
import Resume from './pages/Resume.js';
import Projects from './pages/Projects.js';
import Contact from './pages/Contact.js';


function App() {
  return (
    <div className='App-home'>
      <div className='navbar-container'>
        <Navbar />
      </div>

      <div className='content'>
        <div id='Home' className='page home-section'>
          <Home />
        </div>

        <div id='About' className='page about-section'>
          <AboutMe />
        </div>

        <div id='Resume' className='page resume-section'>
          <Resume />
        </div>

        <div id='Projects' className='page projects-section'>
          <Projects />
        </div>

        <div id='Contact' className='page contact-section'>
          <Contact />
        </div>

      </div>
    </div>
  );
}

export default App;

