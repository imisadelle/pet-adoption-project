import React, { Component } from 'react';
import {
    Jumbotron,
    Col,
    Row,
    Container,
    Image,
    CardGroup,
    CardColumns,
    Card,
    ListGroup,
    ListGroupItem 
  } from 'react-bootstrap';
  import './About.css';
  import IM_profile from '../images/IM_profile.jpeg'
  import IM_dog from '../images/IM_dog.png'
  import IM_kittens from '../images/IM_kittens.jpg'
  import darci_pet_pic from '../images/darci_pet_pic.jpg'
  import darci_animal_pic from '../images/darci_animal_pic.jpg'
  import darci_profile_pic from '../images/darci_profile_pic.jpg'

 

class About extends Component {
    render() {
        return (
        <div>
            <div>
            <Container className="aboutUs">
                <h1>Learning is a Journey</h1>
                <div>
                <h2>The path to self-improvement led us to Wynwood</h2>
                </div>
            
            <Container>
                    <Row>
                        <Col xs={6} md={4}>
                        <Image src={ IM_profile } rounded fluid/>
                        </Col>
                        <Col xs={6} md={4}>
                        <Image src={ darci_profile_pic } rounded fluid/>
                        </Col>
                        <Col xs={6} md={4}>
                        <Image src="https://ca.slack-edge.com/T055GEHEJ-UN66Y5AJK-067dd872a453-512" rounded fluid/>
                        </Col>
                    </Row>
                </Container>
            </Container>
            
                </div>
                <CardGroup>
                <Card>
                {/* <Card.Img variant="top" src={ IM_profile } /> */}
                <Card.Body>
                    <Card.Title>ISADELLE MERCEDES</Card.Title>
                    <Card.Text>
                    Professional Background:  Innovative and skilled Manager, Analyst, Scrum Master and Learning and Development professional with over 18 years
                    of experience working within Sales, Risk Management, technology, and pharmaceutical industries. Masterful
                    requirements elicitation, solution planning, client interfacing, process improvements and business analysis.
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>GH https://github.com/imisadelle</ListGroupItem>
                    <ListGroupItem>LI https://www.linkedin.com/in/isadelle-mercedes-9907449</ListGroupItem>
                </ListGroup>
                <Card.Footer>
                    <small className="text-muted">Email: Isadelle@gmail.com</small>
                </Card.Footer>
                </Card>
                <Card>
                {/* <Card.Img variant="top" src={ darci_profile_pic } /> */}
                <Card.Body>
                    <Card.Title>DARCI PONS</Card.Title>
                    <Card.Text>
                    Why Wyncode:   Joining Wyncode has been one of the greatest decisions I've ever made. Since graduating from C34 I've leaned more toward Front-End Development. I can't wait to learn more about JavaScript and React in order to create user-friendly websites.{' '}
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>GH https://github.com/darcipons</ListGroupItem>
                    <ListGroupItem>LI https://linkedin.com/in/darci-pons/</ListGroupItem>
                </ListGroup>
                <Card.Footer>
                    <small className="text-muted">Email: darcimarie33@gmail.com </small>
                </Card.Footer>
                </Card>
                <Card>
                {/* <Card.Img variant="top" src="https://ca.slack-edge.com/T055GEHEJ-UN66Y5AJK-067dd872a453-512" /> */}
                <Card.Body>
                    <Card.Title>ALEXIA PANAMENO</Card.Title>
                    <Card.Text>
                    Wyncode C35 recently-graduated full stack web developer, multicultural professional with a voracious appetite for knowledge and tech.
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>GH https://github.com/rogueale</ListGroupItem>
                    <ListGroupItem>LI https://www.linkedin.com/in/victoriapanameno/</ListGroupItem>
                </ListGroup>
                <Card.Footer>
                    <small className="text-muted">Email: alexiapanameno@gmail.com </small>
                </Card.Footer>
                </Card>
            </CardGroup>
            <h1>Oh, and we love animals</h1>
           
            {/* Note: just use cards to display our pics with animals randomly on the page */}

            <CardColumns>
            <Card>
              <Card.Img variant="top" src= { IM_dog } />
              <Card.Body>
                <Card.Title>Card title that wraps to a new line</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural lead-in to
                  additional content. This content is a little bit longer.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="p-3">
              <blockquote className="blockquote mb-0 card-body">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                  erat a ante.
                </p>
                <footer className="blockquote-footer">
                  <small className="text-muted">
                    Someone famous in <cite title="Source Title">Source Title</cite>
                  </small>
                </footer>
              </blockquote>
            </Card>
            <Card>
              <Card.Img variant="top" src= {IM_dog } />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This card has supporting text below as a natural lead-in to additional
                  content.{' '}
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
            <Card bg="primary" text="white" className="text-center p-3">
              <blockquote className="blockquote mb-0 card-body">
                <p>
                Until one has loved an animal, a part of one's soul remains unawakened.
                </p>
                <footer className="blockquote-footer">
                  <small className="text-muted">
                    Anatole France 
                  </small>
                </footer>
              </blockquote>
            </Card>
            <Card className="text-center">
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This card has supporting text below as a natural lead-in to additional
                  content.{' '}
                </Card.Text>
                <Card.Text>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img src="holder.js/100px160" />
            </Card>
            <Card className="text-right">
              <blockquote className="blockquote mb-0 card-body">
                <p>
                  Until one has loved an animal, a part of one's soul remains unawakened.
                </p>
                <footer className="blockquote-footer">
                  <small className="text-muted">
                    Antole France <cite title="Source Title">https://www.brainyquote.com/quotes/anatole_france_383929</cite>
                  </small>
                </footer>
              </blockquote>
            </Card>
            <Card>
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural lead-in to
                  additional content. This card has even longer content than the first to
                  show that equal height action.
                </Card.Text>
                <Card.Text>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Text>
              </Card.Body>
            </Card>
          </CardColumns>
          </div>
        );
    }
}

export default About;
