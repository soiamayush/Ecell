import React from 'react'

export default function Counter() {



  return (
    <>
      <div className="section">
        <div className="wrapper">
          <div className="title my-4" >Number of Task Running</div>
        
        </div>
        <div className="counter-up">
          <div className="content">
            <div className="box">
              <div className="icon"><i className="fas fa-history"></i></div>
              <div className="counter" >724</div>
              <div className="text">Working Hours</div>
            </div>
            <div className="box">
              <div className="icon"><i className="fas fa-gift"></i></div>
              <div className="counter"  >508</div>
              <div className="text">Completed Projects</div>
            </div>
            <div className="box">
              <div className="icon"><i className="fas fa-users"></i></div>
              <div className="counter">436</div>
              <div className="text">Happy Clients</div>
            </div>
            <div className="box">
              <div className="icon"><i className="fas fa-award"></i></div>
              <div className="counter" >120</div>
              <div className="text">Awards Received</div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
