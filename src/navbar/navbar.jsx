import React from "react"
import "./navbar.css";
import logo from "../assets/logo.svg"

function Navbar() {
  return (
    <nav className="navbar">
      <div className="leftBar">
        <img src={logo} alt="logo" />
      </div>
      <div className="middleBar">
        <ul className="middleContent">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Blog</li>
          <li>Careers</li>
        </ul>
      </div>
      <div className="rightBar">
        <button className="registerButton">Request Invite</button>
      </div>
    </nav>
  )
}

export default Navbar;