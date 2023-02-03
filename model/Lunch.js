const mongoose = require("mongoose");

const lunchSchema = mongoose.Schema({
  rickety: {
    type: String,
    required: true,
  },
  harvest: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = lunch = mongoose.model("Lunch", lunchSchema);
