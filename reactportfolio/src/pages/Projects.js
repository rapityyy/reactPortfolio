// src/pages/Projects.js

import React, { useState } from 'react';

import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

import '../styles.css';


import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Masonry from 'react-masonry-css';

//  TTT
import tttImage from '../assets/ttt/t1.PNG';
//  2048
import twentyImage from '../assets/2048/c1.PNG';
//  SimonGame
import simonImage from '../assets/SimonGame/s1.png';
//  PokemonMatching
import pokemonImage from '../assets/PokemonMatching/p1.png';
//  PocketChef
import chefImage from '../assets/PocketChef/pc1.png';
//  FlappyCat
import catImage from '../assets/FlappyCat/FCtitle.png';






function Projects() {

  const projects = [
    { id: 1, title: 'Project #1 - TicTacToe', image: tttImage, category: 'Apps' },
    { id: 2, title: 'Project #2 - 2048', image: twentyImage, category: 'Websites' },
    { id: 3, title: 'Project #3 - SimonGame', image: simonImage, category: 'Websites' },
    { id: 4, title: 'Project #4 - PokemonMatching', image: pokemonImage, category: 'Websites' },
    { id: 5, title: 'Project #5 - PocketChef', image: chefImage, category: 'Apps' },
    { id: 6, title: 'Project #6 - FlappyCat', image: catImage, category: 'Apps' },

    // Add more projects as needed
  ];

  const breakpointColumnsObj = {
    default: 3,
    1200: 3,
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

              {/* All apps Tab*/}
              <TabPanel>
                {projects.length === 0 ? (
                  <p>No projects to display</p>
                ) : (
                  <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className='my-masonry-grid'
                    columnClassName='my-masonry-grid-column'
                    spacing= {2}
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

              {/* Apps Tab*/}
              <TabPanel>
                {projects.filter((project) => project.category === 'Apps').length === 0 ? (
                  <p>No apps to display</p>
                ) : (
                  <Masonry
                    breakpointCols={3}
                    spacing= {10}
                    // className='my-masonry-grid'
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

              {/* Websites Tab*/}
              <TabPanel>
                {projects.filter((project) => project.category === 'Websites').length === 0 ? (
                  <p>No apps to display</p>
                ) : (
                  <Masonry
                    breakpointCols={3}
                    className='my-masonry-grid'
                    columnClassName='my-masonry-grid-column'
                  >
                    {projects
                      .filter((project) => project.category === 'Websites')
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
              
              {/* Other Tab*/}
              <TabPanel>
                {projects.filter((project) => project.category === 'Others').length === 0 ? (
                  <p>No apps to display</p>
                ) : (
                  <Masonry
                    breakpointCols={3}
                    className='my-masonry-grid'
                    columnClassName='my-masonry-grid-column'
                  >
                    {projects
                      .filter((project) => project.category === 'Others')
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

