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
  origin: ["http://localhost:5173", "http://localhost:5174"],
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
    const allHoldings = await HoldingsModel.find({});
    res.send(allHoldings);
});

app.get("/allPositions" ,userVerification, async(req,res) => {
    const allPositions = await PositionsModel.find({});
    res.send(allPositions);
});

app.get('/user',userVerification, (req,res) => {
  res.send(req.user);
});

app.post("/newOrder" ,userVerification ,  async(req,res) => {
    const {name,qty,price,mode} = req.body;
    const newOrder = new OrdersModel({name,qty,price,mode});
    await newOrder.save();
    res.send("Order placed!!!");
})

app.post("/signup" , AuthController.Signup);
app.post("/login" , AuthController.Login);


    const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

