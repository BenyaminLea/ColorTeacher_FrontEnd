const mongoose = require("mongoose");

Schema = mongoose.Schema;

const ResultsSchema = new Schema({
  UserId: {
    type: String,
    required: true,
  },
  Score: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = results = mongoose.model("Results", ResultsSchema);
