const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const app = express();
const commentRoute = require("./routes/commentsRoute");
const path = require("path");
const serveStatic = require("serve-static");

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api", commentRoute);

if (process.env.NODE_ENV === "production") {
  app.use(serveStatic(__dirname + "/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "/build/index.html"));
  });
}

const PORT = process.env.PORT || 8000;
app.listen(PORT, (req, res) => {
  console.log(`Server connected to port: ${PORT}`);
});
