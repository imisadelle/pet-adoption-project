import React from "react";

const Card = props => {
  return (
    <div className="card text-center">
      <div className="overflow">
        <img src="ball.npg" alt="" />
      </div>
      <div className="card-body text-dark">
        <h4 className="card-title">Card Title</h4>
        <p className="card-text text-secondary">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id dicta
          adipisci dignissimos, corporis quae eius asperiores repellendus
          laboriosam molestiae alias!
        </p>
        <a href="#" className="btn btn-outline-success">
          Go Anywhere
        </a>
      </div>
    </div>
  );
};

export default Card;
