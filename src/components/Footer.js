import React, { Component } from 'react';
import {
    Navbar,
    Nav,
    Form,
    FormControl,
    Button,
    NavDropdown
  } from 'react-bootstrap/'
  import './Footer.css'
  import dogsAndCats from '../images/dogsAndCatsRow.jpg'

class Footer extends Component {
    render() {
        return (
            <div class="content">
              <Nav className="mr-auto" className="color-nav">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/about">About Us</Nav.Link>
                <Nav.Link href="/master">Pet Lookup</Nav.Link>
                <Nav.Link href="/details">Pet Details</Nav.Link>
                <Nav.Link href="/visit">Schedule Visit</Nav.Link>
                <Nav.Link href="/resources">Resources</Nav.Link>
                <img
                  alt=""
                  src={dogsAndCats}
                  width="162"
                  height="75"
                  className="d-inline-block align-top"
                  />{' '}
                </Nav>
                <div class="push"></div>
            </div>
        );
    }
}

export default Footer;
