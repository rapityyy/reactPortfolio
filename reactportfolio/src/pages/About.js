// src/pages/About.js

import React, { useState } from 'react';

import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import '../styles.css';

import Logo2 from '../assets/avatar.PNG';

import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBRow, MDBCol } from 'mdb-react-ui-kit';

import AboutMe2 from './About-page2.js';



function AboutMe() {

  return (
    // <div className='page main-content'>
    <div className='main-content'>
      <div className='main-content-inner'>    

          <div className='about-container'>

            <div className='about-left'>
              <h2 className='title'>Biography</h2>
              <p> I'm a Freelance Front-end and Back-end Developer based in Westminster, California, with 1-2 years of experience. </p>
              <p>Passionate about crafting exceptional web experiences, I collaborate with clients from diverse backgrounds, delivering tailored coding solutions that exceed expectations.</p>
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
              <div className='about-img'>
                <div className='about-pic'><img  src={Logo2} alt='Avatar'></img></div>
                
                <div className='about-nav social-media justify-content-center'>
                  <a href='https://www.facebook.com/' className='social-icons'>
                    <i className='fab fa-facebook'></i>
                  </a>
                  <a href='#'>
                    <i className='fab fa-twitter'></i>
                  </a>
                  <a href='#' className='social-icons'>
                    <i className='fab fa-instagram'></i>
                  </a>
                </div>
              </div>
              <p>Front/Back-end Designer</p>
              <h3>Anh Le</h3>
            </div>
          </div>

        <div className='about-container-2'>
          <div className='title'><h3 className='title'>What I do?</h3></div>

          <div className='row'>

            <div className='col-md-6 col-lg-4 my-3 aos-init aos-animate'>
              
              <div className='feature-box-1'>
                <div className='feature-icon'><i class="fa-solid fa-mobile-screen-button"></i></div>
                <div className='feature-content'>
                  <h5>Web Design</h5>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
              </div>
            </div>
            
            <div className='col-md-6 col-lg-4 my-3 aos-init aos-animate'>
              <div className='feature-box-1'>
                <div className='feature-icon'><i class="fa-solid fa-laptop-code"></i></div>
                <div className='feature-content'>
                  <h5>Web Development</h5>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
              </div>
            </div>

            <div className='col-md-6 col-lg-4 my-3 aos-init aos-animate'>
              <div className='feature-box-1'>
                <div className='feature-icon'><i class="fa-solid fa-bullseye"></i></div>
                  <div className='feature-content'>
                    <h5>SEO Marketing</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  </div>
              </div>
            </div>

          </div>

        </div>
          
      </div>
    </div>
  );
}

export default AboutMe;

