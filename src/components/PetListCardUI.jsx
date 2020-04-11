import React from "react";
import { Link } from 'react-router-dom'

const PetListCardUI = ({pet}) => {
  return (
    <div className="card text-center">
      <div className="overflow">
        <img src="ball.npg" alt="" />
      </div>
      <div className="card-body text-dark">
        <h4 className="card-title">Card Title</h4>
        <p className="card-text text-secondary">
          {pet.description}
        </p>
        <Link to={`/details/${pet.id}`} className="btn btn-outline-success">
          Go Anywhere
        </Link>
      </div>
    </div>
  );
};

export default PetListCardUI;
