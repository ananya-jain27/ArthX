import React from "react";
function Hero() {
  return (
    <div className="container p-5">
      <div className="row text-center p-5 mt-5 mb-5 border-bottom border-1">
        <h1 className="fs-2 ">Charges</h1>
        <p className="fs-5 text-muted">List of all charges and taxes</p>
      </div>
      <div className="row text-center mt-5 mb-5">
        <div className="col">
          <img src="media/images/pricingMF.svg" alt="img" style={{width:"80%"}} />
          <h2 className="fs-3 ">Free equity delivery</h2>
          <p
            className="text-muted mt-4"
            style={{ fontSize: "16px", lineHeight: "1.8em" }}
          >
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col">
          <img src="media/images/intradayTrades.svg" alt="img" style={{width:"80%"}} />
          <h2 className="fs-3 ">Intraday and F&O trades</h2>
          <p
            className="text-muted mt-4"
            style={{ fontSize: "16px", lineHeight: "1.8em" }}
          >
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col">
          <img src="media/images/pricingMF.svg" alt="img" style={{width:"80%"}} />
          <h2 className="fs-3 ">Free direct MF</h2>
          <p
            className="text-muted mt-4"
            style={{ fontSize: "16px", lineHeight: "1.8em" }}
          >
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
