import React from 'react'
import Header from '../Header'
import About from '../About'
import Procon from '../Procon'
import Process from '../Process'
import Introsec from '../Aboutpage/Introsec'
import Service from '../Service'
import Gallerybox from '../Aboutpage/Gallerybox'

const Firstpage = () => {
  return (
    <>
      <Header/>
      <About content="Clinzzo is a team of experienced car cleaners who understand the importance of maintaining a clean car. We are dedicated to providing quality services that are affordable and convenient. Our mission is to keep your car clean and you happy!" heading="Who We are"/>
      <Procon/>
      <Service/>
      <Process/>
      <Gallerybox/>

    </>
  )
}

export default Firstpage
