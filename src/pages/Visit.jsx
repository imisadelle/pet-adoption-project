import React, { Component, useState } from 'react';
import { useParams } from 'react-router-dom'
import {
    Container,
    Form,
    Col,
    Row,
    Button
    } from 'react-bootstrap'
import axios from 'axios'
import { petList } from "../data/pet_list"
// import DatePicker from 'react-datepicker'


class Visit extends Component {
    state = {
        pet: {}
    }
    // fetch('/visit/1') 
    // .then(res => res.json())
    // .then(res => console.log(res))

    getPet=() => {
      let petId = this.props.match.params.petId
      axios.get(`https://pt12-final-backend.herokuapp.com/pet/${petId}?token=${window.caches.pet_finder_token}}`)
        .then(response => this.setState({ pet: response.data }))
    }

    componentDidMount(){
      if (!window.caches.pet_finder_token) {  //means: if the token does not exist then get it and save
          axios.get('https://pt12-final-backend.herokuapp.com/')
            .then(response => {
              window.caches.pet_finder_token = response.data
              this.getPet()
            })
        }
        else {
          this.getPet()
        }
        this.setState({pet: petList[0]})
    }

    render() {
      let img = this.state.pet.photos && this.state.pet.photos[0].medium
      let alt = this.state.pet.breeds && `A ${this.state.pet.breeds.primary} dog`
            return (
            <Row>
            <Col xs={12} md={8}>
            <Container className='Form'>
            <br>
            </br>
            <div>
              <h2>Complete form to schedule a <span style={{fontStyle: 'italic'}}>Virtual Visit</span> with this pet</h2>
            </div>
            <Form >
            <Form.Row>
              <Form.Group as={Col} controlId="tempfield">
                <Form.Label>Pet Image Display</Form.Label>
                  <img src={img} alt={alt}/>
              </Form.Group>

              <Form.Group as={Col} controlId="Selected Pet Name">
              <Form.Label>Note: Import pet name here</Form.Label>
              <Form.Control type="petName" placeholder="Add pet name event listener" />
              </Form.Group>
            </Form.Row>
            <hr>
            </hr>
            <Form.Row>
            <Form.Group as={Col} controlId="formGridFirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="fname" placeholder="Enter first name" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="lname" placeholder="Enter last name" />
                </Form.Group>
                </Form.Row>

            <Form.Row>
                <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridTel">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="tel" placeholder="Enter Phone Number" />
                </Form.Group>
            </Form.Row>

            <Form.Group controlId="formGridAddress1">
                <Form.Label>Address</Form.Label>
                <Form.Control placeholder="1234 Main St" />
            </Form.Group>

            <Form.Group controlId="formGridAddress2">
                <Form.Label>Address 2</Form.Label>
                <Form.Control placeholder="Apartment, studio, or floor" />
            </Form.Group>

            <Form.Row>
                <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>City</Form.Label>
                <Form.Control />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                <Form.Label>State</Form.Label>
                <Form.Control as="select">
                    <option>Choose...</option>
                    <option value="AL">Alabama</option>
                    <option value="AK">Alaska</option>
                    <option value="AZ">Arizona</option>
                    <option value="AR">Arkansas</option>
                    <option value="CA">California</option>
                    <option value="CO">Colorado</option>
                    <option value="CT">Connecticut</option>
                    <option value="DE">Delaware</option>
                    <option value="DC">District Of Columbia</option>
                    <option value="FL">Florida</option>
                    <option value="GA">Georgia</option>
                    <option value="HI">Hawaii</option>
                    <option value="ID">Idaho</option>
                    <option value="IL">Illinois</option>
                    <option value="IN">Indiana</option>
                    <option value="IA">Iowa</option>
                    <option value="KS">Kansas</option>
                    <option value="KY">Kentucky</option>
                    <option value="LA">Louisiana</option>
                    <option value="ME">Maine</option>
                    <option value="MD">Maryland</option>
                    <option value="MA">Massachusetts</option>
                    <option value="MI">Michigan</option>
                    <option value="MN">Minnesota</option>
                    <option value="MS">Mississippi</option>
                    <option value="MO">Missouri</option>
                    <option value="MT">Montana</option>
                    <option value="NE">Nebraska</option>
                    <option value="NV">Nevada</option>
                    <option value="NH">New Hampshire</option>
                    <option value="NJ">New Jersey</option>
                    <option value="NM">New Mexico</option>
                    <option value="NY">New York</option>
                    <option value="NC">North Carolina</option>
                    <option value="ND">North Dakota</option>
                    <option value="OH">Ohio</option>
                    <option value="OK">Oklahoma</option>
                    <option value="OR">Oregon</option>
                    <option value="PA">Pennsylvania</option>
                    <option value="RI">Rhode Island</option>
                    <option value="SC">South Carolina</option>
                    <option value="SD">South Dakota</option>
                    <option value="TN">Tennessee</option>
                    <option value="TX">Texas</option>
                    <option value="UT">Utah</option>
                    <option value="VT">Vermont</option>
                    <option value="VA">Virginia</option>
                    <option value="WA">Washington</option>
                    <option value="WV">West Virginia</option>
                    <option value="WI">Wisconsin</option>
                    <option value="WY">Wyoming</option>

            {/* Code sample to select state from drop-down
            let e = document.getElementById("formGridState");
            let value = e.options[e.selectedIndex].value;
            let text = e.options[e.selectedIndex].text; */}

                </Form.Control>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Zip</Form.Label>
                <Form.Control />
                </Form.Group>
            </Form.Row>

            <Form.Row>
                <Form.Group as={Col} controlId="formGridCalendar">
                <Form.Label>Insert Calendar Picker</Form.Label>
                <Form.Control />
                {/* <DatePicker selected={startDate} onChange={date => setStartDate(date)} /> */}
                </Form.Group>
            </Form.Row>

            <Form.Group id="formGridConfirmVisit">
                <Form.Check type="checkbox" label="Check for reminder notice prior to scheduled visit" />
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
            </Form>
            </Container>
            </Col>
            <Col xs={6} md={4}>
                <Row> Row 1</Row>
                <Row> Row 2</Row>
                <Row> Row 3</Row>
            </Col>
            </Row>
        );
    }
}

export default Visit;
