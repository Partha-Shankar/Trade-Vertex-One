import React from "react";

function Awards() {
  return (
    <div
      className="container"
      style={{ marginBottom: "10rem", marginTop: "11rem" }}
    >
      <div className="row">
        <img
          src="media/images/largestBroker.svg"
          height="340rem"
          className="col-5 mx-5"
        ></img>
        <div className="col-5 mx-5 my-5">
          <h2>Largest stock broker in India</h2>
          <p>
            2+ million Trade-vertex-one clients contribute to over 15% of all
            retail order volumes in India daily by trading and investing in:
          </p>
          <div className="row">
            <ul className="col-6">
              <li className="py-2">Futures and Options</li>
              <li className="py-2">Commodity derivatives</li>
              <li className="py-2">Currency derivatives</li>
            </ul>
            <ul className="col-6">
              <li className="py-2">Futures and Options</li>
              <li className="py-2">Commodity derivatives</li>
              <li className="py-2">Currency derivatives</li>
            </ul>
          </div>
          <img
            src="media/images/pressLogos.png"
            alt="pressLogos"
            style={{ width: "98%" }}
          ></img>
        </div>
      </div>
    </div>
  );
}

export default Awards;
