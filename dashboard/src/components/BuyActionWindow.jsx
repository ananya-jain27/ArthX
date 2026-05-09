// import React, { useState , useContext } from "react";
// import { Link } from "react-router-dom";

// import axios from "axios";

// import GeneralContext from "./GeneralContext";

// import "./BuyActionWindow.css";

// const BuyActionWindow = ({ uid }) => {
//   const [stockQuantity, setStockQuantity] = useState(1);
//   const [stockPrice, setStockPrice] = useState(0.0);

//   const generalContext = useContext(GeneralContext);

//   const handleBuyClick = () => {
//     axios.post(`${import.meta.env.VITE_BACKEND_URL}/newOrder`, {
//       name: uid,
//       qty: stockQuantity,
//       price: stockPrice,
//       mode: "BUY",
//     },{
//       withCredentials: true,
//     });

//     generalContext.closeBuyWindow();
//   };

//   const handleCancelClick = () => {
//     GeneralContext.closeBuyWindow();
//   };

//   return (
//     <div className="container" id="buy-window" draggable="true">
//       <div className="regular-order">
//         <div className="inputs">
//           <fieldset>
//             <legend>Qty.</legend>
//             <input
//               type="number"
//               name="qty"
//               id="qty"
//               onChange={(e) => setStockQuantity(e.target.value)}
//               value={stockQuantity}
//             />
//           </fieldset>
//           <fieldset>
//             <legend>Price</legend>
//             <input
//               type="number"
//               name="price"
//               id="price"
//               step="0.05"
//               onChange={(e) => setStockPrice(e.target.value)}
//               value={stockPrice}
//             />
//           </fieldset>
//         </div>
//       </div>

//       <div className="buttons">
//         <span>Margin required ₹140.65</span>
//         <div>
//           <Link className="btn btn-blue" onClick={handleBuyClick}>
//             Buy
//           </Link>
//           <Link to="" className="btn btn-grey" onClick={handleCancelClick}>
//             Cancel
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BuyActionWindow;

import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);
  const [availableFunds, setAvailableFunds] = useState(null);
  const [fundsError, setFundsError] = useState("");
  const [orderError, setOrderError] = useState("");
  const [loading, setLoading] = useState(true);

  const generalContext = useContext(GeneralContext);

  // ✅ Fetch user funds on mount
  useEffect(() => {
    const fetchFunds = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/funds`, {
          withCredentials: true,
        });
        setAvailableFunds(res.data.funds);
      } catch (err) {
        setFundsError("Could not load funds.");
      } finally {
        setLoading(false);
      }
    };
    fetchFunds();
  }, []);

  // ✅ Dynamically calculate margin required
  const marginRequired = (Number(stockQuantity) * Number(stockPrice)).toFixed(2);
  const hasSufficientFunds = availableFunds !== null && availableFunds >= Number(marginRequired);

  const handleBuyClick = async () => {
    if (!hasSufficientFunds) return;
    setOrderError("");

    try {
      // Place the order
      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/newOrder`,
        {
          name: uid,
          qty: Number(stockQuantity),
          price: Number(stockPrice),
          mode: "BUY",
        },
        { withCredentials: true }
      );
      
      setAvailableFunds(res.data.remainingFunds);
      generalContext.closeBuyWindow();
    } catch (err) {
      setOrderError(err.response?.data?.message || "Order failed. Try again.");
    }
  };

  const handleCancelClick = () => {
    generalContext.closeBuyWindow();
  };

  return (
    <div className="container" id="buy-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              onChange={(e) => setStockQuantity(e.target.value)}
              value={stockQuantity}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              onChange={(e) => setStockPrice(e.target.value)}
              value={stockPrice}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <div className="funds-info">
          {loading ? (
            <span>Loading funds...</span>
          ) : fundsError ? (
            <span className="error">{fundsError}</span>
          ) : (
            <>
              <span>Margin required: ₹{marginRequired}</span>
              <span>Available funds: ₹{availableFunds.toFixed(2)}</span>
              {!hasSufficientFunds && (
                <span className="error">⚠️ Insufficient funds</span>
              )}
              {orderError && (
                <span className="error">{orderError}</span>
              )}
            </>
          )}
        </div>
        <div>
          <button
            className="btn btn-blue"
            onClick={handleBuyClick}
            disabled={!hasSufficientFunds || loading}
          >
            Buy
          </button>
          <Link to="" className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;
