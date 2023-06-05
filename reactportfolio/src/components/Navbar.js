// src/components/Navbar.js

import React, { useState } from 'react';

import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

import '../styles.css';

import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBContainer,
  MDBIcon,
  MDBCollapse
} from 'mdb-react-ui-kit';

function Navbar() {
    const [showBasic, setShowBasic] = useState(false);

  return (
    <header className='navbar-header'>

        <div className='logo-home'>
            <a aria-current='page' href='/'><i className='fas fa-a fa-lg'></i></a>
        </div>

        <MDBNavbar expand='lg'>
            <MDBContainer fluid>
                    <MDBNavbarNav right className='mb-2 mb-lg-0 flex-column'>

                        <MDBNavbarItem active className='navbar-home-icon'>
                            <MDBNavbarLink aria-current='page' href='#Home'><i className='fas fa-home fa-lg navbar-icon'></i></MDBNavbarLink>
                        </MDBNavbarItem>

                        <MDBNavbarItem className='navbar-item'>
                            <MDBNavbarLink href='#About'><i className='fas fa-user fa-lg navbar-icon'></i></MDBNavbarLink>
                        </MDBNavbarItem>

                        <MDBNavbarItem>
                            <MDBNavbarLink href='#Resume'><i class="fas fa-file fa-lg navbar-icon"></i></MDBNavbarLink>
                        </MDBNavbarItem>

                        <MDBNavbarItem>
                            <MDBNavbarLink href='#Projects'><i class="fas fa-bars-progress fa-lg navbar-icon"></i></MDBNavbarLink>
                        </MDBNavbarItem>

                        <MDBNavbarItem>
                            <MDBNavbarLink href='#Contact'><i className='fas fa-phone fa-lg navbar-icon'></i></MDBNavbarLink>
                        </MDBNavbarItem>

                    </MDBNavbarNav>
            </MDBContainer>
        </MDBNavbar>
    </header>
  );
}

export default Navbar;

