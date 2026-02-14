import React from "react";
function Pricing() {
  return (
    <div className="container mt-5  p-5">
      <div className="row">
        <div className="col">
          <h2 className="mb-3">Unbeatable pricing</h2>
          <p className="text-muted">
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="" style={{ textDecoration: "none" }}>
            See pricing <i class="fa-solid fa-arrow-right"></i>
          </a>
        </div>
        <div className="col-2"></div>
        <div className="col">
          <div className="row text-center">
            <div className="col">
              <img src="media/images/pricingMF.svg" alt="img" />
              <p className="text-muted" style={{fontSize:"10px"}}>Free account opening</p>
            </div>
            <div className="col">
              <img src="media/images/pricingMF.svg" alt="img" />
              <p className="text-muted" style={{fontSize:"10px"}}>Free equity delivery and direct mutual funds</p>
            </div>
            <div className="col">
              <img src="media/images/intradayTrades.svg" alt="img" />
              <p className="text-muted" style={{fontSize:"10px"}}>Intraday and F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
