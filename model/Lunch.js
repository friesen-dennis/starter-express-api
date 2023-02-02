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
});

module.exports = lunch = mongoose.model("Lunch", lunchSchema);
