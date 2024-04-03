import React from "react";
/** font awesome imports */
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";


import "./nav.css";
import SocialMedia from "../footer/SocialMedia";

const NavBar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-success bg-body-primary fixed-top">
        <div class="container-fluid container">
          <a class="navbar-brand" href="/">
            SB
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <FontAwesomeIcon icon={faBars} style={{ color: "#f9ab00" }} />
          </button>
          <div
            className="collapse navbar-collapse m-auto justify-content-between "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="./#home">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about-me">
                  About Me
                </Link>
              </li>
              <li class="nav-item">
                <Link className="nav-link" to="/my-cv">
                  Resume
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="./#showcases"                 
                >
                  My Portifolios
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="./#witnesses"                  
                >
                  My Testimonials
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact-me" aria-disabled="true">
                  Contact Me
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
              <SocialMedia />
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default NavBar;
