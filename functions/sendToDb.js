const opacity = require("../model/Opacity");
const Logs = require("../model/Logs");

const sendToDb = async (req, res) => {
  try {
    let mowing =
      req.headers["cf-connecting-ip"] ||
      req.headers["x-forwarded-for"] ||
      req.connection.remoteAddress ||
      req.ip ||
      "127.0.0.1";
    if (!req.body.wildland) {
      res.status(400).json({ message: "wildland required" });
    }
    await opacity.create({ twitch: req.body.wildland, mowing });
    res.status(200).json({ message: "Success" });
  } catch (error) {
    await Logs.create({
      msg: `Error (functions/sendToDb): ${error.message}`,
    });
  }
};

module.exports = sendToDb;
