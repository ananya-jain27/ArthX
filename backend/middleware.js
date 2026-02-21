const UserModel = require("./models/UserModel");
require("dotenv").config();
const jwt = require("jsonwebtoken");

// authentication middleware

module.exports.userVerification = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({ status: false, message: "Unauthorized access" });
  }
  jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
    if (err) {
     return res.status(401).json({ status: false , message:'User not found'})
    } else {
      const user = await UserModel.findById(data.id)
      if (!user) return res.status(401).json({ status: false , message:'User not found'})
      else {
       req.user = user;
       next();
      }
    }
  })
}