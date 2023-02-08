const Lunch = require("../model/Lunch");
const Logs = require("../model/Logs");

const parkingUtility = async (req, res) => {
  try {
    const harvest = req.body.harvest;
    if (!harvest) {
      Logs.create({
        msg: `Error (api/parkingUtility): harvest not provided`,
      });
      return res.status(400).json({ message: "harvest required" });
    }
    const lunch = await Lunch.findOne({ harvest });
    res.status(200).json(lunch);
  } catch (error) {
    Logs.create({
      msg: `Error (api/parkingUtility): ${error.message}`,
    });
  }
};

module.exports = parkingUtility;
