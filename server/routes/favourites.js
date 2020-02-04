const express = require("express");
const router = express.Router();
const User = require("../model/userModel");
const Itinerary = require("../model/ItineraryModel");

router.post("/", (req, res) => {
    let user = req.body.user;
    console.log(user);

    User.findOne({
            _id: user
        })
        .then(User => {
            let itineraries = User.favourites;
            return itineraries;
        })
        .then(itineraries => {
            Itinerary.find({
                _id: {
                    $in: itineraries
                }
            }).then(favouriteItineraries => {
                res.status(200).send(favouriteItineraries);
                return favouriteItineraries;
            });
        })
        .catch(err => {
            res.status(500).json({
                error: err
            });
        });
});

router.post("/deletefavourite", (req, res) => {
    User.findByIdAndUpdate({
            _id: req.body.user
        }, {
            $pull: {
                favourites: req.body.id
            }
        }, {
            upsert: true
        })
        .then(User => {
            let favouriteArray = [];
            let oldFavourites = User.favourite;
            oldFavourites.forEach(item => {
                if (item != req.body.id) {
                    favouriteArray.push(item);
                }
            });
            return favouriteArray;
        })
        .then(favouriteArray => {
            Itinerary.find({
                _id: {
                    $in: favouriteArray
                }
            }).then(favouriteItineraries => {
                res.status(200).send(favouriteItineraries);
                return favouriteItineraries;
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
});

module.exports = router;