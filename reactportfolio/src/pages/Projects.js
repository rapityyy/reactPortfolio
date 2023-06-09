// src/pages/Projects.js

import React, { useState } from 'react';

import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

import '../styles.css';


function Projects() {

  return (
    <div className='page main-content'>
      <div className='main-content-inner'>     
        
        <div className='title'><h3 className='title'>My Portfolio</h3></div>
        <div className='project-container'>
          <div className='tab-container'>
            <ul className='project-tabs row'>
              <li>All</li>
              <li>Apps</li>
              <li>Websites</li>
              <li>Others</li>
            </ul>
            <div className='projects-content'></div>
          </div>
        </div>

        <div></div>

      </div>
    </div>
  );
}

export default Projects;

