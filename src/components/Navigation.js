import React, { Component } from "react";
import logo from "../image/logo.png";
import { Link } from "react-router-dom";

export default class Navigation extends Component {
  render() {
    return (
      <nav>
        <div className="left">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="right">
          <Link to="/about">About</Link>
        </div>
      </nav>
    );
  }
}
