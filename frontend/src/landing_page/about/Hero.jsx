import React from "react";
function Hero() {
  return (
    <div className="container p-5">
      <div className="row text-center p-5 mt-5 mb-5">
        <div className="col-2"></div>
        <div className="col">
          <h2 className=" fs-3 text-muted">
            We pioneered the discount broking model in India. <br />
            Now, we are breaking ground with our technology.
          </h2>
        </div>
        <div className="col-2"></div>
      </div>
      <div className="row border-top border-1 mt-5 " style={{fontSize : "16.5px", lineHeight: "1.8em"}}>
        <div className="col p-5">
          <p className="text-muted">
            We kick-started operations on the 15th of August, 2025 with the goal
            of breaking all barriers that traders and investors face in India in
            terms of cost, support, and technology. We named the company
            ArthX, a combination of Arth and "X", the Sanskrit word for
            Arth meaning wealth.
          </p>{" "}
          <p className="text-muted">
            Today, our disruptive pricing models and in-house technology have
            made us the biggest stock broker in India.
          </p>{" "}
          
        </div>
        <div className="col p-5">
            <p className="text-muted">Rainmatter, our fintech fund and incubator, has invested in several
            fintech startups with the goal of growing the Indian capital
            markets. </p>
            <p className="text-muted">And yet, we are always up to something new every day. Catch
            up on the latest updates on our blog or see what the media is saying
            about us or learn more about our business and product philosophies.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
