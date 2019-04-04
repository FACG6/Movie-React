import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

const Navbar = props => (
  <Router>
    <nav className="navbar">
      <Link className="navbar-brand" to="/">
        Home
      </Link>
      <div className="navbar-collapse">
        <ul className="navbar-ul">
          <li className="nav-item">
            <Link className="nav-link" to="/search">
              Search
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/move-list">
              Movie List
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  </Router>
);
export default Navbar;
