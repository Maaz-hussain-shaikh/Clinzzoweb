import React from 'react'
import Process from '../Process'
import {Data,Monthly,Combo} from '../../Data'
import Pdfcom from '../Pdfcom'
const Pricechart = () => {
  return (
    <>
      <div className="centered-div">
  <div className=" justify-content-center text-center align-items-center serviceimg">               
               <img src="imgs\serviceimg.png" alt="lol"/>        
       </div> 

  </div>
  <Process/>
  <Pdfcom/>
  <section className="services-table">
        <h2>Price Chart</h2>
        <div className="table-responsive">
            <table>
                <thead>
                    <tr>
                        <th>Service Name</th>
                        <th>Details</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Data.map((elem,index)=>{
                            return(
                                <>
                                <tr>
                        <td>{Data[index].plan}</td>
                        <td>
                            {
                                Data[0].service.map((element,index2)=>{
                                    return (<>
                                    <li><i className="fa-solid fa-check"></i>{Data[index].service[index2].li}</li>
                                    </>)
                                })
                            }
                            </td>
                        <td>₹ {Data[index].price}</td>
                    </tr>
                                </>
                            )
                        })
                    }                    
                </tbody>
            </table>
        </div>
    </section>
    <section className="services-table">
        <h2>Monthly plan </h2>
        <div className="table-responsive">
            <table>
                <thead>
                    <tr>
                        <th>Service Name</th>
                        <th>Details</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Monthly.map((elem,index)=>{
                            return(
                                <>
                                <tr>
                        <td>{Monthly[index].plan}</td>
                        <td>
                            {
                                Monthly[0].service.map((element,index2)=>{
                                    return (<>
                                    <li><i className="fa-solid fa-check"></i>    {Monthly[index].service[index2].li}</li>
                                    </>)
                                })
                            }
                            </td>
                        <td>₹ {Monthly[index].price}</td>
                    </tr>
                                </>
                            )
                        })
                    }                    
                </tbody>
            </table>
        </div>
    </section>
    <section className="services-table">
        <h2>Best Combo </h2>
        <div className="table-responsive">
            <table>
                <thead>
                    <tr>
                        <th>Service Name</th>
                        <th>Details</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Combo.map((elem,index)=>{
                            return(
                                <>
                                <tr>
                        <td>{Combo[index].plan}</td>
                        <td>
                            {
                                Combo[0].service.map((element,index2)=>{
                                    return (<>
                                    <li><i className="fa-solid fa-check"></i>    {Combo[index].service[index2].li}</li>
                                    </>)
                                })
                            }
                            </td>
                        <td>₹ {Combo[index].price}</td>
                    </tr>
                                </> 
                            )
                        })
                    }                    
                </tbody>
            </table>
        </div>
    </section>
    </>
  )
}

export default Pricechart
