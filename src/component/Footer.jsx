import React, { useState } from 'react'
import Faq from './Faq'
import { Link} from 'react-router-dom'
const faq = [
    {
        question: "Do I need to bring my car to your location for a car wash?",
        ans: "No, you don't need to go anywhere to have your car washed. We offer a convenient doorstep car wash service where our professional car washers will come to your location and wash your car. With our service, you can enjoy a hassle-free car wash experience without leaving the comfort of your home or office."
    },
    {
        question: "What if I'm not satisfied with the service?",
        ans: "We are committed to providing the highest level of service to our valued customers. In line with our commitment, we offer a 100% satisfaction guarantee. If for any reason you are not completely satisfied with our service, please do not hesitate to contact us. We will work with you to resolve any issues and ensure that you are fully satisfied with our service. Our goal is to exceed your expectations and to provide you with a hassle-free and enjoyable experience every time."
    }, {
        question: "Do I need to provide anything for the doorstep car wash service?",
        ans: "Yes, The Clinzzo buddy will bring all the necessary equipment, Excluding water and power source. You need to provide access to a water source and power source"
    }
    , {
        question: "How long does it take to wash a car using a doorstep car wash service?",
        ans: "The time it takes to wash a car using a doorstep car wash service can vary depending on the type of service you select and the condition of your car. However, most car wash services typically take around 30 minutes to 1 hour."
    }
]
const Footer = () => {
    const [term, upterm] = useState("popup-view");
    const btn = (term) => {
        if (term === "popup-view") {
            upterm("active-pop")
        } else {
            upterm("popup-view")
        }
    }
    return (
        <>

            <div className=" col-lg-6 py-5 m-auto ">
                <div className="text-heading text-center">
                    <h2 className="mx-auto">FAQS?</h2>
                </div>
                {
                    faq.map((elem, index) => {
                        return (
                            <>
                                <Faq question={faq[index].question} ans={faq[index].ans} />
                            </>
                        )
                    })
                }

            </div>
            <div className='social-sec'>
                <div className="socials-icon d-flex gap-3 ">
                <div>
                        <a className="text-decoration-none" href="https://instagram.com/clinzzo?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D">
                            <i className="fa-brands fa-instagram" ></i>
                        </a>
                    </div>
                    <div>
                        <a className="text-decoration-none" href="https://www.facebook.com/Clinzzoindia/">
                            <i className="fa-brands fa-facebook"  ></i>
                        </a>
                    </div>
                    
                    <div>
                        <a className="text-decoration-none" href="mailto:clinzzo.care@gmail.com">
                            <i className="fa-solid fa-envelope" ></i>
                        </a>
                    </div>
                    <div>
                        <a className="text-decoration-none" href="https://wa.me/message/FRFY6XCZXXQKE1">
                            <i className="fa-brands fa-whatsapp" ></i>
                        </a>
                    </div>
                </div>
            </div>
            <div className="mt-4 justify-content-center text-center align-items-center">
               
               <h6 style={{cursor:"pointer"}} onClick={() => { btn(term) }}>Terms and Conditions</h6>
        
       </div> 
            <div className="product">

                <div className="popup-view" id={term}>
                    <div className="popup-card2">
                        <div className="info">
                            <Link to="/" onClick={() => { btn(term) }}><i className="fas fa-times close-btn"></i></Link>
                            <h2>Term Of a Service</h2>
                            <ul>
                                <li>You can Book your slot by just 100rs Only</li>
                                <li>Customer are responsible For providing  a water source and Power source and unlock the car for assigned service partner.</li>
                                <li>You must provide a safe and accessible location for us to wash your car</li>
                                <li>Payment is required at the time of service.</li>
                                <li>₹100/- cancellation fee will be charged for confirm bookings if a service partner has been assigned.</li>
                                <li>Parking under the shade with ample space around the vehicle is advisable for batter cleaning</li>
                                <li>Any personal information collected during booking will be used for service purposes only.</li>
                                <li>We may use photos of your car on our website and social media for promotional purposes.</li>
                                <li>We reserve the right to refuse service to anyone for any reason.</li>
                                <li>Our car wash service is provided as is, without any warranties.</li>
                                <li>We are not responsible for any damage to your vehicle during the cleaning process.</li>
                                <li>We are not responsible for any lost or stolen items inside your car.</li>
                                <li>We may change these terms and conditions at any time without notice.</li>
                            </ul>


                        </div>
                    </div>
                </div>
            </div>
            <div className="button-container">
                <a href="https://wa.me/message/FRFY6XCZXXQKE1">

                <button className="button-1">Book Your Wash Now</button>             
                </a>

            </div>
            <div>
                <img src="imgs\blackwave.svg" alt="" />
            </div>




        </>
    )
}

export default Footer
