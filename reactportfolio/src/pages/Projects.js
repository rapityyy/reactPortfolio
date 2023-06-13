// src/pages/Projects.js

import React, { useState } from 'react';

import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

import '../styles.css';


import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Masonry from 'react-masonry-css';

import spotifyImage from '../assets/spotify.PNG';
import tttImage from '../assets/ttt.PNG';
import pokemonImage from '../assets/pokemon.PNG';





function Projects() {

  const projects = [
    { id: 1, title: 'Project 1', image: pokemonImage },
    { id: 2, title: 'Project 2', image: spotifyImage },
    { id: 3, title: 'Project 3', image: tttImage, category: 'Apps' },
    // Add more projects as needed
  ];

  const breakpointColumnsObj = {
    default: 2,
    1200: 1,
    768: 1
  };

  return (
    <div className='page main-content'>
      <div className='main-content-inner'>     
        
        <div className='title'><h3 className='title'>My Portfolio</h3></div>
        <div className='project-container'>
          <div className='tab-container'>


            <Tabs className='project-tabs row'>
              <TabList>
                <Tab>All</Tab>
                <Tab>Apps</Tab>
                <Tab>Websites</Tab>
                <Tab>Others</Tab>
              </TabList>

              <TabPanel>
                {projects.length === 0 ? (
                  <p>No projects to display</p>
                ) : (
                  <Masonry
                    breakpointCols={3}
                    className='my-masonry-grid'
                    columnClassName='my-masonry-grid-column'
                  >
                    {projects.map((project) => (
                    <div key={project.id} className='grid-item'>
                      <div className='portfolio-top'>
                        <h3 className='portfolio-title'>{project.title}</h3>
                        <i class="portfolio-icon fa-solid fa-link"></i>
                      </div>
                      <img className='portfolio-img' src={project.image} alt={project.title} />
                    </div>
                  ))}
                  </Masonry>
                )}
              </TabPanel>

              <TabPanel>
                {projects.filter((project) => project.category === 'Apps').length === 0 ? (
                  <p>No apps to display</p>
                ) : (
                  <Masonry
                    breakpointCols={3}
                    className='my-masonry-grid'
                    columnClassName='my-masonry-grid-column'
                  >
                    {projects
                      .filter((project) => project.category === 'Apps')
                      .map((project) => (
                        <div key={project.id} className='grid-item'>
                          <div className='portfolio-top'>
                            <h3 className='portfolio-title'>{project.title}</h3>
                            <i className='portfolio-icon fa-solid fa-link'></i>
                          </div>
                          <img className='portfolio-img' src={project.image} alt={project.title} />
                        </div>
                      ))}
                  </Masonry>
                )}
              </TabPanel>


              {/* Add more TabPanel sections for other categories if needed */}

            </Tabs>

          </div>
        </div>

        <div></div>

      </div>
    </div>
  );
}

export default Projects;

