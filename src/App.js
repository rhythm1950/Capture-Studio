import React from "react";
import "./App.css";
import Header from "./components/Header";
import Gallery from "./components/Gallery";
import Services from "./components/Services";
import Contact from "./components/Contact";

const App = () => {
  return (
    <>
      <Header></Header>
      <main id="main-collapse">
        <Gallery></Gallery>
        <Services></Services>
        <Contact></Contact>
      </main>
    </>
  );
};

export default App;
