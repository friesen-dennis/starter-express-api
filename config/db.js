const mongoose = require("mongoose");
const Logs = require("../model/Logs");

module.exports = () => {
  mongoose
    .connect(process.env.MONGO_DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      Logs.create({
        msg: "Database Connected...",
      });
      console.log("Database Connected...");
      require("../app");
    })
    .catch((e) => {
      Logs.create({
        msg: `Error(config/db.js): ${e.message}`,
      });
      console.log("Database Connection Error", e.message);
      // process.exit(1);
    });
};
