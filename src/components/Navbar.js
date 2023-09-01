import React from "react";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg ">
      <div class="container-fluid">
        <a class="navbar-brand navbar-brand-custom" href="#">
          <img
            src="https://images.unsplash.com/photo-1451187863213-d1bcbaae3fa3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80"
            style={{ width: "20%", margin: "0px 10px" }}
          ></img>{" "}
          <span style={{ fontFamily: "Taviraj", fontWeight: "bold" }}>
            Bio Tech
          </span>
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
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul
            class="navbar-nav me-auto mb-2 mb-lg-0"
            style={{ gap: "40px", marginLeft: "40px" }}
          >
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="#">
                About Us
              </a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link active dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Services
              </a>
              <ul class="dropdown-menu">
                <li>
                  <link class="dropdown-item" to="/report">
                    Report Analyzer
                  </link>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Prescription Analyzer
                  </a>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="#">
                Posts
              </a>
            </li>
          </ul>
          <a class="navbar-brand navbar-brand-custom" href="#">
            <span style={{ fontFamily: "Taviraj", marginLeft: "25px" }}>
              Login
            </span>
            <i
              class="fa-solid fa-right-to-bracket"
              style={{ width: "20%", margin: "0px 10px" }}
            ></i>
          </a>
          <a
            class="navbar-brand navbar-brand-custom"
            href="#"
            style={{ backgroundColor: "rgba(0,0,0,0.7)",color:'white' }}
          >
            <span style={{ fontFamily: "Taviraj" }}>Sign Up</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
