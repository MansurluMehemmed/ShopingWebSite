import React from 'react'
import './Latest.css'
export const Latest = () => {
  return (
    <div className='latest-container'>
        <h2>Latest Blogs
           <p></p>
        </h2>
        <div className="latestdiv-conatiner">
        <div className="latest-div ">
            <div className="background-img first"></div>
            <div className="div-absolute ">
                <h3>Here are the trends I see coming this fall</h3>
                <p>BY ADMIN | May 31, 2024</p>
                <a href="#">Read more</a>
            </div>
        </div>
        <div className="latest-div ">
        <div className="background-img second"></div>
            <div className="div-absolute">
                <h3>Here are the trends I see coming this fall</h3>
                <p>BY ADMIN | May 31, 2024</p>
                <a href="#">Read more</a>
            </div>
        </div>
        <div className="latest-div ">
        <div className="background-img third"></div>
            <div className="div-absolute">
                <h3>Here are the trends I see coming this fall</h3>
                <p>BY ADMIN | May 31, 2024</p>
                <a href="#">Read more</a>
            </div>
        </div>
        </div>
    </div>
  )
}
