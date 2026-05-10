if(process.env.NODE_ENV != "production"){
    require('dotenv').config()
}
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')


const mongoose = require('mongoose');
const OrdersModel = require('./models/OrdersModel');
const HoldingsModel = require('./models/HoldingsModel');
const PositionsModel = require('./models/PostionsModel');
const AuthController = require("./controller/AuthController.js");
const newOrder = require("./controller/newOrder.js");
const { userVerification } = require('./middleware.js');

let dbUrl = process.env.ATLASDB_URL;

async function main(){
    // await mongoose.connect('mongodb://127.0.0.1:27017/arthx');
    await mongoose.connect(dbUrl);
}

main().then(() => console.log('Database Connected!'))
.catch((err) => {
    console.log(err);
});

app.use(cors({
  origin: [process.env.FRONTEND_URL, process.env.DASHBOARD_URL],
  credentials: true
}));
app.use(bodyParser.json());
app.use(express.json());
app.use(cookieParser());


app.get('/', userVerification ,async(req, res) => {
    res.json({status : true , message: "Welcome to ArthX Dashboard"});
});

app.get("/allHoldings" ,userVerification,  async(req,res) => {
    // console.log(req.user);
    const allHoldings = await HoldingsModel.find({ userId: req.user._id });
    res.send(allHoldings);
});

app.get("/allPositions" ,userVerification, async(req,res) => {
    const allPositions = await PositionsModel.find({ userId: req.user._id });
    res.send(allPositions);
});

app.get('/user',userVerification, (req,res) => {
  res.send(req.user);
});

app.post("/newOrder" ,userVerification ,  newOrder.newOrder);

// GET - fetch logged in user's funds
app.get("/funds", userVerification, async (req, res) => {
  try {
    const { funds, openingBalance } = req.user;
    const marginsUsed = openingBalance - funds;
    res.json({
      funds,                // current available balance
      openingBalance,       // original balance at signup
      marginsUsed,          // total spent so far
    });
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch funds" });
  }
});

app.post("/signup" , AuthController.Signup);
app.post("/login" , AuthController.Login);

app.post("/logout", (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    secure: true,
    sameSite: "None",
  });
  res.json({ message: "Logged out successfully" });
});

    const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

