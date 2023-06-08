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
<<<<<<< HEAD
        <div className='scroll-container'>
        <section id='Home' className='page home-section section'>
=======
        <div id='Home' className='page home-section'>
>>>>>>> parent of 5ce6d0e (changed divs into section)
          <Home />
        </div>

<<<<<<< HEAD
        <section id='About' className='about-section section'>
=======
        <div id='About' className='about-section page-taller'>
>>>>>>> parent of 5ce6d0e (changed divs into section)
          <AboutMe />
        </div>

<<<<<<< HEAD
        <section id='Resume' className='resume-section section'>
          <AboutMe2 />
          <Resume />
          <AboutMe2 />
        </section>

        <section id='Projects' className='projects-section section'>
=======
        <div id='Resume' className='resume-section'>
          <Resume />
        </div>

        <div id='Projects' className='projects-section'>
>>>>>>> parent of 5ce6d0e (changed divs into section)
          <Projects />
        </div>

<<<<<<< HEAD
        <section id='Contact' className='contact-section section'>
          <Contact />
        </section>
=======
        <div id='Contact' className='contact-section'>
          <Contact />
>>>>>>> parent of 5ce6d0e (changed divs into section)
        </div>

      </div>
    </div>
  );
}

export default App;

