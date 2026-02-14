import React from 'react';
function Hero() {
    return ( 
        <div className="container" style={{backgroundColor:"#4e84ca", color:"white "}}>
            <div className="row row p-5 mt-5 ms-5 " >
                <h5>Support Porter</h5>
            </div>
            <div className="row p-5  mb-5 ms-5" >
                <div className="col">
                    <h5>Search for an answer or browse help topics to create a ticket</h5>
                    <input className="form-control mt-4 mb-3 " type="search" placeholder="Eg: how do i activate F&O, why is my order getting rejected.." aria-label="Search" style={{width:"90%" , height:"60px"}}/>
                    <a href="" style={{color:"white"}} className='me-3'>Track account opening</a>
                    <a href="" style={{color:"white"}} className='me-3'>Track segment activation</a>
                    <a href="" style={{color:"white"}} className='me-3'>Intraday margins</a>
                    <a href="" style={{color:"white"}} className='me-3'>Kite user manual</a>
                    

                </div>
                <div className="col-1"></div>
                <div className="col">
                    <h5>Featured</h5>
                    <a href="" style={{color:"white" , textDecoration:"none"}}>1. Current Takeovers and Delisting – January 2024</a>
                    <br />
                    <a href="" style={{color:"white" , textDecoration:"none"}}>2. Latest Intraday leverages - MIS & CO</a>
                </div>
                
            </div>
        </div>
     );
}

export default Hero;