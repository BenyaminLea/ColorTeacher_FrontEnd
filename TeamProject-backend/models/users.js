const mongoose = require("mongoose");

Schema = mongoose.Schema;

const UserSchema = new Schema({
  UserName: {
    type: String,
    required: true,
  },
  FirstName: {
    type: String,
    required: true,
  },
  LastName: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  password2: {
    type: String,
  },

  Phone: {
    type: String,
  },
  type: {
    type: String,
    default: "user",
  },
  averageScore: {
    type: Number,
    default: 0,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = users = mongoose.model("Users", UserSchema);
