import React from 'react'
import About from '../About'
import Introsec from './Introsec'
import Gallerybox from './Gallerybox'

const Aboutmain = () => {
  return (
    <>
    <header className="main-header">
    
        <img src="imgs\service\service8.png" alt="Main Header" className="header-image"/>
        <div className="header-content">
            <h1>Welcome to Clinzzo Car Wash</h1>
            <p>Your trusted partner for convenient and eco-friendly car care.</p>
            
        </div>
    </header>
      <About content="Clinzzo provides affordable autocare with doorstep convenience through its technology and business model. We have developed an innovative bag-pack that has high-powered service tools and comes with its own power source. This enables waterless or pressure-wash and vacuum car cleaning as opposed to the current industry standards that rely on cleaning vans or asset-heavy car wash centers. Our mobile app allows for easy booking and scheduling of on-demand professional services as per requirement." heading="About Clinzzo"/>
      <Introsec/>
      <Gallerybox/>
    </>
  )
}

export default Aboutmain
