const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

 const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Your email address is required"],
    unique: true,
  },
  username: {
    type: String,
    required: [true, "Your username is required"],
  },
  password: {
    type: String,
    required: [true, "Your password is required"],
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

// mongoose pre middleware to hash the password before saving the user document to the database
UserSchema.pre("save", async function () {
  this.password = await bcrypt.hash(this.password, 12);
  
});

module.exports = UserSchema;