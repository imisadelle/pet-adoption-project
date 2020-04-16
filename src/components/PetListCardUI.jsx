import React from "react";
import { Card, Button } from "react-bootstrap";
import "./PetListCards.css";
import { Link } from "react-router-dom";

const PetListCardUI = ({ pet }) => {
  return (
    <div className="card text-center" style={{ marginBottom: "2em" }}>
      <Card style={{ width: "22rem" }}>
        <Card.Img
          variant="top"
          src="https://media.istockphoto.com/photos/shelter-dog-picture-id547023642"
          alt="pet img api"
        />
        <Card.Body>
          <Card.Title>{pet.name}</Card.Title>
          <Link to={`/details/${pet.id}`} className="btn">
            Pet Details
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default PetListCardUI;
