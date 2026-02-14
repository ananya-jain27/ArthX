import React from "react";
function Awards() {
  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-6 p-5">
          <img src="media/images/largestBroker.svg" alt="image" />
        </div>
        <div className="col-6 p-5">
          <h2>Largest stock broker in India</h2>
          <p className="mb-5 mt-3">
            2+ million ArthX clients contribute to 15% of all retail orders
            volumes in India daily by trading and investing in:
          </p>
          <div className="row">
            <div className="col-6">
              <ul>
                <li>
                  <p>Futures and options</p>
                </li>
                <li>
                  <p>Commodity derivatives</p>
                </li>
                <li>
                  <p>Currency derivatives</p>
                </li>
              </ul>
            </div>
            <div className="col-6">
              <ul>
                <li>
                  <p>Stocks & IPOs</p>
                </li>
                <li>
                  <p>Direct mutual funds</p>
                </li>
                <li>
                  <p>Bonds & government security</p>
                </li>
              </ul>
            </div>
          </div>
          <img src="/media/images/pressLogos.png" alt="img" style={{width:"90%"}}/>
        </div>
      </div>
    </div>
  );
}

export default Awards;
