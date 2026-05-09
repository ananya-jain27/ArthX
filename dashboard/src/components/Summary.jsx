
// import React from "react";

// const Summary = () => {
//   return (
//     <>
//       <div className="username">
//         <h6>Hi, User!</h6>
//         <hr className="divider" />
//       </div>

//       <div className="section">
//         <span>
//           <p>Equity</p>
//         </span>

//         <div className="data">
//           <div className="first">
//             <h3>3.74k</h3>
//             <p>Margin available</p>
//           </div>
//           <hr />

//           <div className="second">
//             <p>
//               Margins used <span>0</span>{" "}
//             </p>
//             <p>
//               Opening balance <span>3.74k</span>{" "}
//             </p>
//           </div>
//         </div>
//         <hr className="divider" />
//       </div>

//       <div className="section">
//         <span>
//           <p>Holdings (13)</p>
//         </span>

//         <div className="data">
//           <div className="first">
//             <h3 className="profit">
//               1.55k <small>+5.20%</small>{" "}
//             </h3>
//             <p>P&L</p>
//           </div>
//           <hr />

//           <div className="second">
//             <p>
//               Current Value <span>31.43k</span>{" "}
//             </p>
//             <p>
//               Investment <span>29.88k</span>{" "}
//             </p>
//           </div>
//         </div>
//         <hr className="divider" />
//       </div>
//     </>
//   );
// };

// export default Summary;

import React, { useEffect, useState } from "react";
import axios from "axios";

const Summary = () => {
  const [fundsData, setFundsData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchFunds = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/funds`, {
          withCredentials: true,
        });
        setFundsData(res.data);
      } catch (err) {
        setError("Could not load funds.");
      } finally {
        setLoading(false);
      }
    };
    fetchFunds();
  }, []);

  // ✅ Format numbers like 100000 → 1.00L, 3740 → 3.74k
  const formatAmount = (amount) => {
    if (amount >= 100000) return `${(amount / 100000).toFixed(2)}L`;
    if (amount >= 1000) return `${(amount / 1000).toFixed(2)}k`;
    return `₹${amount}`;
  };

  return (
    <>
      <div className="username">
        <h6>Hi, User!</h6>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Equity</p>
        </span>
        <div className="data">
          <div className="first">
            {loading ? (
              <h3>Loading...</h3>
            ) : error ? (
              <h3 style={{ color: "red", fontSize: "14px" }}>{error}</h3>
            ) : (
              <h3>{formatAmount(fundsData.funds)}</h3>  
            )}
            <p>Margin available</p>
          </div>
          <hr />
          <div className="second">
            <p>
              Margins used{" "}
              <span>
                {loading ? "..." : error ? "-" : formatAmount(fundsData.marginsUsed)}  
              </span>
            </p>
            <p>
              Opening balance{" "}
              <span>
                {loading ? "..." : error ? "-" : formatAmount(fundsData.openingBalance)}  
              </span>
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Holdings (13)</p>
        </span>
        <div className="data">
          <div className="first">
            <h3 className="profit">
              1.55k <small>+5.20%</small>
            </h3>
            <p>P&L</p>
          </div>
          <hr />
          <div className="second">
            <p>
              Current Value <span>31.43k</span>
            </p>
            <p>
              Investment <span>29.88k</span>
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>
    </>
  );
};

export default Summary;
