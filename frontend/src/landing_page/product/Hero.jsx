import React from "react";
function Hero() {
  return (
    <div className="container p-5">
      <div className="row text-center p-5 mt-5 mb-5 border-bottom border-1">
        <h1 className="fs-2 ">ArthX Products</h1>
        <p className="fs-5 text-muted mt-2 mb-4">Sleek, modern, and intuitive trading platforms</p>
        <p className="mb-5">Check out our 
            <a href="" style={{ textDecoration: "none" }}>
             &nbsp; investment offerings <i class="fa-solid fa-arrow-right"></i>
          </a></p>
      </div>
    </div>
  );
}

export default Hero;
