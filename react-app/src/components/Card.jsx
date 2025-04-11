import React from "react";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import "./Card.css";

const Card = ({id, email, firstName, lastName, img}) => {
  const { setShowEditForm, setSelectedUser, setShowDeleteForm } = useContext(UserContext);

  const handleEdit = (event)=>{
    setShowEditForm(true);
    
    const userInfo = {
      id: id,
      email: email,
      firstName: firstName,
      lastName: lastName,
    }
    setSelectedUser(userInfo);
  };

  const handleDelete = (event)=>{
    setShowDeleteForm(true);

    const userInfo = {
      id: id,
      email: email,
      firstName: firstName,
      lastName: lastName,
    }
    setSelectedUser(userInfo);
  };

  return (
    <div className="card-container">
      <div className="avatar">
        <img src={img} className="avatar-img"/>
      </div>

      <div className="info">
        <div className="first-name"><span>First Name: </span>{firstName}</div>
        <div className="last-name"><span>Last Name: </span>{lastName}</div>
        
        <div className="buttons">
          <button onClick={handleEdit}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      </div>

    </div>
  );
};

export default Card;
