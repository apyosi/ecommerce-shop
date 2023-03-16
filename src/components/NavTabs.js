import React from "react";
import { NavLink } from "react-router-dom";

function NavTabs() {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark container-fluid">
      <div className="container-fluid">
        <div className="navbar-brand">
          Shop
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink to="/" className="nav-link p-2 m-1">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/products" className="nav-link p-2 m-1">
                Products
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/categories" className="nav-link p-2 m-1">
                Product Categories
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavTabs;
