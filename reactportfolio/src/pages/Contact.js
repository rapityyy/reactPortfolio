// src/pages/Contact.js

import React, { useState } from 'react';

import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import '../styles.css';


import 'bootstrap/dist/css/bootstrap.css';

// import MapContainer from './Map.js';



function Contact() {
  return (
    <div className='main-content-contact'>
      <div className='main-content-inner-contact'>

        <div className='contact-info'>
          <h4>Get in Touch with me!</h4>
          <p>I'm available for freelance. Feel free to contact me.</p>
          <ul>
            <li className='media'>
              <i class="fa-solid fa-map-location-dot"></i>
              {/* <label>&#x1F3E0;</label> */}
              <span>123 Street, New York, US, 123456</span>
            </li>
            <li className='media'>
              <i class="fa-regular fa-envelope"></i>
              {/* <label>&#x2709;</label> */}
              <span>ale@opgi.com</span>
            </li>
            <li className='media'>
              <i class="fa-solid fa-mobile-screen-button"></i>
              {/* <label>&#x260E;</label> */}
              <span>1234567890</span>
            </li>
          </ul>
        </div>
      </div>

      <div className='contact-form'>
        <h4>Contact Form</h4>
        <form>
          <div className='row'>

            <div className='col-md-6'>
              <div className='form-group mb-3'>
                <input type="text" class="form-control theme-light" placeholder="Full name" name="name" id="name"></input>
              </div>
            </div>

            <div className='col-md-6 form-group'>
              <div className='form-group mb-3'>
                <input type="text" class="form-control theme-light" placeholder="Email" name="email" id="email"></input>
                </div>
              </div>

            <div className='col-12 form-group'>
              <div className='form-group mb-3'>
                <input type="text" class="form-control theme-light" placeholder="Subject" name="subject" id="subject"></input>
              </div>
            </div>

            <div className='col-12 form-group'>
              <div className='form-group mb-3'>
                <textarea rows="5" class="form-control theme-light" placeholder="Type comment" name="comment" id="comment"></textarea>
              </div>
            </div>

            <div className='col-12 form-group'>
              <div className='btn-bar'>
                <button className="px-btn px-btn-white" type='submit'>Send Message</button>
              </div>
            </div>

            {/* <MapContainer /> */}
          </div>
        </form>
      </div>

    </div>
  );
}

export default Contact;


