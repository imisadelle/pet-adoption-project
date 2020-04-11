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

class Footer extends Component {
    render() {
        return (
            <div class="content">
              <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/about">About Us</Nav.Link>
                <Nav.Link href="/master">Pet Lookup</Nav.Link>
                <Nav.Link href="/details">Pet Details</Nav.Link>
                <Nav.Link href="/visit">Schedule Visit</Nav.Link>
                <Nav.Link href="/resources">Resources</Nav.Link>
                </Nav>
                <div class="push"></div>
            </div>
        );
    }
}

export default Footer;
