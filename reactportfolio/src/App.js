import './styles.css';

import React from 'react';
import Header from './components/Header.js';
import Navbar from './components/Navbar.js';

function App() {
  return (
    <div className='App-home'>
      <Navbar />

      <h1>Welcome to myPortfolio</h1>
      <p>This is the home page of my portfolio website.</p>
    </div>
  );
}

export default App;

