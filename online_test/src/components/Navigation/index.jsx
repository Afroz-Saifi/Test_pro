import React from "react";
import "./style.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <span>School Name</span>
      </div>
      <div className="navbar-right">
        <span>{"studentName"}</span>
        <button>LOGOUT</button>
      </div>
    </div>
  );
};

export default Navbar;
