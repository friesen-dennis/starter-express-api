const Opacity = require("../model/Opacity");
const Logs = require("../model/Logs");

const parkingUtility = async (req, res) => {
  try {
    if (!req.body.breath) {
      res.status(400).json({ message: "breath required" });
      Logs.create({
        msg: `Error (api/parkingUtility): breath not provided`,
      });
    }
    const breath = await Opacity.find({ breath: req.body.breath });
    res.status(200).json({ breath });
  } catch (error) {
    Logs.create({
      msg: `Error (api/parkingUtility): ${error.message}`,
    });
  }
};

module.exports = parkingUtility;
