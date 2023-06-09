// src/pages/Home.js

import React, { useState } from 'react';

import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

import '../styles.css';

function Home() {

  return (
    <div>
      <div className='home-top-container'>
        <div className='home-top-phone-email'>
          <div className='phone'>+1 (123)-456-7890</div>
          <div className='email'>ale@opgi.com</div>
        </div>

        
        <div className='home-top-languague'>
          <p>EN | VIE | SPAN </p>
        </div>

      </div>

      <div className='main-content home-main-content'>
        <div className='main-content-inner'>

          <h6>Hello there! I'm </h6>
          <h1 className='font-alt'>Anh Le</h1>
          <h4>Web Developer</h4>
          <p className='home-desc'>I'm a passionate web developer with a focus on creating captivating user experiences. I specialize in front-end/back-end development and love turning ideas into stunning and functional websites. Take a look at my work and feel free to get in touch with me.</p>
          <a href='../assets/AnhLe_Resume_2023.pdf' download className='cta-button'>
            Download CV <i className="fas fa-download"></i>
          </a>

        </div>
      </div>

    </div>
  );
}

export default Home;

