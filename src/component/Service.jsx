import { React, useState } from 'react'
import { Link } from 'react-router-dom';
import Pdfcom from './Pdfcom';
const Service = () => {
    const [show, upshow] = useState({
        card1: "",
        card2: "",
        card3: "",
        card4:""

    });


    const Onshow = (id) => {
        let name = "active-pop"
        upshow({ [id]: name })
    }
    const close = (id) => {
        let name = "popup-view"
        upshow({ [id]: name })
    }
    return (
        <>
            <div className="container">


                <div className="justify-content-center text-center align-items-center ">

                    <div className="text-heading">
                        <h1>Popular Services</h1>
                       
                        <div className="product">
                            <div className="plancard p-0">
                                <div className="card-body p-0 align-items-center justify-content-center m-auto ">

                                    <h2 className="card-text ser" onClick={() => { Onshow("card1") }}>Exterior Cleaning</h2>
                                </div>
                            </div>
                            <div className="popup-view" id={show.card1}>
                                <div className="popup-card">
                                    <Link to="/" onClick={() => { close("card1") }}><i className="fas fa-times close-btn"></i></Link>
                                    <div className="product-img">
                                        <img src="imgs\service\1.png" alt="logo" />
                                    </div>
                                    <div className="info">
                                        <h2>Exterior wash<br /><span>Duration :- 45 min</span></h2>
                                        <ul>
                                            <li>Doorstep service</li>
                                            <li>High Pressure Wash</li>
                                            <li>Shampoo Cleaning</li>
                                            <li>Mate Cleaning</li>
                                            <li>Tyre Cleaning</li>
                                            <li>Tyre Polish</li>
                                            <li>Free Air Freshener</li>
                                            <li>Authorised Products</li>
                                        </ul>
                                        <span className="price">&#8377; 199/-</span>

                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="product">
                            <div className="plancard p-0 ">
                                <div className="card-body  align-items-center  ">

                                    <h2 className="card-text ser" onClick={() => { Onshow("card2") }}>Exterior & interior</h2>
                                </div>
                            </div>
                            <div className="popup-view" id={show.card2}>
                                <div className="popup-card">
                                    <Link to="/" onClick={() => { close("card2") }}><i className="fas fa-times close-btn"></i></Link>
                                    <div className="product-img">
                                        <img src="imgs\service\2.png" alt="logo" />
                                    </div>
                                    <div className="info">
                                        <h2>Exterior & interior Cleaning service.<br /><span>Duration :- 75 min</span></h2>
                                        <ul>
                                            <li>Doorstep service</li>
                                            <li>High Pressure Wash</li>
                                            <li>Mate Cleaning</li>
                                            <li>Shampoo Cleaning</li>
                                            <li>Vacuum cleaning</li>
                                            <li>Dashboard Cleaning</li>
                                            <li>Tyre Cleaning</li>
                                            <li>Tyre Polish</li>
                                            <li>Free Air Freshener</li>
                                            <li>Authorised Products</li>
                                        </ul>
                                        <span className="price">&#8377; 299/- </span>

                                    </div>
                                </div>
                            </div>
                        </div>




                        <div className="product">
                            <div className="plancard p-0">
                                <div className="card-body p-0 align-items-center justify-content-center m-auto ">

                                    <h2 className="card-text ser" onClick={() => { Onshow("card3") }}>Deep cleaning service.</h2>
                                </div>
                            </div>
                            <div className="popup-view" id={show.card3}>
                                <div className="popup-card">
                                    <Link to='/' onClick={() => { close("card3") }}><i className="fas fa-times close-btn"></i></Link>
                                    <div className="product-img">
                                        <img src="imgs\service\3.png" alt="logo" />
                                    </div>
                                    <div className="info">
                                        <h2>Deep cleaning service.<br /><span>Duration :- 90 min </span></h2>
                                        <ul>
                                            <li>Doorstep service</li>
                                            <li>High Pressure Wash</li>
                                            <li>Mate Cleaning</li>
                                            <li>Shampoo Cleaning</li>
                                            <li>Vacuum Cleaning</li>
                                            <li>Dashboard Cleaning</li>
                                            <li>Dashboard Polish</li>
                                            <li>Underbody Cleaning</li>
                                            <li>Tyre Cleaning</li>
                                            <li>Tyre Polish</li>
                                            <li>Free Air Freshener</li>
                                            <li>Authorised Products</li>
                                        </ul>
                                        <span className="price"> &#8377; 349/-</span>

                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="product">
                            <div className="plancard p-0">
                                <div className="card-body p-0 align-items-center justify-content-center m-auto ">

                                    <h2 className="card-text ser" onClick={() => { Onshow("card4") }}>Bike wash service</h2>
                                </div>
                            </div>
                            <div className="popup-view" id={show.card4}>
                                <div className="popup-card">
                                    <Link to='/' onClick={() => { close("card4") }}><i className="fas fa-times close-btn"></i></Link>
                                    <div className="product-img">
                                        <img src="imgs\service\bike.png" alt="logo" />
                                    </div>
                                    <div className="info">
                                        <h2>Bike wash service.<br /><span>Duration :- 30 min </span></h2>
                                        <ul>
                                            <li>Doorstep service</li>
                                            <li>High Pressure Wash</li>
                                        
                                            <li>Shampoo Cleaning</li>
                                           
                                            <li>Dashboard Polish</li>
                                            <li>Underbody Cleaning</li>
                                            <li>Tyre Cleaning</li>
                                            <li>Tyre Polish</li>
                                            <li>Authorised Products</li>
                                        </ul>
                                        <span className="price"> &#8377; 149/-</span>

                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>

                </div>

                
                </div>
<Pdfcom/>



        </>
    )
}
export default Service
