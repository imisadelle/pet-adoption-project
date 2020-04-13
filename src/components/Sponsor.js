import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Form, Button, Col, Modal } from 'react-bootstrap'
import './Sponsor.css'

const Sponsor= ({ pet }) => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let {id} = useParams()
  const pets = pet.filter(pet => id == pet.id)

    return ( 
      <div className='sponsor-container'>
        <div className='sponsor-title'>Sponsor {pets[0].name}</div>
        
        <Form onSubmit={handleShow}>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Email" required={true}/>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Name</Form.Label>
              <Form.Control type="name" placeholder="Name" required={true} />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridAdress">
              <Form.Label>Address</Form.Label>
              <Form.Control type="address" placeholder="Address" required={true}/>
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
              <Form.Control placeholder='ZipCode' required={true}/>
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>Donation Amount</Form.Label>
              <Form.Control type="number" placeholder="Amount" required={true}/>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridCC">
              <Form.Label>Credit Card</Form.Label>
              <Form.Control type='password' placeholder='Credit Card' required={true}/>
            </Form.Group>
          </Form.Row>

      
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Monthly Donation" />
          </Form.Group>

          <Button variant="primary" type="submit" onClick={handleShow}>
            Submit
          </Button>
        </Form>

        <Modal show={show} onHide={handleClose}>
          <Modal.Body>Thank you for your donation!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
     );
}
 
export default Sponsor;
