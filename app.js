const express = require("express");
const cors = require("cors");

const Logs = require("./model/Logs");

const port = process.env.PORT || 4000;

const app = express();
app.use(cors());
app.use(express.json({ extended: false, limit: "250mb" })); //todo data not comming

app.use("/api/parkingUtility", require("./api/parkingUtility"));
app.use("/api/wildcardPhrasing", require("./api/wildcardPhrasing"));

app.listen(port, () => {
  Logs.create({ msg: `Server Started: ${port}` });
});
