import React from "react";
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { UserContext } from "../context/UserContext";
import Card from "../components/Card";
import EditUser from "../components/EditUser";
import "./Users.css";

const Users = () => {
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState([]);
  const [totalPages, setTotalPages] = useState(2);
  const [currPage, setCurrPage] = useState(1);
  const { showEditForm } = useContext(UserContext);
  
  useEffect(()=>{
    const fetchData = async ()=>{

      try {
        const response = await axios.get(`https://reqres.in/api/users?page=${currPage}`);
        setTotalPages(response.data.total_pages);
        setUsers(response.data.data);

      } catch (error){
        console.log("Error: ", error);
        alert("Cannot Fetch Users!");
      }
    }

    fetchData();
  },[currPage]);

  return (
    <div className="container">
      {/* ----------------------------------------Hero Section-------------------------------------------- */}
      <div className="users-hero">
        {/* --------------------------------Search and Title------------------------------ */}
        <div className="search-container">
          <h1>Users Dashboard</h1>
          <div>
            <input
              type="text"
              id="search"
              name="search"
              value={search}
              onChange={(event) => {
                setSearch(event.target.value);
              }}
            />
            <button>Search</button>
          </div>
        </div>

        {/* ----------------------------------List Of Users------------------------------ */}
        <div className="users-container">
          <div className="users-box">
            {users.map(user => (
              <Card 
                key={user.id}
                id={user.id}
                email={user.email}
                firstName={user.first_name}
                lastName={user.last_name}
                img={user.avatar}
              />
            ))}
          </div>
        </div>
      </div>

      {/* ---------------------------------------------Pop Up---------------------------------------- */}
      { showEditForm && <EditUser /> } 
      
      {/* ---------------------------------------------Pagination---------------------------------------- */}
      <div className="pagination">
          <p>Pages: </p>
          {
            Array.from({length: totalPages}, (_, i)=>(
              <button key={i+1} onClick={()=> setCurrPage(i+1)}>
                {i+1}
              </button>
            ))
          } 
          <p>Showing Page {currPage} of {totalPages}</p>
      </div>

      {/* ------------------------------------------Footer Section--------------------------------------- */}
      <div className="footer-container">
        <div className="footer-items">
          <div className="item1">Help Center</div>
          <div className="item2">Terms Of Service</div>
          <div className="item3">Privacy Policy</div>
          <div className="item4">@2025EmployWise</div>
        </div>
      </div>
    </div>
  );
};

export default Users;
