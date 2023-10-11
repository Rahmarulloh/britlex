import React, { Component } from "react";
import "../styles/aboutUs.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { AboutUsImg } from "../img";

class AboutUs extends Component {
  render(): React.ReactNode {
    return (
      <section className="aboutUs">
        <div className="aboutUs-left">
          <h2>About Us</h2>
          <p>
            The model offers a framework for discussing problems related <br />{" "}
            to the user's experience, as well as possible ways and means of{" "}
            <br /> solving them. Application development begins at the top level{" "}
            <br /> (strategy), where the future software product is described
            quite <br /> abstractly from the point of view of the expectations
            of both <br /> users and the customer.
          </p>
          <div className="aboutUs-nums">
            <span>
              <strong>800</strong>
              <p>Pupils</p>
            </span>
            <span>
              <strong>18</strong>
              <p>Teachers</p>
            </span>
            <span>
              <strong>6</strong>
              <p>Foreign language</p>
            </span>
          </div>
        </div>
        <div className="aboutUs-right">
          <AboutUsImg />
        </div>
      </section>
    );
  }
}

export default AboutUs;
