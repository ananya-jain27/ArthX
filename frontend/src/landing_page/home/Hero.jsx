import React  from 'react';
import { useNavigate } from "react-router-dom";
function Hero() {
    const navigate = useNavigate();
    const handleOnClick = () => {
        navigate("/signup");
    }
    return ( 
    <div className='container p-5'>
        <div className="row text-center justify-content-center mt-5">
            <img src="media/images/homeHero.png" alt="hero image" className='mb-5' />
            <h1 className='mt-5'>Invest in everything</h1>
            <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
            <button style={{width:"20%"}} className="btn btn-primary p-2 mt-2 fs-5 mb-5" onClick={handleOnClick}>Sign up for free</button>
        </div>
    </div>
     );
}

export default Hero;



