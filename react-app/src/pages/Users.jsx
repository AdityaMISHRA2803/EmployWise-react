import React from "react";
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card";
import EditUser from "../components/EditUser";
import DeleteUser from "../components/DeleteUser";
import "./Users.css";

const Users = () => {
  const [search, setSearch] = useState("");
  const [totalPages, setTotalPages] = useState(2);
  const [currPage, setCurrPage] = useState(1);
  const { users, setUsers, showEditForm, showDeleteForm } = useContext(UserContext);
  const navigate = useNavigate();
  
  // Token Checking Logic
  const token = sessionStorage.getItem("token");
  if (!token) {
    navigate("/");
  }

  // Fetch Users Data
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

  // Filter users on basis of search
  const filteredUsers = users.filter((user) =>
    user.first_name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      {/* ----------------------------------------Hero Section-------------------------------------------- */}
      <div className="users-hero">
        {/* --------------------------------Search and Title------------------------------ */}
        <div className="search-container">
          <h1>Users Dashboard</h1>
          <div className="search-box">
            <input
              type="text"
              id="search"
              name="search"
              placeholder="search by first name.."
              value={search}
              onChange={(event) => {
                setSearch(event.target.value);
              }}
            />
            <button>Search By First Name</button>
          </div>
        </div>

        {/* ----------------------------------List Of Users------------------------------ */}
        <div className="users-container">
          <div className="users-box">
            {filteredUsers.map(user => (
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
      { showDeleteForm && <DeleteUser /> }
      
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
