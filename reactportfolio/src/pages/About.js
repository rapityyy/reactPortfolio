// src/pages/About.js

import React, { useState } from 'react';

import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import '../styles.css';

import Logo2 from '../assets/avatar.PNG';

import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBRow, MDBCol } from 'mdb-react-ui-kit';

import AboutMe2 from './About-page2.js';
import AboutMeComp from '../components/about-container-2.js';





function AboutMe() {

  return (
    // <div className='page main-content'>
    <span className='main-content'>
      <div className='main-content-inner'>    

          <div className='about-container'>

            <div className='about-left'>
              <h2>Biography</h2>
              <p> I'm a Freelance Front-end and Back-end Developer based in Westminster, California, with 1-2 years of experience. Passionate about crafting exceptional web experiences, I collaborate with clients from diverse backgrounds, delivering tailored coding solutions that exceed expectations.</p>
              {/* <p> With a focus on front-end development and strong back-end skills, I thrive on bringing clients' web development ideas to life, providing comprehensive solutions that enhance user experiences. Let's embark on a collaborative journey to create remarkable online experiences together.</p> */}
              <div className='about-info'>
                <ul className='info-column'>
                  <li>
                    <label>Name: </label>
                    <span> Anh Le</span>
                  </li>
                  <li>
                    <label>Birthday: </label>
                    <span> June 6, 1996</span>
                  </li>
                  <li>
                    <label>Age: </label>
                    <span> 26</span>
                  </li>
                </ul>
                <ul className='info-column'>
                  <li>
                    <label>Phone: </label>
                    <span> +1 (123) 456-7890</span>
                  </li>
                  <li>
                    <label>Email: </label>
                    <span> ale@opgi.com</span>
                  </li>
                  <li>
                    <label>Location: </label>
                    <span> Westminster, California</span>
                  </li>
                </ul>
              </div>
            
            <div>

            </div>
            
            </div>

            <div className='about-right'>
              <img className='about-pic' src={Logo2} alt='Avatar'></img>
              <p>Front/Back-end Designer</p>
              <h3>Anh Le</h3>
              <div className='social-media'>
                <a href='#'>
                  <i className='fab fa-facebook'></i>
                </a>
                <a href='#'>
                  <i className='fab fa-twitter'></i>
                </a>
                <a href='#'>
                  <i className='fab fa-instagram'></i>
                </a>
              </div>
            </div>
          </div>

          <div className='about-container-2'>
            <MDBRow>
                <MDBCol>
                  <MDBCard className='about-card-box'>
                    <MDBCardBody>
                      <MDBCardTitle>Skills</MDBCardTitle>
                      <MDBCardText>Proficient in HTML, CSS, and JavaScript.</MDBCardText>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
                <MDBCol>
                  <MDBCard className='about-card-box'>
                    <MDBCardBody>
                      <MDBCardTitle>Projects</MDBCardTitle>
                      <MDBCardText>Developed various web applications using React.</MDBCardText>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
                <MDBCol>
                  <MDBCard className='about-card-box'>
                    <MDBCardBody>
                      <MDBCardTitle>Experience</MDBCardTitle>
                      <MDBCardText>Worked as a web developer for 3+ years.</MDBCardText>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              </MDBRow>
          </div>

          {/* <AboutMeComp /> */}

      </div>
    </span>
  );
}

export default AboutMe;

