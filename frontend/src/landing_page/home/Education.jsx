import React from "react";
function Education() {
  return (
    <div className="container p-5 mt-5">
      <div className="row ">
        <div className="col">
          <img src="media/images/education.svg" alt="img" style={{width:"80%"}}/>
        </div>
      
        <div className="col">
          <h2 className="mb-4">Free and open market education</h2>
          <p className="text-muted">
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <a href="" style={{ textDecoration: "none" }} >
            Varcity <i class="fa-solid fa-arrow-right"></i>
          </a>
          <p className="text-muted mt-5">
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>
          <a href="" style={{ textDecoration: "none" }}>
            TradingQ&A <i class="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
