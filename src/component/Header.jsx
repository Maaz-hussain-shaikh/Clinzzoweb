import React from 'react'
import Slider from "react-slick";

const Header = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5500,
    autoplaySpeed: 3000,
    cssEase: "linear"
  };
  return (<>

    <div className="container start-head">
      <div className="row">

        <div className="col-md-6 content-container">

          <div className="text-heading">
            <h2>Premium</h2>
            <h2>Car wash service </h2>
            <h2>at your Door-Step!</h2>
            <p>Services starting at <strong className="ff_mon_bold">₹149</strong></p>
            <div className="pt-sm-3 pt-2">
              <a href="https://wa.me/message/FRFY6XCZXXQKE1">


              <button className='button-86' >Book your Slot Now</button>
              </a>

            </div>

          </div>
        </div>

        <div className="col-md-6 image-container">
          <img src="imgs/PngItem_1952432.png" alt="Sample" />
        </div>
      </div>
    </div>
    <div className="centered-div">
      <div className='slider'>
        <Slider {...settings}>
          <div>
            <img src="imgs\src1.jpg" alt="src 1" />
          </div >
          <div>
            <img src="imgs\src2.jpg" alt="src 1" />
          </div>
          <div>
            <img src="imgs\src3.jpg" alt="src 1" />
          </div>
        </Slider>
      </div>

    </div>
    
  </>
  )
}

export default Header
