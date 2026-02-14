import React from 'react';
function CreateTicket() {
    return ( 
        <div className="container p-5 ">
            <div className="row">
                <h4>To create a ticket , Select a relevant topic</h4>
            </div>
            <div className="row ms-5 mt-4 mb-3">
                <div className="col-4">
                    <p><i class="fa-solid fa-circle-plus"></i> Account Opening </p>
                    <a href="/"  style={{ textDecoration: "none"  , color:"#4e84ca " , lineHeight: "2em"}}>Online Account Opening</a><br />
                    <a href="/" style={{ textDecoration: "none"  , color:"#4e84ca " , lineHeight: "2em"}}>Offline Account Opening</a><br />
                    <a href="/" style={{ textDecoration: "none"  , color:"#4e84ca " , lineHeight: "2em"}}>Charges at ArthX</a><br />
                    <a href="/" style={{ textDecoration: "none"  , color:"#4e84ca " , lineHeight: "2em"}}>NRI Account Opening</a><br />
                    <a href="/" style={{ textDecoration: "none"  , color:"#4e84ca " , lineHeight: "2em"}}>ArthX IDFC FIRST Bank 3-in-1 </a>
                </div>
                <div className="col-4">
                    <p><i className="fa-solid fa-user"></i> Your ArthX Account </p>
                    <a href="/" style={{ textDecoration: "none"  , color:"#4e84ca " , lineHeight: "2em"}}>Login Credentials</a><br />
                    <a href="/" style={{ textDecoration: "none"  , color:"#4e84ca " , lineHeight: "2em"}}>Account Modification </a><br />
                    <a href="/" style={{ textDecoration: "none"  , color:"#4e84ca " , lineHeight: "2em"}}>Your Profile</a><br />
                    <a href="/" style={{ textDecoration: "none"  , color:"#4e84ca " , lineHeight: "2em"}}>DP ID and bank details</a><br />
                    <a href="/" style={{ textDecoration: "none"  , color:"#4e84ca " , lineHeight: "2em"}}>Transfer </a>
                </div>
                <div className="col-4">
                    <p><i className="fa-solid fa-chart-bar"></i> Your ArthX Account </p>
                    <a href="/" style={{ textDecoration: "none"  , color:"#4e84ca " , lineHeight: "2em"}}>Kite Web and Mobile</a><br />
                    <a href="/" style={{ textDecoration: "none"  , color:"#4e84ca " , lineHeight: "2em"}}>Corporate Actions</a><br />
                    <a href="/" style={{ textDecoration: "none"  , color:"#4e84ca " , lineHeight: "2em"}}>Charges at ArthX</a><br />
                    <a href="/" style={{ textDecoration: "none"  , color:"#4e84ca " , lineHeight: "2em"}}>Pi and other platforms</a><br />
                    <a href="/" style={{ textDecoration: "none"  , color:"#4e84ca " , lineHeight: "2em"}}>Stockreports+</a>
                </div>
            </div>
        </div>
    );
}

export default CreateTicket;