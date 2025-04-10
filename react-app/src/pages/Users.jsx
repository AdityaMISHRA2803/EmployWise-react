import React from "react";
import { useState } from "react";
import Card from "../components/Card";
import "./Users.css";

const Users = () => {
  const [search, setSearch] = useState("");
  const [totalPages, setTotalPages] = useState(2);
  const [currPage, setCurrPage] = useState(1);

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
            <Card
              id="7"
              email="michael.lawson@reqres.in"
              firstName="Michael"
              lastName="Lawson"
              img="https://reqres.in/img/faces/7-image.jpg"
            />
            <Card
              id="7"
              email="michael.lawson@reqres.in"
              firstName="Michael"
              lastName="Lawson"
              img="https://reqres.in/img/faces/7-image.jpg"
            />
          </div>
        </div>
      </div>
      
      {/* ---------------------------------------------Pagination---------------------------------------- */}
      <div className="pagination">
          <p>Pages: </p>
          <button>1</button>
          <button>2</button>
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
