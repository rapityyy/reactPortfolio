// src/pages/Resume.js

import React, { useState } from 'react';

import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

import '../styles.css';


function Resume() {

  return (
    <div className='main-content'>
      <div className='main-content-inner'>    

          <div className='experience-container'>
            <h3 className='title'>Experience</h3>

            <div className='resume-box-1'>
              <div className='row'>
                <div className='col-md-4 col-xl-3'>
                  <div className='rb-left'>                
                    <h6>Sr. Front-end Engineer 1</h6>
                    <label>Google | Remote</label>
                    <p>Feb 2021 - Present</p>
                  </div>
                </div>
                <div className='col-md-8 col-xl-9'>
                  <div className='rb-right'>   
                    <h6>Google LLC 1</h6>
                    <p>Adipisicing Lorem ipsum dolor sit amet, consectetur elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className='resume-box-1'>
              <div className='row'>
                <div className='col-md-4 col-xl-3'>
                  <div className='rb-left'>                
                    <h6>Sr. Front-end Engineer 2</h6>
                    <label>Google | Remote</label>
                    <p>Feb 2021 - Present</p>
                  </div>
                </div>
                <div className='col-md-8 col-xl-9'>
                  <div className='rb-right'>   
                    <h6>Google LLC 2</h6>
                    <p>Adipisicing Lorem ipsum dolor sit amet, consectetur elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>  {/* End of Resume Container*/}

          <div className='education-container'>
            <h3 className='title'>Education & Skills</h3>

            <div className='row'>
              <div className='col-lg-4 m-15px-tb aos-init aos-animate'>
                <ul className='education-box'>
                  <li>
                    <span>2018-2020</span>
                    <h6>Ph.D in Horriblensess </h6>
                    <p>University Of Evil Doing</p>
                  </li>
                  <li>
                    <span>2013-2016</span>
                    <h6>Bsc. in Computer Science </h6>
                    <p>World University</p>
                  </li>
                  <li>
                    <span>2010-2012</span>
                    <h6>Graphic Artist Training  </h6>
                    <p>Graphic Master Institute</p>
                  </li>
                </ul>
              </div>

              <div className='col-lg-7 ml-auto m-15px-tb aos-init aos-animate'>
                <div className='skill-box'>
                  <div>
                    <h6>HTML5</h6>
                    <span><span>92</span>%</span>
                    <div class="skill-bar"><div class="skill-bar-in"></div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

      </div>
    </div>
  );
}

export default Resume;

