import React from 'react';
import "../styles/pricing.css"
import img1 from "../img/Online test-bro 1.png"
import img2 from "../img/Lesson-bro 1.png"
import img3 from "../img/Webinar-bro 2.png"
class Pricing extends React.Component {
    render() {
        return (
            <div className='main'>
                <h1>Pricing</h1>
                <div className='boxes'>
                    <div className='box'>
                        <img style={{ marginBottom: 15 }} src={img1} alt="" />
                        <p>Self-study online course</p>
                        <span>Start learning English online in live classes with qualified EC teachers and students from all over the world.</span>
                        <div className='cost'>
                            <h3> £5.99</h3>
                            <span> per month</span>
                        </div>
                    </div>
                    <div className='box'>
                        <img style={{ marginBottom: 50 }} src={img2} alt="" />
                        <p>Live online classes</p>
                        <span>Interactive group classes with expert teachers. Free 7-day trial</span>
                        <div style={{ marginTop: 40 }} className='cost'>
                            <h3>  £12.99</h3>
                            <span> per month</span>
                        </div>
                    </div>
                    <div className='box'>
                        <img src={img3} alt="" />
                        <p>Personal Tuition</p>
                        <span>Online one-to-one English tutoring – enjoy our first session for only $1</span>
                        <div style={{ marginTop: 35 }} className='cost'>
                            <h3>  £20.99</h3>
                            <span> per month</span>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Pricing;