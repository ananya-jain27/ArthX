if(process.env.NODE_ENV != "production"){
    require('dotenv').config({ path: "../.env" })
}

const mongoose = require('mongoose');
const OrdersModel = require('../models/OrdersModel');
const HoldingsModel = require('../models/HoldingsModel');
const PositionsModel = require('../models/PostionsModel');
const initdata = require("../../dashboard/src/data/data.js");

//connection build with mongoDB 
let dbUrl = process.env.ATLASDB_URL;

async function main(){
    // await mongoose.connect('mongodb://127.0.0.1:27017/arthx');
    await mongoose.connect(dbUrl);
}
main().then(() => {
    console.log("connection build");
})
.catch((err) => {
    console.log(err);
})

const initDb = async () => {
    // await Listing.deleteMany({});

    await HoldingsModel.insertMany(initdata.holdings);
    // await OrdersModel.insertMany(initdata.orders);
    await PositionsModel.insertMany(initdata.positions);
    console.log("data was initialized");
}

initDb();