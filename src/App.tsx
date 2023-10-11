import React from "react";
import Header from "./components/Header";
import AboutUs from "./components/AboutUs";
import Skills from "./components/Skills";
import Pricing from "./components/pricing";
import ContactUs from "./components/ContactUs";

import "./styles/style.css";

function App() {
  return (
    <div className="App container-fluid">
      <Header />
      <Skills />
      <AboutUs />
      <Pricing />
      <ContactUs />
    </div>
  );
}

export default App;
