import React from 'react'

const Gallerybox = () => {
    return (
        <>
            <section className='main_service'>
                <services className="grid-container">
                <div className="image-box">
    <img src="imgs\service\service1.png" alt="Simple"/>
    <div className="image-name">
      <p>Exterior Wash</p>
    </div>
  </div>

  <div className="image-box">
    <img src="imgs\service\service2.png" alt="Simple"/>
    <div className="image-name">
      <p>Dry Cleaning</p>
    </div>
  </div>

  <div className="image-box">
    <img src="imgs\service\service3.png" alt="Simple"/>
    <div className="image-name">
      <p>Enterior Cleaning</p>
    </div>
  </div>

  <div className="image-box">
    <img src="imgs\service\service8.png" alt="Simple"/>
    <div className="image-name">
      <p>Dashboard Cleaning </p>
    </div>
  </div>

  <div className="image-box">
    <img src="imgs\service\service5.png" alt="Simple"/>
    <div className="image-name">
      <p>Hibrid Coating</p>
    </div>
  </div>

  <div className="image-box">
    <img src="imgs\service\service7.png" alt="Simple"/>
    <div className="image-name">
      <p>Tyre Cleaning </p>
    </div>
  </div>
  <div className="image-box">
    <img src="imgs\service\bird drop.jpg" alt="Simple"/>
    <div className="image-name">
      <p>Super Exterior</p>
    </div>
  </div>
  <div className="image-box">
    <img src="imgs\service\service6.png" alt="Simple"/>
    <div className="image-name">
      <p>Roof Cleaning</p>
    </div>
  </div>
                </services>
            </section>




            <section className="our_section_cards bg-black py-5">
    <div className="container">
        <div className="row">
            <div className="col text-heading pt-sm-4 pb-5">
                <h2>Our Services have High-Demand</h2>
            </div>
        </div>

        <div className="containers cards_section">
            <div className="card h-100 overflow-hidden">
                <div className="overflow-hidden">
                <img src="imgs\service\service6.png" alt="Simple"/>

                </div>
                <div className="card-body text-white text-center">
                    <p className="card-text py-4">Interior Clean</p>
                </div>
            </div>
            <div className="card h-100 overflow-hidden">
                <div className="overflow-hidden">
                    <img src="imgs\service\service2.png" className="card-img-top" alt='Simple' />

                </div>
                <div className="card-body text-white text-center">
                    <p className="card-text py-4">Full Deep interior Cleaning </p>
                </div>
            </div>


            <div className="card h-100 overflow-hidden">
                <div className="overflow-hidden">
                    <img src="imgs\service\service1.png" className="card-img-top" alt='Simple'/>

                </div>
                <div className="card-body text-white text-center">
                    <p className="card-text py-4">Exterior &amp; Interior </p>
                </div>
            </div>

            <div className="card h-100 overflow-hidden">
                <div className="overflow-hidden">
                    <img src="imgs\service\service5.png" className="card-img-top" alt='Simple'/>

                </div>
                <div className="card-body text-white text-center">
                    <p className="card-text py-4">Exterior &amp; Interior &amp; UnderBody</p>
                </div>
            </div>

            <div className="card h-100 overflow-hidden">
                <div className="overflow-hidden">
                    <img src="imgs\service\bird drop.jpg" className="card-img-top" alt='Simple'/>

                </div>
                <div className="card-body text-white text-center">
                    <p className="card-text py-4">Super Exterior</p>
                </div>
            </div>

            <div className="card h-100 overflow-hidden">
                <div className="overflow-hidden">
                    <img src="imgs\service\service7.png" className="card-img-top" alt='Simple'/>

                </div>
                <div className="card-body text-white text-center">
                    <p className="card-text py-4">Bike Cleaning &amp; Polish</p>
                </div>
            </div>

            <div className="card h-100 overflow-hidden">
                <div className="overflow-hidden">
                    <img src="imgs\service\service3.png" className="card-img-top" alt='Simple'/>

                </div>
                <div className="card-body text-white text-center">
                    <p className="card-text py-4">Waterless Exterior &amp; Interior</p>
                </div>
            </div>


           

        </div>
      
       
    </div>
</section>
        </>
    )
}

export default Gallerybox
