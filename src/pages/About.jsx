import React, { Component } from 'react';
import {
    Jumbotron,
    Col,
    Row,
    Container,
    Image,
    CardGroup,
    Card,
    ListGroup,
    ListGroupItem 
  } from 'react-bootstrap';
  import './About.css';
  import IM_profile from '../images/IM_profile.jpeg'
  import darci_profile_pic from '../images/darci_profile_pic.jpg'

 

class About extends Component {
    render() {
        return (
            <Container className="aboutUs">
                <h1>Learning is a Journey</h1>
                <div>
                <h2>The path to self-improvement led us to Wynwood</h2>
                </div>
            
                <Container>
                    {/* <Row>
                        <Col xs={6} md={4}>
                        <Image src={ IM_profile } rounded fluid/>
                        </Col>
                        <Col xs={6} md={4}>
                        <Image src={ darci_profile_pic } rounded fluid/>
                        </Col>
                        <Col xs={6} md={4}>
                        <Image src="https://ca.slack-edge.com/T055GEHEJ-UN66Y5AJK-067dd872a453-512" rounded fluid/>
                        </Col>
                    </Row> */}
                </Container>
                
                <CardGroup>
                <Card>
                <Card.Img variant="top" src={ IM_profile } />
                <Card.Body>
                    <Card.Title>ISADELLE MERCEDES</Card.Title>
                    <Card.Text>
                    Professional Background:  Innovative and skilled Manager, Analyst, Scrum Master and Learning and Development professional with over 18 years
                    of experience working within Sales, Risk Management, technology, and pharmaceutical industries. Masterful
                    requirements elicitation, solution planning, client interfacing, process improvements and business analysis.
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>SM</ListGroupItem>
                    <ListGroupItem>SM</ListGroupItem>
                    <ListGroupItem>SM</ListGroupItem>
                </ListGroup>
                <Card.Footer>
                    <small className="text-muted">Email: Isadelle@gmail.com</small>
                </Card.Footer>
                </Card>
                <Card>
                <Card.Img variant="top" src={ darci_profile_pic } />
                <Card.Body>
                    <Card.Title>DARCI PONS</Card.Title>
                    <Card.Text>
                    Why Wyncode:   Joining Wyncode has been one of the greatest decisions I've ever made. Since graduating from C34 I've leaned more toward Front-End Development. I can't wait to learn more about JavaScript and React in order to create user-friendly websites.{' '}
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>SM</ListGroupItem>
                    <ListGroupItem>SM</ListGroupItem>
                    <ListGroupItem>SM</ListGroupItem>
                </ListGroup>
                <Card.Footer>
                    <small className="text-muted">Email: </small>
                </Card.Footer>
                </Card>
                <Card>
                <Card.Img variant="top" src="https://ca.slack-edge.com/T055GEHEJ-UN66Y5AJK-067dd872a453-512" />
                <Card.Body>
                    <Card.Title>ALEXIA PANAMENO</Card.Title>
                    <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This card has even longer content than the first to
                    show that equal height action.
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>
                        
                        https://github.com/imisadelle</ListGroupItem>
                    <ListGroupItem>SM</ListGroupItem>
                    <ListGroupItem>SM</ListGroupItem>
                </ListGroup>
                <Card.Footer>
                    <small className="text-muted">Email: </small>
                </Card.Footer>
                </Card>
            </CardGroup>
            </Container>
        );
    }
}

export default About;
