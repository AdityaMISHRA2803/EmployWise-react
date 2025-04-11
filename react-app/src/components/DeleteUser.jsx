import React from 'react'
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import "./EditUser.css";
import "./Card.css";
import "./DeleteUser.css";

const DeleteUser = () => {
  const { selectedUser, setShowDeleteForm } = useContext(UserContext);

  const handleNo = (event)=>{
    setShowDeleteForm(false);
  };

  const handleYes = (event)=>{
    console.log(selectedUser);
  };
  
  return (
    <div className='popup-container'>
      <div className="popup-box">
        <p className='delete-text'>Do you really want to delete the user?</p>
        <div className="buttons delete-buttons">
          <button onClick={handleYes}>Yes</button>
          <button onClick={handleNo}>No</button>
        </div>
      </div>
    </div>
  )
}

export default DeleteUser