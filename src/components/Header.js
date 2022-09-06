import React from "react";

const Header = () => {
  return (
    <header>
      <div class="navbar navbar-default visible-xs">
        <button type="button" class="navbar-toggle collapsed">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a href="./index.html" class="navbar-brand">
          Capture Studio
        </a>
      </div>

      <nav class="sidebar">
        <div class="navbar-collapse" id="navbar-collapse">
          <div class="site-header hidden-xs">
            <img
              src="./assets/images/logo.png"
              alt="capture-studio"
              class="site-logo"
            />
            <a class="site-brand" href="./index.html">
              Capture Studio
            </a>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor.
            </p>
          </div>

          <ul class="nav">
            <li>
              <a href="#gallery">Gallery</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <a href="#services">About Us</a>
            </li>
            <li>
              <a href="#contact">Booking</a>
            </li>
          </ul>

          <nav class="nav-footer">
            <p class="nav-footer-social-buttons">
              <a class="fa-icon" href="https://shahriarrhythm.com/" title="">
                <i class="fa-brands fa-facebook"></i>
              </a>
              <a class="fa-icon" href="https://shahriarrhythm.com/" title="">
                <i class="fa-brands fa-twitter"></i>
              </a>
              <a class="fa-icon" href="https://shahriarrhythm.com/" title="">
                <i class="fa-brands fa-linkedin"></i>
              </a>
              <a class="fa-icon" href="https://shahriarrhythm.com/" title="">
                <i class="fa-brands fa-instagram"></i>
              </a>
            </p>
            <p>
              Capture Studio © 2020 | Developed by
              <a href="https://shahriarrhythm.com/">Shahriar Rhythm</a>
            </p>
          </nav>
        </div>
      </nav>
    </header>
  );
};

export default Header;
