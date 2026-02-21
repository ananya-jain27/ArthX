import React from 'react';
import { useNavigate } from "react-router-dom";

function OpenAccount() {
    const navigate = useNavigate();
    const handleOnClick = () => {
        navigate("/signup");
    }
    return ( <>
    <div className='container p-5 '>
        <div className="row text-center justify-content-center">
            <h2 className='mt-5 mb-4'>Open a ArthX account</h2>
            <p className='text-muted'>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
            <button style={{width:"20%"}} className="btn btn-primary p-2 mt-2 fs-5 mb-5" onClick={handleOnClick}>Sign up for free</button>
        </div>
    </div>
    </> );
}

export default OpenAccount;