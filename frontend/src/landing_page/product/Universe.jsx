import React from "react";
function Universe() {
  return (
    <div className="container p-5">
      <div className="row text-center fs-5 text-muted mb-5">
        <p>
          Want to know more about our technology stack? Check out the{" "}
          <a href="/" style={{ textDecoration: "none" }}>
            {" "}
            ArthX.tech{" "}
          </a>{" "}
          blog.
        </p>
      </div>
      <div className="row text-center mt-5 p-3">
        <h2 className="mb-3" style={{ fontSize: "24px" }}>
          The ArthX Universe
        </h2>
        <p className="text-muted mt-3 mb-5" >
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>
      <div className="row text-center p-3 align-items-center" style={{ fontSize: "12px" }}>
        <div className="col-4 p-3 ">
          <a href="/" style={{ textDecoration: "none" }}>
            <img
              src="media/images/zerodhaFundhouse.png"
              alt="img"
              style={{ width: "60%" }}
            />
            <p className="text-muted mt-3 mb-5">
              cOur asset management venture that is creating simple and
              transparent index funds to help you save for your goals.
            </p>
          </a>
        </div>
        <div className="col-4 p-3">
          <a href="/" style={{ textDecoration: "none" }}>
            <img
              src="media/images/sensibullLogo.svg"
              alt="img"
              style={{ width: "60%" }}
            />
            <p className="text-muted mt-3 mb-5">
              Options trading platform that lets you create strategies, analyze
              positions, and examine data points like open interest, FII/DII,
              and more.
            </p>
          </a>
        </div>
        <div className="col-4 p-3">
          <a href="/" style={{ textDecoration: "none" }}>
            <img
              src="media/images/goldenpiLogo.png"
              alt="img"
              style={{ width: "60%" }}
            />
            <p className="text-muted mt-3 mb-5">
              Investment research platform that offers detailed insights on
              stocks, sectors, supply chains, and more.
            </p>
          </a>
        </div>
        <div className="col-4 p-3 ">
          <a href="/" style={{ textDecoration: "none" }}>
            <img
              src="media/images/streakLogo.png"
              alt="img"
              style={{ width: "60%" }}
            />
            <p className="text-muted mt-3 mb-5">
              Systematic trading platform that allows you to create and backtest
              strategies without coding.
            </p>
          </a>
        </div>
        <div className="col-4 p-3">
          <a href="/" style={{ textDecoration: "none" }}>
            <img
              src="media/images/smallcaseLogo.png"
              alt="img"
              style={{ width: "60%" }}
            />
            <p className="text-muted mt-3 mb-5">
              Thematic investing platform that helps you invest in diversified
              baskets of stocks on ETFs.
            </p>
          </a>
        </div>
        <div className="col-4 p-3">
          <a href="/" style={{ textDecoration: "none" }}>
            <img
              src="media/images/dittoLogo.png"
              alt="img"
              style={{ width: "60%" }}
            />
            <p className="text-muted mt-3 mb-5">
              Personalized advice on life and health insurance. No spam and no
              mis-selling.
            </p>
          </a>
        </div>
      </div>
      <div className="row justify-content-center" >
        <button style={{width:"20%"}} className="btn btn-primary p-2 mt-2 fs-5 mb-5">Sign up for free</button>
      </div>
      
    </div>
  );
}

export default Universe;
