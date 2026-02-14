import React from 'react';
function Trust() {
    return ( 
        <div className="container mt-5 p-5 mb-5">
            <div className="row ">
                <div className="col-5">
                    <h2 className='mb-5'>Trust with confidence</h2>
                    <h3 className='fs-4'>Customer-first always</h3> 
                    <p className='text-muted'>That's why 1.6+ crore customers trust ArthX with ~ ₹6 lakh crores of equity investments, making us India’s largest broker.</p>
                    <h3 className='fs-4'>No spam or gimmicks</h3>
                    <p className='text-muted'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>
                    <h3 className='fs-4'>The ArthX universe</h3>
                    <p className='text-muted'> Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                    <h3 className='fs-4'>Do better with money</h3>
                    <p className='text-muted'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
                </div>
                <div className="col-7">
                    <img src="media/images/ecosystem.png" alt="img" style={{width:"95%"}}/>
                    <div className='text-center'>
                        <a href="" style={{textDecoration:"none"}}>Explore our products <i class="fa-solid fa-arrow-right"></i> </a>
                        &nbsp;
                        &nbsp;
                        &nbsp;
                        <a href="" style={{textDecoration:"none"}}>Try Kite Demo <i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Trust;