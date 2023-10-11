import React from "react";
import Header from "./components/Header";
import AboutUs from "./components/AboutUs";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
// import Pricing from "./components/pricing";
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
      <Footer />
    </div>
  );
}

export default App;
