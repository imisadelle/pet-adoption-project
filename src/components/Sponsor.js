import React, { Component } from 'react'
import { Form, Button, Col, Modal } from 'react-bootstrap'
import './Sponsor.css'

class Sponsor extends Component {

  state = {
    show: false
  }

  handleClose = () => {
    this.setState({ show: false })
  }

  handleShow = () => { 
    this.setState({ show: true })
  }

  render() { 
    return ( 
      <div className='sponsor-container'>
        <div className='sponsor-title'>Sponsor DOGNAME</div>
        
        <Form>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Email" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Name</Form.Label>
              <Form.Control type="name" placeholder="Name" />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>Address</Form.Label>
              <Form.Control type="address" placeholder="Address"/>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>State</Form.Label>
              <Form.Control as="select" >
                <option>Select State</option>
                <option>Florida</option>
              </Form.Control>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>ZipCode</Form.Label>
              <Form.Control placeholder='ZipCode'/>
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>Donation Amount</Form.Label>
              <Form.Control type="address" placeholder="Amount"/>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Credit Card</Form.Label>
              <Form.Control type='password' placeholder='Credit Card'/>
            </Form.Group>
          </Form.Row>

      
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Monthly Donation" />
          </Form.Group>

        </Form>

        <Button variant="primary" type="submit" onClick={this.handleShow}>
            Submit
          </Button>

          <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Body>Thank you for your donation!</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
      </div>
     );
  }
}
 
export default Sponsor;
