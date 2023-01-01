const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const commentRoute = require("./routes/commentsRoute");
const path = require('path');
const app = express();


app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



app.use(express.static(path.join(__dirname, 'build')));
app.use("/api", commentRoute);

app.get('/', function (req, res) {
  +app.get('/*', function (req, res) {
     res.sendFile(path.join(__dirname, 'build', 'index.html'));
   });
  }); 
  
const PORT = process.env.PORT || 8000;

app.listen(PORT, (req, res) => {
  console.log(`Server connected to port: ${PORT}`);
});
