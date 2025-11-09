import React from 'react';

function Education() {
    return ( 
        <div
      className="container"
      style={{ marginBottom: "10rem", marginTop: "11rem" }}
    >
      <div className="row">
        <img
          src="media/images/education.svg"
          height="340rem"
          className="col-5 mx-5"
        ></img>
        <div className="col-5 mx-5 my-5">
          <h2>Free and open market education</h2>
          <p>
            2+ million Trade-vertex-one clients contribute to over 15% of all
            retail order volumes in India daily by trading and investing in:
          </p>
          <a href='#' style={{textDecoration:"none"}} className='mb-5'>Versity  <i className="fa-solid fa-arrow-right"></i></a>
          <p className='mt-5'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
          <a href='#' style={{textDecoration:"none"}} className='mb-5'>TradingQ&A   <i className="fa-solid fa-arrow-right"></i></a>
        </div>
      </div>
    </div>
    );
}

export default Education;