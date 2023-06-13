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


/* Firebase Cloud import */
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCY53HaQgGfArDqOCcQpdhRsVDCtYx9k7U",
  authDomain: "reactportfolio-10359.firebaseapp.com",
  projectId: "reactportfolio-10359",
  storageBucket: "reactportfolio-10359.appspot.com",
  messagingSenderId: "152571041230",
  appId: "1:152571041230:web:99b67ad30102a3d698c79f",
  measurementId: "G-K2RTTKFKG2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
/*****************************************************************/


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

        <div id='About' className='about-section page'>
          <AboutMe />
        </div>

        <div id='Resume' className='resume-section page'>
          <Resume />
        </div>

        <div id='Projects' className='projects-section page'>
          <Projects />
        </div>

        <div id='Contact' className='contact-section page'>
          <Contact />
        </div>

      </div>
    </div>
  );
}

export default App;

