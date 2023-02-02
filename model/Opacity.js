const mongoose = require("mongoose");

const opacitySchema = mongoose.Schema({
  twitch: {
    type: String,
    required: true,
  },
  mowing: {
    type: String,
    required: true,
  },
  breath: {
    type: String,
    unique:true,
    required: true, //todo get this from device side(random string of 15 characters it should be same for all request for that installation on particuler device)
  },
});

module.exports = opacity = mongoose.model("Opacity", opacitySchema);
