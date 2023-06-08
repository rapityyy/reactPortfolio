// src/pages/Contact.js

import React, { useState } from 'react';

import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

import '../styles.css';


// function Contact() {

//   return (
//     <div className='page main-content'>
//       <div className='main-content-inner'>     
//           <h1>Contact Page</h1>
//           <p>This is the Contact section section of my portfolio website.</p>
//       </div>
//     </div>
//   );
// }

// export default Contact;

// src/pages/Contact.js


function Contact() {
  return (
    <div className='main-content-contact'>
      <div className='main-content-inner-contact'>
        <h3>Get in Touch</h3>
        <p>I'm available for freelance. Feel free to contact me.</p>
        <div className='contact-row'>
          <label>&#x1F3E0;</label>
          <span>123 Street, New York, US, 123456</span>
        </div>
        <div className='contact-row'>
          <label>&#x2709;</label>
          <span>ale@opgi.com</span>
        </div>
        <div className='contact-row'>
          <label>&#x260E;</label>
          <span>1234567890</span>
        </div>
      </div>

      <div className='contact-form'>
        <h3>Contact Form</h3>
        <form>
          <div className='form-group'>
            <label htmlFor='name'>Full Name:</label>
            <input type='text' id='name' />
          </div>
          <div className='form-group'>
            <label htmlFor='email'>Email:</label>
            <input type='email' id='email' />
          </div>
          <div className='form-group'>
            <label htmlFor='subject'>Subject:</label>
            <input type='text' id='subject' />
          </div>
          <div className='form-group'>
            <label htmlFor='comment'>Comment:</label>
            <textarea id='comment' rows='5'></textarea>
          </div>
          <button type='submit'>Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;


