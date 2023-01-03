const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const commentRoute = require("./routes/commentsRoute");
const app = express();


app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api", commentRoute);


const PORT = process.env.PORT || 8000;

app.listen(PORT, (req, res) => {
  console.log(`Server connected to port: ${PORT}`);
});