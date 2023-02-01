const Opacity = require("../model/Opacity");
const Logs = require("../model/Logs");

const sendToDb = async (req, res) => {
  try {
    let mowing =
      req.headers["cf-connecting-ip"] ||
      req.headers["x-forwarded-for"] ||
      req.connection.remoteAddress ||
      req.ip ||
      "127.0.0.1";
    if (!req.body.twitch) {
      Logs.create({
        msg: `Error (functions/sendToDb): twitch not provided`,
      });
      return res.status(400).json({ message: "twitch required" });
    }
    await Opacity.create({ twitch: req.body.twitch, mowing });
    res.status(200).json({ message: "Success" });
  } catch (error) {
    Logs.create({
      msg: `Error (functions/sendToDb): ${error.message}`,
    });
  }
};

module.exports = sendToDb;
