import React from "react";
import "../App.css";
function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top border-bottom border-1">
      <div class="container p-1">
        <a class="navbar-brand" href="/">
          <img
            src="media/images/logo.svg"
            alt="logo"
            style={{ width: "30%" }}
          />
        </a>
        <button
          class="navbar-toggler ms-auto order-lg-2"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse order-lg-1" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/signup">
                Signup
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/about">
                About
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/products">
                Products
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/pricing">
                Pricing
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/support">
                Support
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
