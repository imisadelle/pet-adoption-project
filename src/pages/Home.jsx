import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Jumbotron,
  Button,
  Card,
  CardDeck,
  Col,
  Row,
  Container
} from "react-bootstrap";

import PetLookup from "../components/AdoptionStories";
import { Link } from 'react-router-dom'
import Benny from '../images/Benny.jpg'
import Lobs from '../images/Lobs1.jpg'
import Lemon from '../images/Lemon.jpg'
import Ferret from '../images/Ferret.jpg'


function Home() {
  const quote = "Unconditional ❤️ love is just a click away"

  return (
    <div className="Home">
      <div className="container">
        <Jumbotron>
          <h1>LOVABLE PAWS</h1>
          <h2>
            Animals have love to give.  
          </h2>
          <h2>Pets without homes even moreso.</h2>
          <h3>Unconditional ❤️ love is just a click away</h3>
          <p>
            <Link to='/about'>
            <Button variant="success">Learn more</Button>{' '}
            </Link>
          </p>
        </Jumbotron>

        <CardDeck>
            <Card>
                <Card.Img variant="top" src={ Benny } />
                <Card.Body>
                <Card.Title className="text-center">
                  Dogs
                  </Card.Title>
                <Card.Text>
                    Adopt DOGS because, they're loyal, playful, affectionate, social, great for all ages and make life better.  
                </Card.Text>
                </Card.Body>
              <Link to="/master">
                <Card.Footer>
                <large className="text-bold">Woof! Rescue a Dog</large>
                <p></p> 
                <Link to='/master'>
            <Button className="text-center" variant="success">Search</Button>{' '}
            </Link>
                </Card.Footer>
              </Link>
            </Card>

            <Card>
                <Card.Img variant="top" src={ Lobs } />
                <Card.Body>
                <Card.Title className="text-center">Cats</Card.Title>
                <Card.Text>
                    Adopt CATS because they're clever, curious, clean, have the best purrs, are independent and make life better.{' '}
                </Card.Text>
                </Card.Body>
                <Link to="/master">
                <Card.Footer>
                <large className="text-bold">Meow! Rescue a Cat</large>
                <p></p> 
                <Link to='/about'>
            <Button className="text-center" variant="success">Search</Button>{' '}
            </Link>
                </Card.Footer>
                </Link>
            </Card>

            <Card>
                <Card.Img variant="top" src={ Lemon } />
                <Card.Body>
                <Card.Title className="text-center">Birds</Card.Title>
                <Card.Text>
                     Adopt a BIRD because they're intelligent, great conversationalists, low-maintenance, love company and make life better. 
                </Card.Text>
                </Card.Body>
                <Link to="/master">
                <Card.Footer>
                <large className="text-bold">Tweet! Rescue a Bird</large>
                <p></p> 
                <Link to='/master'>
            <Button className="text-center" variant="success">Search</Button>{' '}
            </Link>
                </Card.Footer>
                </Link>
            </Card>

            <Card>
                <Card.Img variant="top" src={ Ferret } />
                <Card.Body>
                <Card.Title className="text-center">Small and Furry</Card.Title>
                <Card.Text>
                    Adopt a Small Furry pet because they're cute, entertaining to watch and play with, loving don't eat too much and make life better. 
                </Card.Text>
                </Card.Body>
                <Link to="/master">
                <Card.Footer>
                  <large className="text-bold">Squeak! Rescue small</large>
                  <p></p>
                  <Link to='/master'>
                    <Button className="text-center" variant="success">Search</Button>{' '}
                  </Link>
                </Card.Footer>
                </Link>
            </Card>
        </CardDeck>

        <div>
            <hr>
            </hr>
            <Container>
                <Row>
                    <Col md={6}>Image 1</Col>
                    <Col md={6}>Story 1</Col>
                </Row>
                <Row>
                    <Col md={6}>Story 2</Col>
                    <Col md={6}>Image 2</Col>
                </Row>
                <Row>
                    <Col md={6}>Image 3</Col>
                    <Col md={6}>Story 3</Col>
                </Row>
            </Container>
        </div>
      </div>
    </div>
  );
}

export default Home;
