import React from "react";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
      <div className="container">
        <Link className="navbar-brand fw-bold fs-4" to="/">
          Gadget Zone
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse mx-5"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link active fw-bold"
                aria-current="page"
                to="/brands"
              >
                Electronic Brands
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active fw-bold"
                aria-current="page"
                to="/"
              >
                | &nbsp;&nbsp;Local Stores
              </Link>
            </li>
          </ul>
          <div className="buttons">
            <a href="/" className="btn btn-outline-dark">
              <i className="fa fa-sign-in me-1"> Login</i>
            </a>
            <a href="/" className="btn btn-outline-dark ms-2">
              <i className="fa fa-user-plus me-1"> Register</i>
            </a>
            <a href="/" className="btn btn-outline-dark ms-2">
              <i className="fa fa-shopping-cart me-1"> Cart (0)</i>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
