// src/pages/Resume.js

import React, { useState } from 'react';

import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

import '../styles.css';


function Resume() {

  return (
    <div className='main-content'>
      <div className='main-content-inner'>    
        <h4 className='resume-title'>Experience</h4>

          <div className='resume-container-1'>
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

          <h4 className='resume-title'>Education & Skills</h4>
          <div className='resume-container-2'>
            <div className='row align-items-center about-row'>
                <div className='col-md-4 col-xl-3'>
                  <p>Feb 2021 - Present</p>
                  <h6>Ph.D in Horriblensess</h6>
                  <label>University Of Evil Doing</label>
                </div>

                <div className='col-md-4 col-xl-3'>
                  <p>2013-2016</p>
                  <h6>Bsc. in Computer Science</h6>
                  <label>World University</label>
                </div>

                <div className='col-md-4 col-xl-3'>
                  <p>2010-2012</p>
                  <h6>Graphic Artist Training</h6>
                  <label>Graphic Master Institute</label>
                </div>

              </div>
          </div>

      </div>
    </div>
  );
}

export default Resume;

