import React, { Component } from "react";
import "../styles/contactUs.css";
import { ContactUsImg } from "../img";

export default class ContactUs extends Component {
  render() {
    return (
      <div className="contactUs">
        <div className="contactUs-image">
          <ContactUsImg />
        </div>

        <div className="contactUs-context">
          <h2 className="contactUs-title">Contact Us</h2>

          <p className="contactUs-desc">
            Discover your current English level by taking our free online
            English test.Sign up to our newsletter for learning tips and free
            resources
          </p>

          <div className="contactUs-form">
            <input
              type="email"
              className="form-email"
              placeholder="Enter your E-mail"
            />

            <button className="form-btn">Subscribe</button>
          </div>
        </div>
      </div>
    );
  }
}
