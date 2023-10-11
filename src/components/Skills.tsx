import React, { Component } from "react";
import "../styles/skills.css";
import bookshelves from "../img/House bookshelves-bro 1.png";
import typeWriterBro from "../img/Typewriter-bro 1.png";
import sharedGoals from "../img/Shared goals-bro 2.png";
import podcast from "../img/Podcast audience-bro 1.png";

export default class Skills extends Component {
  render() {
    return (
      <>
        <h1 className="text-center my-4 fw-bold">Skills</h1>
        <div className="grid-container">
          <div className="grid-item bg-body-secondary item1">
            <img src={sharedGoals} alt="sharedGoals" className="imgOne" />
          </div>
          <div className="grid-item bg-body-secondary item2">
            <img src={typeWriterBro} alt="typeWriterBro" className="imgTwo" />
          </div>
          <div className="grid-item bg-body-secondary item3">
            <img src={bookshelves} alt="bookshelves" className="imgThree" />
          </div>
          <div className="grid-item bg-body-secondary item4">
            <img src={podcast} alt="podcast" className="imgFour" />
          </div>
        </div>
      </>
    );
  }
}
