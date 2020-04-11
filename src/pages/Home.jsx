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

function Home() {
  return (
    <div className="Home">
      <div className="container">
        <Jumbotron>
          <h1>LOVABLE PAWS</h1>
          <p>
            Animals have love to give, and pets without homes even moreso. Lorem
            ipsum dolor sit amet, consectetur adipisicing elit. Deleniti porro
            qui, vel, nobis veritatis quas perferendis in incidunt eveniet
            possimus adipisci ex odio ab sapiente ducimus eaque? Id, tempora
            quam.
          </p>
          <p>
            <Button variant="primary">Learn more</Button>
          </p>
        </Jumbotron>

        <CardDeck>
            <Card>
              <Link to="/master">
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                <Card.Title>Dogs</Card.Title>
                <Card.Text>
                    Woof! Adopt DOGS because, This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                <small className="text-muted">Rescue a Dog</small>
                </Card.Footer>
              </Link>
            </Card>

            <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                <Card.Title>Cats</Card.Title>
                <Card.Text>
                    Meow! Adopt CATS because, This card has supporting text below as a natural lead-in to additional
                    content.{' '}
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                <small className="text-muted">Rescue a Cat</small>
                </Card.Footer>
            </Card>

            <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                <Card.Title>Birds</Card.Title>
                <Card.Text>
                    Tweet, Tweet! Adopt a BIRD because, This is a wider card with supporting text below as a natural lead-in to
                    additional content. This card has even longer content than the first to
                    show that equal height action.
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                <small className="text-muted">Rescue a bird</small>
                </Card.Footer>
            </Card>

            <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                <Card.Title>Small and Furry</Card.Title>
                <Card.Text>
                    Look no further for a small and furry lovable pet. These animals are waiting for the right person to open their heart and home to the wonders of resucing an itty, bitty, creature of love.
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                <small className="text-muted">Rescue a small and furry critter</small>
                </Card.Footer>
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
