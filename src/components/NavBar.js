import React, { Component, useState } from 'react';
import {
    Navbar,
    Nav,
    Form,
    FormControl,
    Button,
    NavDropdown
  }from 'react-bootstrap/'
  import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
  } from 'react-router-dom';
import PetPawLogo from '../images/PetPawLogo.png'

const NavBar = () => {

    return(
        <Navbar 
        className="color-nav" 
        variant="light"
        // bg="light" 
        expand="lg"> 
        {/* fixed="top"> */}
            <Navbar.Brand href="#home">
                <img
                    alt=""
                    src={PetPawLogo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    />{' '}
                Lovable Paws
                </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/about">About Us</Nav.Link>
                <Nav.Link href="/master">Pet Lookup</Nav.Link>
                <Nav.Link href="/visit">Schedule Visit</Nav.Link>
                <NavDropdown title="Resources" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/resources">Spay and Neuter</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="care">Care Options</NavDropdown.Item>
                    <NavDropdown.Item href="playtime">Playtime</NavDropdown.Item>
                    <NavDropdown.Item href="/adoption">Success Stories</NavDropdown.Item>
                </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar;



