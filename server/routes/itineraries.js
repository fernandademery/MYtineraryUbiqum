const express = require("express");

const router = express.Router();
const itineraryModel = require("../model/ItineraryModel");

router.get("/all", (req, res) => {
    itineraryModel
        .find({})
        .then(files => {
            res.send(files);
        })
        .catch(err => console.log(err))
});

router.get("/:city",
    (req, res) => {
        let cityRequested = req.params.city;
        itineraryModel.find({
                city: cityRequested
            })
            .then((result) => {
                res.send(result)
            })
            .catch(err => console.log(err))
    });



module.exports = router;