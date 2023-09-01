import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");

  return (
    <nav class="navbar navbar-expand-lg ">
      <div class="container-fluid">
        <Link class="navbar-brand navbar-brand-custom" to="/">
          <img src={logo} style={{ width: "20%", margin: "0px 10px" }}></img>{" "}
          <span style={{ fontFamily: "Taviraj", fontWeight: "bold" }}>
            Bio Tech
          </span>
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul
            class="navbar-nav me-auto mb-2 mb-lg-0"
            style={{ gap: "40px", marginLeft: "40px" }}
          >
            <li class="nav-item">
              <Link className={splitLocation[1] === "" ? "nav-link active" : "nav-link"} to="/">
                Home
              </Link>
            </li>
            <h3>/</h3>
            <li class="nav-item">
              <Link className={splitLocation[1] === "about" ? "nav-link active" : "nav-link"} to="/about">
                About Us
              </Link>
            </li>
            <h3>/</h3>
            <li class="nav-item dropdown">
              <Link
                class="nav-link active dropdown-toggle"
                className={splitLocation[1] === "" ? "nav-link dropdown-toggle" : "nav-link dropdown-toggle"}
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Services
              </Link>
              <ul class="dropdown-menu">
                <li>
                  <Link class="dropdown-item" to="/report">
                    Report Analyzer
                  </Link>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Prescription Analyzer
                  </a>
                </li>
              </ul>
            </li>
            <h3>/</h3>
            <li class="nav-item">
              <Link className={splitLocation[1] === "posts" ? "nav-link active" : "nav-link"} to="/posts">
                Posts
              </Link>
            </li>
            <h3>/</h3>
            <li class="nav-item">
              <Link className={splitLocation[1] === "faq" ? "nav-link active" : "nav-link"} to="/faq">
                Ask Q's
              </Link>
            </li>
          </ul>
          <Link class="navbar-brand navbar-brand-custom" to="/login">
            <span style={{ fontFamily: "Taviraj", marginLeft: "25px" }}>
              Login
            </span>
            <i
              class="fa-solid fa-right-to-bracket"
              style={{ width: "20%", margin: "0px 10px" }}
            ></i>
          </Link>
          <Link
            class="navbar-brand navbar-brand-custom"
            to="/register"
            style={{ backgroundColor: "rgba(0,0,0,0.7)", color: "white" }}
          >
            <span style={{ fontFamily: "Taviraj" }}>Sign Up</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
