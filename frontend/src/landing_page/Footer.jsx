import React from "react";
function Footer() {
  return (
    <footer className="border-top" style={{ backgroundColor: "#f8f9fa", borderTop: "1px" }}>
      <div className="container">
        <div className="row mt-5">
          <div className="col">
            <img
              src="media/images/logo.svg"
              alt="logo"
              style={{ width: "60%" }}
            />
            <p className="text-muted mt-3" style={{ fontSize: "12px" }}>
              © 2010 - 2026, ArthX Broking Ltd.
            </p>
            <p className="text-muted" style={{ fontSize: "12px" }}>
              All rights reserved.
            </p>
          </div>
          <div className="col">
            <p className="mb-3"> Account</p>
            <a
              href=""
              className=" text-muted "
              style={{ textDecoration: "none", color: "black" }}
            >
              Minor demat account
            </a>
            <br />
            <a
              href=""
              className=" text-muted "
              style={{ textDecoration: "none", color: "black" }}
            >
              NRI account
            </a>
            <br />
            <a
              href=""
              className=" text-muted "
              style={{ textDecoration: "none", color: "black" }}
            >
              Open demat account
            </a>
            <br />
            <a
              href=""
              className=" text-muted "
              style={{ textDecoration: "none", color: "black" }}
            >
              Commodity
            </a>
            <br />
            <a
              href=""
              className=" text-muted "
              style={{ textDecoration: "none", color: "black" }}
            >
              Dematerialisation
            </a>
          </div>
          <div className="col">
            <p>Support</p>
            <a
              href=""
              className=" text-muted "
              style={{ textDecoration: "none", color: "black" }}
            >
              Contact us
            </a>
            <br />
            <a
              href=""
              className=" text-muted "
              style={{ textDecoration: "none", color: "black" }}
            >
              Support portal
            </a>
            <br />
            <a
              href=""
              className=" text-muted "
              style={{ textDecoration: "none", color: "black" }}
            >
              How to file a complaint?
            </a>
            <br />
            <a
              href=""
              className=" text-muted "
              style={{ textDecoration: "none", color: "black" }}
            >
              Status of your complaints
            </a>
            <br />
          </div>
          <div className="col">
            <p>Company</p>
            <a
              href=""
              className=" text-muted "
              style={{ textDecoration: "none", color: "black" }}
            >
              About
            </a>
            <br />
            <a
              href=""
              className=" text-muted "
              style={{ textDecoration: "none", color: "black" }}
            >
              Philosophy
            </a>
            <br />
            <a
              href=""
              className=" text-muted "
              style={{ textDecoration: "none", color: "black" }}
            >
              Press & media
            </a>
            <br />
            <a
              href=""
              className=" text-muted "
              style={{ textDecoration: "none", color: "black" }}
            >
              Careers
            </a>
            <br />
          </div>
        </div>
        <p className="text-muted mt-5" style={{ fontSize: "10px" }}>
          ArthX Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration
          no.: INZ000031633 CDSL/NSDL: Depository services through ArthX Broking
          Ltd. – SEBI Registration no.: IN-DP-431-2019 Registered Address: ArthX
          Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence
          Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka,
          India. For any complaints pertaining to securities broking please
          write to
          <a href=""> complaints@ArthX.com</a>, for DP related to dp@ArthX.com.
        </p>
        <p className="text-muted mt-3" style={{ fontSize: "10px" }}>
          Please ensure you carefully read the Risk Disclosure Document as
          prescribed by SEBI | ICF Procedure to file a complaint on SEBI SCORES:
          Register on SCORES portal. Mandatory details for filing complaints on
          SCORES: Name, PAN, Address, Mobile Number, E-mail ID.
        </p>
        <p className="text-muted mt-3" style={{ fontSize: "10px" }}>
          <a href="">
            Smart Online Dispute Resolution | Grievances Redressal Mechanism
          </a>
        </p>
        <p className="text-muted mt-3" style={{ fontSize: "10px" }}>
          Benefits: Effective Communication, Speedy redressal of the grievances
          Smart Online Dispute Resolution | Grievances Redressal Mechanism
          Investments in securities market are subject to market risks; read all
          the related documents carefully before investing.
        </p>
        <div className="row mb-3">
            
            <div className="col"></div>
            <div className="col"></div>
            
          <div className="col">
            <a
              href=""
              className=" text-muted "
              style={{ textDecoration: "none", color: "black" , fontSize: "12px"}}
            >
              NSE
            </a>
          </div>

          <div className="col">
            <a
              href=""
              className=" text-muted "
              style={{ textDecoration: "none", color: "black" , fontSize: "12px"}}
            >
              BSE
            </a>
          </div>
          <div className="col">
            <a
              href=""
              className=" text-muted "
              style={{ textDecoration: "none", color: "black" , fontSize: "12px"}}
            >
              MCX
            </a>
          </div>
          <div className="col-2">
            <a
              href=""
              className=" text-muted "
              style={{ textDecoration: "none", color: "black" , fontSize: "12px"}}
            >
              Terms & conditions{" "}
            </a>
          </div>
          <div className="col-2">
            <a
              href=""
              className=" text-muted "
              style={{ textDecoration: "none", color: "black" , fontSize: "12px"}}
            >
              Policies & procedures
            </a>
          </div>
          <div className="col"></div>
          <div className="col"></div>
         
        </div>
      </div>
    </footer>
  );
}

export default Footer;
