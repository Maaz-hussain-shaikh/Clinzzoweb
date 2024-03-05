import React, { useState } from 'react'

const Faq = (props) => {
  const [faqshow, faq] = useState(false);
  return (
    <>
      <div className="row">
        <div className="accordion accordion-flush">
          <div className="accordion-item ">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne" onClick={() => { faq(!faqshow) }}>
                {props.question}
              </button>
            </h2>

            {
              faqshow ? <>
                <div className="accordion-body" id="transition">{props.ans}</div>
              </> : <></>
            }

          </div>
        </div>
      </div> 
     
    </>
  )
}

export default Faq
