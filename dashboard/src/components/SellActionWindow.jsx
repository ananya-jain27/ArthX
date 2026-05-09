// import React, { useState , useContext } from "react";
// import { Link } from "react-router-dom";

// import axios from "axios";

// import GeneralContext from "./GeneralContext";

// import "./BuyActionWindow.css";

// const SellActionWindow = ({ uid }) => {
//   const [stockQuantity, setStockQuantity] = useState(1);
//   const [stockPrice, setStockPrice] = useState(0.0);

//   const generalContext = useContext(GeneralContext);

//   const handleSellClick = () => {
//     axios.post(`${import.meta.env.VITE_BACKEND_URL}/newOrder`, {
//       name: uid,
//       qty: stockQuantity,
//       price: stockPrice,
//       mode: "SELL",
//     },{
//       withCredentials: true,
//     });

//     generalContext.closeSellWindow();
//   };

//   const handleCancelClick = () => {
//     generalContext.closeSellWindow();
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
//           <Link className="btn btn-orange" onClick={handleSellClick}>
//             Sell
//           </Link>
//           <Link to="" className="btn btn-grey" onClick={handleCancelClick}>
//             Cancel
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SellActionWindow;


import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import "./BuyActionWindow.css";

const SellActionWindow = ({ uid }) => {
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

  // ✅ Calculate amount user will receive after selling
  const sellAmount = (Number(stockQuantity) * Number(stockPrice)).toFixed(2);

  const handleSellClick = async () => {
    setOrderError("");

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/newOrder`,
        {
          name: uid,
          qty: Number(stockQuantity),
          price: Number(stockPrice),
          mode: "SELL",
        },
        { withCredentials: true }
      );

      // ✅ Update funds after sell
      setAvailableFunds(res.data.remainingFunds);
      generalContext.closeSellWindow();

    } catch (err) {
      setOrderError(err.response?.data?.message || "Order failed. Try again.");
    }
  };

  const handleCancelClick = () => {
    generalContext.closeSellWindow();
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
              {/* ✅ On sell, show how much they'll receive */}
              <span>You will receive: ₹{sellAmount}</span>
              <span>Available funds: ₹{availableFunds.toFixed(2)}</span>
              {orderError && (
                <span className="error">{orderError}</span>
              )}
            </>
          )}
        </div>
        <div>
          {/* ✅ Fix: button instead of Link, with proper types */}
          <button
            className="btn btn-orange"
            onClick={handleSellClick}
            disabled={loading}
          >
            Sell
          </button>
          <Link to="" className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SellActionWindow;
