import React from 'react'
import { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";
import axios from "axios";
import "./EditUser.css";
import "./Card.css";

const EditUser = () => {
  // In selectedUser we have the actual userInfo 
  const { users, setUsers, selectedUser, setShowEditForm } = useContext(UserContext);

  // In email, firstName, lastName we have the user info that is to be updated
  const [ email, setEmail ] = useState(selectedUser.email);
  const [ firstName, setFirstName ] = useState(selectedUser.firstName);
  const [ lastName, setLastName ] = useState(selectedUser.lastName);

  const handleSubmit = async (event)=>{
    try {
      event.preventDefault();

      // Perform E-Mail Validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;    
      if (!emailRegex.test(email)) {
        alert("Please enter a valid email address");
        return;
      }

      // Update users list
      const updatedUsers = users.map((user)=>{
        if(user.id == selectedUser.id){
          return {
            ...user,
            email: email,
            first_name: firstName,
            last_name: lastName,
          };
        }
        return user;
      })
      setUsers([...updatedUsers]);

      // Call the PUT /api/users/{id} request
      const userInfo = {
        email: email,
        first_name: firstName,
        last_name: lastName,
      }

      const response = await axios.put("https://reqres.in/api/users/" + selectedUser.id, userInfo)
      console.log("Update Successful!")
      setShowEditForm(false);
      alert("Update Successful!")
      console.log(response.data)

    }catch (error){
      console.log("Error: ", error)
      alert("Update Failed!")
    }
  }

  const handleClose = ()=>{
    setShowEditForm(false);
  }

  return (
    <div className="popup-container">
        <div className="popup-box">
          <h1>Edit User</h1>

          <form onSubmit={handleSubmit}>
            <label htmlFor="editEmail">Email</label>
            <input 
              type="text" 
              id="editEmail"
              name="editEmail"
              value={email}
              onChange={(event)=>{setEmail(event.target.value)}} 
              required 
            />
                
            <label htmlFor="firstName">First Name</label>
            <input 
              type="text" 
              id="firstName"
              name="firstName"
              value={firstName}
              onChange={(event)=>{setFirstName(event.target.value)}} 
              required 
            />

            <label htmlFor="lastName">Last Name</label>
            <input 
              type="text" 
              id="lastName"
              name="lastName"
              value={lastName}
              onChange={(event)=>{setLastName(event.target.value)}} 
              required 
            />

            <div className="buttons">
              <button type="submit">Save</button>
              <button onClick={handleClose}>Close</button>
            </div>

          </form>
        </div>
    </div>
  )
}

export default EditUser