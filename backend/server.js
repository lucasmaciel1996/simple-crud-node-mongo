const express = require("express");
const cors = require("cors");
const mogoose = require("mongoose");
const requireDir = require("require-dir");

const app = express();
app.use(express.json());
app.use(cors());

mogoose.connect("mongodb://mongo:27017/nodeapi", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
requireDir("./src/models");

app.get("/", (req, res) => res.send("Hello World"));
app.use("/api", require("./src/routes"));

app.listen(3000, () => {
  console.log("Started on port 3000");
});
