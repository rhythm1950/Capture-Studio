import React from "react";

const Statistics = () => {
  return (
    <section class="row" id="contact">
      <div class="col-xs-12">
        <div class="section-container-spacer">
          <h1 class="section-heading">Get In Touch</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            <br />
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
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
  );
};

export default Statistics;
