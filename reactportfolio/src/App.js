import './styles.css';

import React, { useEffect } from 'react';
import Header from './components/Header.js';
import Navbar from './components/Navbar.js';
import AboutMe from './pages/About.js';
import AboutMe2 from './pages/About-page2.js';

import Home from './pages/Home.js';
import Resume from './pages/Resume.js';
import Projects from './pages/Projects.js';
import Contact from './pages/Contact.js';


function App() {
  useEffect(() => {
    const sections = document.querySelectorAll('.section');
    const content = document.querySelector('.content');

    const totalHeight = Array.from(sections).reduce(
      (total, section) => total + section.clientHeight,
      0
    );

    content.style.height = `${totalHeight}px`;
  }, []);

  return (
    <div className='App-home'>
      <div className='navbar-container'>
        <Navbar />
      </div>

      <div className='content'>
        <div id='Home' className='page home-section'>
          <Home />
        </div>

        <div id='About' className='about-section page-taller'>
          <AboutMe />
        </div>

        <div id='Resume' className='resume-section'>
          <Resume />
        </div>

        <div id='Projects' className='projects-section'>
          <Projects />
        </div>

        <div id='Contact' className='contact-section'>
          <Contact />
        </div>

      </div>
    </div>
  );
}

export default App;

