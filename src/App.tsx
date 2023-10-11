import React from "react";
import Header from "./components/Header";
import AboutUs from "./components/AboutUs";
// import Skills from "./components/Skills";

import "./styles/style.css";

function App() {
  return (
    <div className="App">
      <Header />
      <AboutUs />
      {/* <Skills /> */}
    </div>
  );
}

export default App;
