import { React, useState } from 'react'

const Process = () => {
    return (
        <>
            
            <div className="container">
                <div className="row steps-circles pb-md-5 pt-md-3">
                    <div className="col-12 text-heading text-center pb-md-5">
                        <h2>How it Works</h2>
                    </div>
                    <div className="line col-lg-4 col-md-12 col-12 mt-lg-0 mt-md-4 mt-4  d-flex flex-column justify-content-center align-items-center">
                        <div className="steps service_img">
                        <img src="imgs\service\smartphone.png" alt="Affordable"/>
                        </div>
                        <div className="text-heading text-center mt-3">
                            <h4>Select a Service</h4>
                            <p>Select among <strong>10+ services for <br /> your car care.</strong></p>
                        </div>
                    </div>
                    <div className="line col-lg-4 col-md-12 col-12 mt-lg-0 mt-md-4 mt-4  d-flex flex-column justify-content-center align-items-center">
                        <div className="steps service_img">
                        <img src="imgs\service\calendar.png" alt="Affordable"/>
                        </div>
                        <div className="text-heading text-center mt-3">
                            <h4>Book a Slot</h4>
                            <p>Easily schedule your Clinzzo <br /> service just One <strong>Call</strong></p>
                        </div>
                    </div>
                    <div className=" col-lg-4 col-md-12 col-12 mt-lg-0 mt-md-4 mt-4  d-flex flex-column justify-content-center align-items-center">
                        <div className="steps service_img">
                        <img src="imgs\service\home.png" alt="Affordable"/>
                        </div>
                        <div className="text-heading text-center mt-3">
                            <h4>Door-step Care</h4>
                            <p>Our Clinzzo buddy come with our<br />  cleaning toolsat your <strong>Doorstep </strong></p>
                        </div>
                    </div>
                </div>
            </div>




        </>
    )
}

export default Process
