import React    from "react";


import { Link } from "react-router-dom";

export default function HeaderBar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
        <span className="navbar-brand mb-0 h1">Name List</span>
        <ul className="navbar-nav">
          <Link to="/home">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Home
              </a>
            </li>
          </Link>
          <Link to="/about">
            <li className="nav-item">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
          </Link>
          <Link to="/">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Show Name List
              </a>
            </li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}
