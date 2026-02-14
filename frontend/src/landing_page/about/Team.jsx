import React from 'react';
function Team() {
    return ( 
        <div className="container p-5">
            <div className="row text-center ">
                <h2 className="fs-3">People</h2>
            </div>
            <div className="row p-5">
                <div className="col text-center">
                    <img src="media/images/ananya.png" alt="img" style={{  height:"300px", width:"300px"}}/>
                    <h5>Ananya Jain</h5>
                    <p>Founder , CEO</p>
                </div>
                <div className="col text-muted" style={{fontSize : "16.5px", lineHeight: "1.8em"}}>
                    <p>Ananya bootstrapped and founded ArthX in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, ArthX has changed the landscape of the Indian broking industry.</p>
                    <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
                    <p>Playing chess is her zen.</p>
                    <p>Connect on <a href="/" style={{ textDecoration: "none" }}>Homepage</a> / TradingQnA / Twitter</p>
                </div>
            </div>
        </div>
     );
}

export default Team;