import React from "react";
import "./App.css";

const App = () => {
  return (
    <>
      {/* <!-- Nav & Sidebar --> */}
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

      <main id="main-collapse">
        {/* <!-- Gallery section --> */}
        <section id="gallery">
          <h1>Our Photography Gallery</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. <br />
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </p>
          <div class="container-all">
            <div class="container">
              <img src="./assets/images/2.jpg" alt="capture-studio" />
              <span class="title">Pom Island, Malaysia</span>
              <span class="text">Discover more</span>
            </div>

            <div class="container">
              <img src="./assets/images/3.jpg" alt="capture-studio" />
              <span class="title">El Nido, Philippines</span>
              <span class="text">Discover more</span>
            </div>

            <div class="container">
              <img src="./assets/images/4.jpg" alt="capture-studio" />
              <span class="title">Railay Beach, Thailand</span>
              <span class="text">Discover more</span>
            </div>

            <div class="container">
              <img src="./assets/images/10.jpg" alt="capture-studio" />
              <span class="title">Alappuzha, India</span>
              <span class="text">Discover more</span>
            </div>

            <div class="container">
              <img src="./assets/images/9.jpg" alt="capture-studio" />
              <span class="title">Los Angeles, USA</span>
              <span class="text">Discover more</span>
            </div>

            <div class="container">
              <img src="./assets/images/6.jpg" alt="capture-studio" />
              <span class="title">Miyako Island, Japan</span>
              <span class="text">Discover more</span>
            </div>

            <div class="container">
              <img src="./assets/images/7.jpg" alt="capture-studio" />
              <span class="title">Nyang Beach, Bali</span>
              <span class="text">Discover more</span>
            </div>

            <div class="container">
              <img src="./assets/images/8.jpg" alt="capture-studio" />
              <span class="title">Koh Yao Yai, Thailand</span>
              <span class="text">Discover more</span>
            </div>

            <div class="container">
              <img src="./assets/images/5.jpg" alt="capture-studio" />
              <span class="title">Pink Beach, Indonesia</span>
              <span class="text">Discover more</span>
            </div>
          </div>
        </section>

        {/* <!-- Services section --> */}
        <section class="row" id="services">
          <div class="col-xs-12 section-container-spacer">
            <h1 class="section-heading">Services We Provide</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. <br />
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          <div class="col-xs-12 col-md-4 section-container-spacer">
            <img
              class="img-responsive mb-4"
              alt="capture-studio"
              src="./assets/images/13.jpg"
            />
            <h5>Portrait Photography</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem
              ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <a href="./contact.html" class="btn btn-primary" title="">
              Get in touch
            </a>
          </div>

          <div class="col-xs-12 col-md-4 section-container-spacer">
            <img
              class="img-responsive mb-4"
              alt="capture-studio"
              src="./assets/images/17.jpg"
            />
            <h5>Photojournalism</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem
              ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <a href="./contact.html" class="btn btn-primary" title="">
              Get in touch
            </a>
          </div>

          <div class="col-xs-12 col-md-4 section-container-spacer">
            <img
              class="img-responsive mb-4"
              alt="capture-studio"
              src="./assets/images/18.jpg"
            />
            <h5>Fashion Photography</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem
              ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <a href="./contact.html" class="btn btn-primary" title="">
              Get in touch
            </a>
          </div>
        </section>

        {/* <!-- Contact section --> */}
        <section class="row" id="contact">
          <div class="col-xs-12">
            <div class="section-container-spacer">
              <h1 class="section-heading">Get In Touch</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                <br />
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>

            <div class="section-container-spacer">
              <form action="" class="reveal-content">
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <input
                        type="email"
                        class="form-control"
                        id="email"
                        placeholder="Email"
                      />
                    </div>
                    <div class="form-group">
                      <input
                        type="text"
                        class="form-control"
                        id="subject"
                        placeholder="Subject"
                      />
                    </div>
                    <div class="form-group">
                      <textarea
                        class="form-control"
                        rows="3"
                        placeholder="Enter your message"
                      ></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary">
                      Send
                    </button>
                  </div>

                  <div class="col-md-6">
                    <ul class="list-unstyled address-container">
                      <li>
                        <span class="fa-icon">
                          <i class="fa fa-phone" aria-hidden="true"></i>
                        </span>
                        +1 3466 3477
                      </li>
                      <li>
                        <span class="fa-icon">
                          <i class="fa fa-at" aria-hidden="true"></i>
                        </span>
                        capture@studio.com
                      </li>
                      <li>
                        <span class="fa-icon">
                          <i class="fa fa fa-map-marker" aria-hidden="true"></i>
                        </span>
                        Barrington Oaks Austin, TX 78759
                      </li>
                    </ul>

                    <h3>Follow us on social networks</h3>
                    <a
                      href="https://www.linkedin.com/in/shahriar-rhythm/"
                      title=""
                      class="fa-icon"
                    >
                      <i class="fa-brands fa-facebook"></i>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/shahriar-rhythm/"
                      title=""
                      class="fa-icon"
                    >
                      <i class="fa-brands fa-twitter"></i>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/shahriar-rhythm/"
                      title=""
                      class="fa-icon"
                    >
                      <i class="fa-brands fa-linkedin"></i>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/shahriar-rhythm/"
                      title=""
                      class="fa-icon"
                    >
                      <i class="fa-brands fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default App;