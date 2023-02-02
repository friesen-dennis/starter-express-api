const mongoose = require("mongoose");

const lunchSchema = mongoose.Schema({
  rickety: {
    type: String,
    required: true,
  },
  harvest: {
    type: String,
    unique: true,
    required: true, //todo get this from device side(random string of 15 characters it should be same for al request for that installation on particuler device)
  },
});

module.exports = lunch = mongoose.model("Lunch", lunchSchema);
