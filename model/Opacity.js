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
    required: true,
  },
});

module.exports = opacity = mongoose.model("Opacity", opacitySchema);
