// src/pages/About.js

import React, { useState } from 'react';

import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import '../styles.css';

import Logo2 from '../assets/avatar.PNG';

import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBRow, MDBCol } from 'mdb-react-ui-kit';


function AboutMe2() {

  return (
    <div className='main-content'>
      <div className='main-content-inner'>    
        <h4 className='section-title'>Experience</h4>

          <div className='about-container-3'>
            <div className='row align-items-center about-row'>
              <div className='col-md-4 col-xl-3'>
                <h6>Sr. Front-end Engineer 1</h6>
                <label>Google | Remote</label>
                <p>Feb 2021 - Present</p>
              </div>

              <div className='col-md-8 col-xl-9'>
                <h6>Google LLC 1</h6>
                <p>Adipisicing Lorem ipsum dolor sit amet, consectetur elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor.</p>
              </div>
            </div>

            <div className='row align-items-center about-row'>
              <div className='col-md-4 col-xl-3'>
                <h6>Sr. Front-end Engineer 2</h6>
                <label>Google | Remote</label>
                <p>Feb 2021 - Present</p>
              </div>

              <div className='col-md-8 col-xl-9'>
                <h6>Google LLC 2</h6>
                <p>Adipisicing Lorem ipsum dolor sit amet, consectetur elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor.</p>
              </div>
            </div>

            <div className='row align-items-center about-row'>
              <div className='col-md-4 col-xl-3'>
                <h6>Sr. Front-end Engineer 3</h6>
                <label>Google | Remote</label>
                <p>Feb 2021 - Present</p>
              </div>

              <div className='col-md-8 col-xl-9'>
                <h6>Google LLC 3</h6>
                <p>Adipisicing Lorem ipsum dolor sit amet, consectetur elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor.</p>
              </div>
            </div>

            
          </div>

      </div>
    </div>
  );
}

export default AboutMe2;

