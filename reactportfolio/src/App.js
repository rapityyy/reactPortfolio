import './styles.css';

import React from 'react';
import Header from './components/Header.js';
import Navbar from './components/Navbar.js';
import AboutMe from './pages/About.js';
import AboutMe2 from './pages/About-page2.js';

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
        <section id='Home' className='page home-section'>
          <Home />
        </section>

        <section id='About' className='about-section page-taller'>
          <AboutMe />
        </section>

        <section id='Resume' className='resume-section'>
          <Resume />
        </section>

        <section id='Projects' className='projects-section'>
          <Projects />
        </section>

        <section id='Contact' className='contact-section'>
          <Contact />
        </section>

      </div>
    </div>
  );
}

export default App;

