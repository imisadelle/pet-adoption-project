import React from "react";
import { Card, Button } from "react-bootstrap";
import "./PetListCards.css";

const PetListCardUI = ({ pet }) => {
  return (
    <div style={{ marginBottom: "2em" }}>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="src/images/ball.png" />
        <Card.Body>
          <Card.Title>{pet.name}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Pet Details</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default PetListCardUI;

{
  /* <div className="overflow">
        <img src="ball.npg" alt="" />
      </div>
      <div className="card-body text-dark">
        <h4 className="card-title">{pet.name}</h4>
        <img src="src/images/ball.png" alt="petlist-img" />
        <p className="card-text text-secondary">{pet.description}</p>
        <a href="#" className="btn btn-outline-success">
          Pet Details
        </a>
      </div> */
}
