// src/components/Header.js

import React, { useState } from 'react';

import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

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

function Header() {
    const [showBasic, setShowBasic] = useState(false);

  return (
    <header>
        <MDBNavbar expand='lg' light bgColor='yellow'>

            <MDBContainer fluid>

                    <MDBNavbarNav right className='mb-2 mb-lg-0'>
                        
                        <MDBNavbarItem active>
                            <MDBNavbarLink aria-current='page' href='#'>Home</MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <MDBNavbarLink href='#'>About</MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <MDBNavbarLink href='#'>Resume</MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <MDBNavbarLink href='#'>Projects</MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <MDBNavbarLink href='#'>Contact</MDBNavbarLink>
                        </MDBNavbarItem>


                    </MDBNavbarNav>
            </MDBContainer>
        </MDBNavbar>
    </header>
  );
}

export default Header;

