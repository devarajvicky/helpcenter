import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="nav-bar-container">
      <Link to="/" className="home-route">
        <div className="logo-container">
          <p>Abstarct</p>
          <p>|</p>
          <p>Help center</p>
        </div>
      </Link>
      <Link to="/reqest">
        <button className="button">Submit a request</button>
      </Link>
    </nav>
  );
}

export default Navbar;
