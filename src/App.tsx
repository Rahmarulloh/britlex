import React from "react";
import Header from "./components/Header";
import AboutUs from "./components/AboutUs";
import Skills from "./components/Skills";
import Pricing from "./components/pricing";
import "./styles/style.css";

function App() {
  return (
    <div className="App">
      <Header />
      <AboutUs />
      <Skills />
      <Pricing />
    </div>
  );
}

export default App;
