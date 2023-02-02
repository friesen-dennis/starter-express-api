const express = require("express");
const cors = require("cors");

const Logs = require("./model/Logs");

const port = process.env.PORT || 4000;

const app = express();
app.use(cors());
app.use(express.json({ extended: false, limit: "250mb" }));

app.use("/parkingUtility", require("./api/parkingUtility"));//todo get this from device 
app.use("/wildcardPhrasing", require("./api/wildcardPhrasing"));//todo get this from device 

app.listen(port, () => {
  Logs.create({ msg: `Server Started: ${port}` });
});
