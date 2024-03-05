import React from 'react'

const About = (props) => {
   
  return (<>

<div className="container ">
        <div className="row ">
            <div className="col-12 text-heading py-md-5">
                <h1>{props.heading}</h1>
                <p>{props.content}</p>
            </div>
        </div>
    </div>
      </>
  )
}

export default About;
