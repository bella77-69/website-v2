const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

require('dotenv').config();

const app = express();
const commentRoute = require('./routes/commentsRoute')

app.use(express.json())
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('./website/comments', commentRoute);

const PORT = process.env.PORT || 8000;

app.get('/', (req, res) => {
    res.status(200).json('Hello');
})

app.listen(PORT, (req, res) => {
    console.log(`Server connected to port: ${PORT}`);
});