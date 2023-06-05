// src/pages/Navbar.js

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

      <div className='main-content'>
        <div className='main-content-inner'>        
          <h1>Welcome to myPortfolio page</h1>
          <p>This is the home page of my portfolio website.</p>
        </div>
      </div>

    </div>
  );
}

export default Home;

