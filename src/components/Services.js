import React from "react";

const Services = () => {
  return (
    <section class="row" id="services">
      <div class="col-xs-12 section-container-spacer">
        <h1 class="section-heading">Services We Provide</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. <br />
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
          dolor sit amet, consectetur adipiscing elit.
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
          dolor sit amet, consectetur adipiscing elit.
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
          dolor sit amet, consectetur adipiscing elit.
        </p>
        <a href="./contact.html" class="btn btn-primary" title="">
          Get in touch
        </a>
      </div>
    </section>
  );
};

export default Services;
