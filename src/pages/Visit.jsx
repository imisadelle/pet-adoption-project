import React, { Component } from 'react';
import {
    Container,
    Form,
    Col,
    Button 
    }from 'react-bootstrap'


class Visit extends Component {
    render() {
        return (
            
            // <div>
            //     <h1>Insert Image of Selected Pet</h1>
            //     <h2>Insert Name of selected Pet</h2>
            //     <br>
            //     </br>
            //     <h1>Schedule a Virtual Pet Visit</h1>
            // </div>
            <Container>
            <br>
            </br>
            <div>
                <h2>Complete form to schedule a Virtual Visit with this pet</h2>
            </div>
            <Form>
            <Form.Row>
                <Form.Group as={Col} controlId="tempfield">
                <Form.Label>Pet Image Display</Form.Label>
                <Form.Control type="fname" placeholder="Add Image Event Listener Here" />
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
                <Form.Control as="select" value="Choose...">
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
        );
    }
}

export default Visit;
