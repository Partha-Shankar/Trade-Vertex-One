import React from "react";

function Hero() {
  return (
    <div className="container my-5 text-center">
      <div className="row">
        <img
          src="media/images/homeHero.png"
          alt="Hero-Image"
          className="col-12 mb-5"
        ></img>
        <div className="col-12 mt-5">
          <h1>Invest in Everything</h1>
          <p>
            Online platform to invest in stocks, derivatives, mutual funds, and
            more
          </p>
          <button className="btn btn-primary mb-5 btn-lg px-5">
            SignUp Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
