const express = require("express");

const router = express.Router();

const cityModel = require("../model/cityModel");

router.get("/test", (req, res) => {
  res.send({
    msg: "Cities test route."
  });
});

module.exports = router;

/*get all cities*/
router.get("/all", (req, res) => {
  cityModel
    .find({})
    .then(files => {
      res.send(files);
    })
    .catch(err => console.log(err));
});

/* Route to add new cities */
router.post("/", (req, res) => {
  const newCity = new cityModel({
    name: req.body.name,
    country: req.body.country
  });
  newCity
    .save()
    .then(city => {
      res.send(city);
    })
    .catch(err => {
      console.log("error", err.errors.name.kind);
      if (err.errors.name.kind === "unique") {
        res.status(500).send("City already exists");
      } else {
        res.status(500).send("Unknown error");
      }
    });
});
