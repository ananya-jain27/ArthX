import React from 'react';
function Brokerage() {
    return ( <div className="container p-5 mb-5 border-top border-1">
        <div className="row">
            <div className="col-8">
                <h4 className='text-center text-primary mb-4 '>Brokerage Calculator</h4>
                <p  className="text-muted" style={{ fontSize: "14px", lineHeight: "2.2em" }}>
                    <ul >
                    <li >Call & Trade and RMS auto-squareoff: Additional charges of ₹50 + GST per order.</li>
                    <li>Digital contract notes will be sent via e-mail.</li>
                    <li>Physical copies of contract notes, if required, shall be charged ₹20 per contract note. Courier charges apply.</li>
                    <li>For NRI account (non-PIS), 0.5% or ₹100 per executed order for equity (whichever is lower).</li>
                    <li>For NRI account (PIS), 0.5% or ₹200 per executed order for equity (whichever is lower).</li>
                    <li>If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.</li>
                   
                </ul>
                </p>
                
            </div>
            <div className="col-4">
                <h4 className='text-center text-primary mb-4'>List of Charges</h4>
            </div>
        </div>
    </div> );
}

export default Brokerage;