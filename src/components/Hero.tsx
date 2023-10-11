import React, { Component } from "react";
import { HeroImg, LampImg } from "../img";
import "../styles/hero.css";

export default class Hero extends Component {
  render() {
    return (
      <div className="hero">
        <div className="hero-context">
          <h2 className="hero-title">
            <span>Learn</span>
            <span>Any Foreign</span>
            <span>Language</span>
          </h2>
          <LampImg />
          <p className="hero-desc">
            With our teachers who write a program for each student, you will be
            able to make your first sketch after the first lesson.
          </p>

          <button className="btn-hero">Get started</button>
        </div>

        <div className="hero-image">
          <HeroImg />
        </div>
      </div>
    );
  }
}
