import React from "react";
import "./Card.css";

const Card = ({id, email, firstName, lastName, img}) => {
  return (
    <div className="card-container">
      <div className="avatar">
        <img src={img} className="avatar-img"/>
      </div>

      <div className="info">
        <div className="first-name"><span>First Name: </span>{firstName}</div>
        <div className="last-name"><span>Last Name: </span>{lastName}</div>
        
        <div className="buttons">
          <button>Edit</button>
          <button>Delete</button>
        </div>
      </div>

    </div>
  );
};

export default Card;
