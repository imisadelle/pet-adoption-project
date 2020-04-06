import React, { Component } from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
// import Navbar from 'react-bootstrap/Navbar'
// import NavBar from './components/NavBar'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
// import PetCategories from './components/PetCategories'
// import AdoptionStories from './components/AdoptionStories';
import { Container } from 'react-bootstrap';
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     Link
//   } from "react-router-dom";

// class Home extends Component {
//     render() {

    function Home() {
        return (
            <div className="Home">
                {/* <Navbar/> */}
                <div className="container">
                
                <Jumbotron>

                    <h1>LOVABLE PAWS</h1>
                    <p>
                        Animals have love to give, and pets without homes even moreso.  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti porro qui, vel, nobis veritatis quas perferendis in incidunt eveniet possimus adipisci ex odio ab sapiente ducimus eaque? Id, tempora quam.
                    </p>
                    <p>
                    <Button variant="primary">Learn more</Button>
                    </p>
                </Jumbotron>
                {/* <PetCategories /> */}
                {/* <AdoptionStories /> */}
                </div>
                 
            </div>   

                );
      }

     

export default Home;
