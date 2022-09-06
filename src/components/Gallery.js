import React from "react";

const Gallery = () => {
  return (
    <section id="gallery">
      <h1>Our Photography Gallery</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. <br />
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        ut aliquip ex ea commodo consequat.
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
  );
};

export default Gallery;
