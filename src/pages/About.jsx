import React, { Component } from 'react';
import {
    Col,
    Row,
    Container,
    Image,
    CardColumns,
    Card,
    ListGroup,
    ListGroupItem, 
    CardDeck 
  } from 'react-bootstrap';
import './About.css';
import IM_profile from '../images/IM_profile.jpeg'
import IM_dog from '../images/IM_dog2.png'
import IM_kittens from '../images/IM_kittens.jpg'
import DP_pets from '../images/darci_pet_pic.jpg'
import DP_dogs from '../images/darci_animal_pic.jpg'
import DP_profile from '../images/darci_profile_pic.jpg'
import AP_dog from '../images/Alexia_dog.png'

class About extends Component {
    render() {
        return (
        <div className='page'>

            {/* <div>
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
                      <Image src={ DP_profile } rounded fluid/>
                    </Col>
                    <Col xs={6} md={4}>
                      <Image src="https://ca.slack-edge.com/T055GEHEJ-UN66Y5AJK-067dd872a453-512" rounded fluid/>
                    </Col>
                  </Row>
                </Container>
              </Container>
            </div> */}

            <div className='aboutUs'>
              <h1>Learning is a Journey</h1>
              <h2>The path to self-improvement led us to Wyncode</h2>
            </div>
            
            <CardDeck className='about-bio-container'>
              <Card className='about-bio-card'>
              <Card.Img variant="top" src={ IM_profile } />
                <Card.Body>
                    <Card.Title className='about-title'>ISADELLE MERCEDES</Card.Title>
                    <Card.Text className='about-text'>
                    <span style={{fontWeight: 900}}>Professional Background: </span> Innovative and skilled Manager, Analyst, Scrum Master and Learning and Development professional with over 18 years
                    of experience working within Sales, Risk Management, technology, and pharmaceutical industries. Masterful
                    requirements elicitation, solution planning, client interfacing, process improvements and business analysis.
                    </Card.Text>
                </Card.Body>
                <ListGroup horizontal className="list-group-flush">
                    <ListGroupItem>
                      <Card.Link href="https://github.com/imisadelle" target='_blank'>GitHub</Card.Link>
                    </ListGroupItem>
                    <ListGroupItem>
                      <Card.Link href="https://www.linkedin.com/in/isadelle-mercedes-9907449" target='_blank'>LinkedIn</Card.Link>
                    </ListGroupItem>
                </ListGroup>
                <Card.Footer>
                    <small className="text-muted">Email: Isadelle@gmail.com</small>
                </Card.Footer>
              </Card>

              <Card className='about-bio-card'>
                <Card.Img variant="top" src={ DP_profile } />
                <Card.Body>
                    <Card.Title className='about-title'>DARCI PONS</Card.Title>
                    <Card.Text className='about-text'>
                    <span style={{fontWeight: 900}}>Why Wyncode: </span>Joining Wyncode has been one of the greatest decisions I've ever made. Since graduating from C34 I've leaned more toward Front-End Development. I can't wait to learn more about JavaScript and React to create user-friendly websites.
                    </Card.Text>
                </Card.Body>
                <ListGroup horizontal className="list-group-flush">
                    <ListGroupItem>
                      <Card.Link href="https://github.com/darcipons" target='_blank'>GitHub</Card.Link>
                    </ListGroupItem>
                    <ListGroupItem>
                      <Card.Link href="https://linkedin.com/in/darci-pons/" target='_blank'>LinkedIn</Card.Link>
                    </ListGroupItem>
                </ListGroup>
                <Card.Footer>
                    <small className="text-muted">Email: darcimarie33@gmail.com </small>
                </Card.Footer>
                </Card>

              <Card>
                <Card.Img className='alexia-pic' variant="top" src="https://ca.slack-edge.com/T055GEHEJ-UN66Y5AJK-067dd872a453-512" />
                <Card.Body>
                    <Card.Title className='about-title'>ALEXIA PANAMENO</Card.Title>
                    <Card.Text className='about-text'>
                    <span style={{fontWeight: 900}}>Recent Grad:</span>Wyncode C35 recently-graduated full stack web developer, multicultural professional with a voracious appetite for knowledge and tech.
                    </Card.Text>
                </Card.Body>
                <ListGroup horizontal className="list-group-flush">
                    <ListGroupItem>
                      <Card.Link href="https://github.com/rogueale" target='_blank'>GitHub</Card.Link>
                    </ListGroupItem>
                    <ListGroupItem>
                      <Card.Link href="https://www.linkedin.com/in/victoriapanameno/" target='_blank'>LinkedIn</Card.Link>
                    </ListGroupItem>
                </ListGroup>
                <Card.Footer>
                    <small className="text-muted">Email: alexiapanameno@gmail.com </small>
                </Card.Footer>
              </Card>
            </CardDeck>

            <h1 className='love-animals'>Oh, and we love animals</h1>
            <div className='love-line'></div>
           
            {/* Note: just use cards to display our pics with animals randomly on the page */}

            <CardColumns className='card-cols'>
              <Card>
                <Card.Body>
                 <Card.Img variant="top" src= {DP_dogs} />
                </Card.Body>
              </Card>

              <Card className="p-3">
                <Card.Body>
                  <Card.Img variant="top" src= {DP_pets} />
                </Card.Body>
              </Card>

              <Card>
                <Card.Body>
                  <Card.Img variant="top" src= {IM_dog} />
                </Card.Body>
              </Card>

              <Card bg="primary" text="white" className="text-center p-3">
                <blockquote className="blockquote mb-0 card-body dog-quote">
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
                  <Card.Img variant="top" src= {IM_kittens} />
                </Card.Body>
              </Card>
              <Card>
                <Card.Img variant="top" src={AP_dog} />
              </Card>
              <Card bg="info" className="text-right">
              <blockquote className="blockquote mb-0 card-body dog-quote">
                  <div>
                  My sunshine doesn't come from the skies. It comes from the love that's in my pets eyes.
                  </div>
                </blockquote>
              </Card>
            </CardColumns>
          </div>
        );
    }
}

export default About;
