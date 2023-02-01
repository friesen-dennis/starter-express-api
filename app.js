const express = require("express");
const cors = require("cors");

const Logs = require("./model/Logs");

const port = process.env.PORT || 4000;

const app = express();
app.use(cors());
app.use(express.json({ extended: false, limit: "250mb" }));

app.use("/", require("./api/sendToDb"));

app.listen(port, () => {
  Logs.create({ msg: `Server Started: ${port}` });
});
