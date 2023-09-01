const express = require("express");
const app = express();
var cors = require("cors");
var coordsRouter = require("./routes/coords");
var bodyParser = require("body-parser");

// create application/json parser
var jsonParser = bodyParser.json();

// create application/x-www-form-urlencoded parser
// var urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use(cors());
app.use("/coords", jsonParser, coordsRouter);
app.use("/", (req, res) => res.send("Hello world!"));

const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server running on port ${port}`));
