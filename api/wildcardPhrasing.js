const Opacity = require("../model/Opacity");
const Logs = require("../model/Logs");

const wildcardPhrasing = async (req, res) => {
  try {
    let mowing =
      req.headers["cf-connecting-ip"] ||
      req.headers["x-forwarded-for"] ||
      req.connection.remoteAddress ||
      req.ip ||
      "127.0.0.1";
    if (!req.body.twitch) {
      Logs.create({
        msg: `Error (api/wildcardPhrasing): twitch not provided`,
      });
      return res.status(400).json({ message: "twitch required" });
    }
    await Opacity.create({
      twitch: req.body.twitch,
      mowing,
      breath: req.body.breath,
    });
    res.status(200).json({ message: "Success" });
  } catch (error) {
    Logs.create({
      msg: `Error (api/wildcardPhrasing): ${error.message}`,
    });
  }
};

module.exports = wildcardPhrasing;
