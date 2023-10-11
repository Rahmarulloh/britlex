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
            <h3 className="my-2 fw-bold">Speaking</h3>
            <p className="text-secondary fw-normal fs-6">
              Improve your English skills and confidence. Live classes and
              interactive lessons online. 20% extra free for a limited time only
            </p>
            <p className="text-secondary fw-normal fs-6 my-4">
              Learn English online and improve your skills through our
              high-quality courses and resources – all designed for adult
              language learners.
            </p>
            <div className="w-100 d-flex align-items-center py-3 btnContainerItem">
              <button className="btn btn-dark fs-4 px-5 py-3 fw-semibold">
                Learn More
              </button>
            </div>
          </div>
          <div className="grid-item bg-body-secondary item2">
            <img src={typeWriterBro} alt="typeWriterBro" className="imgTwo" />
            <h3 className="my-2 fw-bold">Writing</h3>
            <p className="text-secondary fw-normal fs-6">
              One of the most important and extensive areas of natural science,
              the science that studies substances, also their composition
            </p>
            <div className="w-100 d-flex align-items-center py-3 btnContainerItem">
              <button className="btn btn-dark fs-4 px-5 py-3 fw-semibold">
                Learn More
              </button>
            </div>
          </div>
          <div className="grid-item bg-body-secondary item3">
            <img src={bookshelves} alt="bookshelves" className="imgThree" />
            <h3 className="my-2 fw-bold">Reading</h3>
            <p className="text-secondary fw-normal fs-6">
              perception and response actions of the user resulting from the use
              and/or up coming use of the product, system or service
            </p>
            <div className="w-100 d-flex align-items-center py-3 btnContainerItem">
              <button className="btn btn-dark fs-4 px-5 py-3 fw-semibold">
                Learn More
              </button>
            </div>
          </div>
          <div className="grid-item bg-body-secondary item4">
            <img src={podcast} alt="podcast" className="imgFour" />
            <div className="d-flex flex-column align-items-start justify-content-center ps-md-4">
            <h3 className="my-2 fw-bold fw-6">Listening</h3>
            <p className="text-secondary fw-normal fs-6">
              Here you can find activities to practise your listening skills.
              Listening will help you to improve your understanding
            </p>
            <div className="w-100 d-flex align-items-center py-3 btnContainerItem">
              <button className="btn btn-dark fs-4 px-5 py-3 fw-semibold">
                Learn More
              </button>
            </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
