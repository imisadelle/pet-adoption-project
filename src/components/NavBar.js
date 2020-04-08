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
//   import { LinkContainer } from "react-router-bootstrap"; 


const NavBar = () => {

    return(
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/about">About Us</Nav.Link>
                <Nav.Link href="/random">Pet Lookup</Nav.Link>
                <Nav.Link href="/details">Pet Details</Nav.Link>
                <Nav.Link href="/favorites">Schedule Visit</Nav.Link>
                <NavDropdown title="Resources" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Spay and Neuter</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.2">Care Options</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Playtime</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">Success Stories</NavDropdown.Item>
                </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar;



