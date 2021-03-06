import React, { useEffect } from "react";
import "./Navigationbar.css";
function Navbar(props) {
  let isAdmin = props.user.userDetails.isAdmin; //conditional rendering value for showing the admin panel.
  let userName = props.user.userDetails.email;
  let cartLength = props.user.userDetails.cart.length;
  return (
    <div className="Navigation-bar">
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <a className="navbar-brand" href="/">
          Fashion Ecommerce
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              {userName !== null ? (
                <a className="nav-link" href="/">
                  welcome {userName}
                </a>
              ) : (
                <a className="nav-link" href="/login">
                  Log in
                </a>
              )}
            </li>
            {isAdmin ? (
              <li className="nav-item">
                <a className="nav-link" href="/admin">
                  Admin Panel
                </a>
              </li>
            ) : (
              <></>
            )}
            <div className="cartDetails">
              {cartLength !== null && cartLength !== undefined ? (
                <h6>number of orders : {cartLength}</h6>
              ) : (
                <></>
              )}
            </div>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
