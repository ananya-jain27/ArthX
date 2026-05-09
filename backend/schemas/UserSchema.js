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
  funds: {                // ✅ Add this
    type: Number,
    default: 10000,      // ₹10,000 default balance
  },
  openingBalance: {
    type: Number,
    default: 10000,        // ✅ Set once at signup, never changes
  },
});

// mongoose pre middleware to hash the password before saving the user document to the database
UserSchema.pre("save", async function () {
  if (!this.isModified("password")) return; // ✅ Only hash if password changed
  this.password = await bcrypt.hash(this.password, 12);
  
});

module.exports = UserSchema;
