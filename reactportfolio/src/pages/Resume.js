// src/pages/Resume.js

import React, { useState } from 'react';

import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

import '../styles.css';

import ProgressBar from "@ramonak/react-progress-bar";



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
                    <h6>IT & Application/Web Analyst</h6><h6> & Junior Developer</h6>
                    <label>Original Parts Group, Inc</label>
                    <p>May 2022 - Present</p>
                  </div>
                </div>
                <div className='col-md-8 col-xl-9'>
                  <div className='rb-right'>   
                    <li>Provided technical support, addressing desktop, application, and web issues while minimizing downtime.</li>
                    <li>Collaborated with IT and Web Developer teams to resolve complex hardware and software problems, deploy updates, and maintain web applications for optimal performance.</li>
                    <li>Assisted in database design and optimization, ensuring efficient data retrieval and storage for improved application performance.</li>
                    <li>Utilized programming languages, such as HTML, CSS, JavaScript, and Python, to create intuitive and responsive user interfaces.</li>
                    <li>Conducted thorough testing and validation of integrated systems, ensuring functionality and data integrity.</li>
                  </div>
                </div>
              </div>
            </div>

            <div className='resume-box-1'>
              <div className='row'>
                <div className='col-md-4 col-xl-3'>
                  <div className='rb-left'>                
                    <h6>System Administrator Intern</h6>
                    <label>Groupo SMS Data Center</label>
                    <p>September 2018 - June 2019</p>
                  </div>
                </div>
                <div className='col-md-8 col-xl-9'>
                  <div className='rb-right'>   
                    <li>Actively monitored system performance, identified and addressed potential bottlenecks or vulnerabilities, and implemented appropriate solutions.</li>
                    <li>Responded to help desk tickets promptly, efficiently diagnosing and troubleshooting software installations, network connectivity problems, and hardware failures.</li>
                    <li>Played an active role in documenting and improving processes, contributing to the effectiveness and efficiency of the system administration team.</li>
                  </div>
                </div>
              </div>
            </div>

            <div className='resume-box-1'>
              <div className='row'>
                <div className='col-md-4 col-xl-3'>
                  <div className='rb-left'>                
                    <h6>Gears2Robots</h6>
                    <label>Groupo SMS Data Center</label>
                    <p>June 2014 - July 2016</p>
                  </div>
                </div>
                <div className='col-md-8 col-xl-9'>
                  <div className='rb-right'>   
                    <li>Actively monitored system performance, identified and addressed potential bottlenecks or vulnerabilities, and implemented appropriate solutions.</li>
                    <li>Responded to help desk tickets promptly, efficiently diagnosing and troubleshooting software installations, network connectivity problems, and hardware failures.</li>
                    <li>Played an active role in documenting and improving processes, contributing to the effectiveness and efficiency of the system administration team.</li>
                  </div>
                </div>
              </div>
            </div>

          </div>  {/* End of Resume Container*/}

          <div className='education-container'>
            <h3 className='title'>Education & Skills</h3>

            <div className='row'>
              <div className='col-lg-4 m-15px-tb '>
                <ul className='education-box'>
                  <li>
                    <span>2018-2021</span>
                    <h6>B.S in Computer Science </h6>
                    <p>University of California, Irvine</p>
                    <p>GPA: 3.5</p>
                  </li>
                </ul>
              </div>

              <div className='col-lg-7 ml-auto m-15px-tb'>
                <div className='skill-box'>
                  <div>
                    {/* <span><span>92</span>%</span> */}
                    <ProgressBar completed={95} className="skill-progress-bar s-py" customLabel="Python" bgColor="#FED847"/>
                    <ProgressBar completed={80} className="skill-progress-bar s-java" customLabel="C++/Java" bgColor="#659AD2" />
                    <ProgressBar completed={90} className="skill-progress-bar s-html" customLabel="HTML/CSS/JS" bgColor="#F16529" />
                    <ProgressBar completed={70} className="skill-progress-bar s-sql" customLabel="MySQL" bgColor="#366D9C" />
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

