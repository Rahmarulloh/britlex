import React, { Component } from "react";
import "../styles/aboutUs.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AboutUsImg from "../img/aboutUsImg.png";
class AboutUs extends Component {
    render(): React.ReactNode {
        return (
            <section className="aboutUs">
                <div className="aboutUs-headline">
                    <h2>About Us</h2>
                </div>
                <div className="aboutUs-main">
                    <div className="aboutUs-left">
                        <p>The model offers a framework for discussing problems related to the user's experience, as well as possible ways and means of solving them. Application development begins at the top level (strategy), where the future software product is described quite abstractly from the point of view of the expectations of both users and the customer.
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
                        <img src={AboutUsImg} alt="img" />
                    </div>
                </div>
            </section>
        )
    }
}

export default AboutUs;