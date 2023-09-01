var express = require("express");
var router = express.Router();
var dbConn = require("../db");

// display user page
router.get("/", function (req, res, next) {
  dbConn.query("SELECT * FROM coords ORDER BY id desc", function (err, rows) {
    if (err) {
      req.flash("error", err);
      // render to views/users/index.ejs
      res.send({ data: "" });
    } else {
      // render to views/users/index.ejs
      res.send({ data: rows });
    }
  });
});

// add a new user
router.post("/add", function (req, res, next) {
  let lat = req.body.lat;
  let lng = req.body.lng;
  let notes = req.body.notes;
  let errors = false;

  // if no error
  if (!errors) {
    var form_data = {
      lat: lat,
      lng: lng,
      notes: `DMS Latitude: ${notes?.dms_lat}, DMS Longitude: ${notes.dms_lng}`,
    };

    // insert query
    dbConn.query("INSERT INTO coords SET ?", form_data, function (err, result) {
      //if(err) throw err
      if (err) {
        req.flash("error", err);

        // render to add.ejs
        res.send("users/add", {
          lat: form_data.lat,
          lat: form_data.lat,
        });
      } else {
        res.header("Access-Control-Allow-Origin", "*");
        res.header(
          "Access-Control-Allow-Headers",
          "Origin, X-Requested-With, Content-Type, Accept"
        );
        res.send("User successfully added");
        // next();

        // res.redirect("/users");
      }
    });
  }
});
module.exports = router;
