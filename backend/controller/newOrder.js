
const OrdersModel = require('../models/OrdersModel');
const HoldingsModel = require('../models/HoldingsModel');
const PositionsModel = require('../models/PostionsModel');

// ✅ Update /newOrder to include userId
module.exports.newOrder = async (req, res) => {
  try {
    const { name, qty, price, mode } = req.body;
    const amount = qty * price;
    const userId = req.user._id; // ✅ get logged-in user's id

    // Update funds
    if (mode === "BUY") {
      if (req.user.funds < amount) {
        return res.status(400).json({ message: "Insufficient funds" });
      }
      req.user.funds -= amount;
    } else if (mode === "SELL") {
      req.user.funds += amount;
    }
    await req.user.save();

    // Save order
    const newOrder = new OrdersModel({ name, qty, price, mode });
    await newOrder.save();

    // ✅ Update Holdings — filter by userId AND name
    const existingHolding = await HoldingsModel.findOne({ userId, name });

    if (mode === "BUY") {
      if (existingHolding) {
        const totalQty = existingHolding.qty + qty;
        const totalCost = existingHolding.avg * existingHolding.qty + price * qty;
        existingHolding.qty = totalQty;
        existingHolding.avg = totalCost / totalQty;
        existingHolding.price = price;
        await existingHolding.save();
      } else {
        const newHolding = new HoldingsModel({
          userId,   // ✅ save userId
          name,
          qty,
          avg: price,
          price,
          net: "0.00%",
          day: "0.00%",
        });
        await newHolding.save();
      }
    } else if (mode === "SELL") {
      if (existingHolding) {
        if (existingHolding.qty > qty) {
          existingHolding.qty -= qty;
          existingHolding.price = price;
          await existingHolding.save();
        } else {
          await HoldingsModel.deleteOne({ userId, name });
        }
      }
    }

    // ✅ Update Positions — filter by userId AND name
    const existingPosition = await PositionsModel.findOne({ userId, name });

    if (mode === "BUY") {
      if (existingPosition) {
        const totalQty = existingPosition.qty + qty;
        const totalCost = existingPosition.avg * existingPosition.qty + price * qty;
        existingPosition.qty = totalQty;
        existingPosition.avg = totalCost / totalQty;
        existingPosition.price = price;
        await existingPosition.save();
      } else {
        const newPosition = new PositionsModel({
          userId,   // ✅ save userId
          product: "CNC",
          name,
          qty,
          avg: price,
          price,
          net: "0.00%",
          day: "0.00%",
          isLoss: false,
        });
        await newPosition.save();
      }
    } else if (mode === "SELL") {
      if (existingPosition) {
        if (existingPosition.qty > qty) {
          existingPosition.qty -= qty;
          existingPosition.price = price;
          await existingPosition.save();
        } else {
          await PositionsModel.deleteOne({ userId, name });
        }
      }
    }

    res.json({ message: "Order placed!", remainingFunds: req.user.funds });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to place order" });
  }
};
