const moongoose = require("mongoose");

const userSchema = new moongoose.Schema({
  id: Number,
  first_name: String,
  last_name: String,
  email: String,
  gender: String,
  income: String,
  city: String,
  car: String,
  quote: String,
  phone_price: Number,
});

const User = moongoose.model("User", userSchema);
module.exports = User;
