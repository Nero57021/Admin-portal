import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/SupportAdmin" className="navbar-brand">
          Support Admin
        </Link>
        <div className="collpase navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/SupportAdmin" className="nav-link">
                User Roles
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/user" className="nav-link">
                Create User
              </Link>
            </li>
            <li className="navbar-item">
            <Link to="/SupportAdmin" className="nav-link">
                Help desk
              </Link>
            </li>
            <li className="navbar-item">
              <Link onClick={event => window.location.href="/"} className="nav-link">Logout</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
