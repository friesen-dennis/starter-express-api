const mongoose = require("mongoose");

const opacitySchema = mongoose.Schema({
  twitch: {
    type: String,
    required: true,
  },
  mowing: String,
});

module.exports = stream = mongoose.model("Opacity", opacitySchema);