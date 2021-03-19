import React, { Component } from "react";
import "./navbar.css";

class Navbar extends Component {
  render() {
    return (
      <div>
        <ul id="nav">
          <li>
            <a href="#">Main</a>
          </li>
          <li>
            <a href="#">Individual Champions and Matchups</a>
          </li>
          <li>
            <a href="#">Tier List</a>
          </li>
          <li>
            <a href="#">FAQ</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
