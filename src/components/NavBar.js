import React, { Component, useState } from 'react';
import {
    Navbar,
    Nav,
    Form,
    FormControl,
    Button 
  }from 'react-bootstrap/'
  import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
  } from 'react-router-dom';
//   import { LinkContainer } from "react-router-bootstrap"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fa-paw" } from '@fortawesome/free-regular-svg-icons'
import './NavBar.css'
import axios from 'axios';

const NavBar = () => {

    return (
    <Router>
    <Navbar bg="dark" variant="dark">
    <Navbar fixed="top" />
    <FontAwesomeIcon icon={fa-paw} style={{color: "yellow"}}></FontAwesomeIcon>
    <Navbar.Brand href="/">Food</Navbar.Brand>
    <Nav className="mr-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/about">About Us</Nav.Link>
        <Nav.Link href="/random">Resources</Nav.Link>
        <Nav.Link href="/favorites">Pet Categories</Nav.Link>
        </Nav>
    </Navbar> 
    </Router>
    );
}


export default NavBar;



