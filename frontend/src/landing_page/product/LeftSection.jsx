import React from "react";
function LeftSection({ title, content, image, link }) {
  return (
    <div className="container mb-5 ">
      <div className="row row align-items-center">
        <div className="col">
          <img src={image} alt="kite img" />
        </div>
        <div className="col-2"></div>
        <div className="col ">
          <h2 className="fs-4">{title}</h2>
          <p
            className="text-muted mt-4"
            style={{ fontSize: "16.5px", lineHeight: "1.8em" }}
          >
            {content}
          </p>

          <div className="mt-3">
            {link.map((item, index) => (
              <a
                key={index}
                href=""
                style={{ textDecoration: "none", marginRight: "40px" }}
              >
                {item} <i className="fa-solid fa-arrow-right"></i>
              </a>
            ))}
          </div>
          
          <div className="row mt-4">
            <div className="col">
              <img src="media/images/googlePlayBadge.svg" alt="img" />
            </div>
            <div className="col">
              <img src="media/images/appstoreBadge.svg" alt="img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
