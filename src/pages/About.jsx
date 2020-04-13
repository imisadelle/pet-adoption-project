import React, { Component } from 'react';
import {
    Jumbotron,
    Col,
    Row,
    Container,
    Image
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
        );
    }
}

export default About;
