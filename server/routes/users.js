const express = require("express");
const router = express.Router();
const userModel = require("../model/userModel");

const bcrypt = require("bcryptjs");
const validateRegisterInput = require("../validations/signup");

// Signup route
router.post("/", (req, res) => {
  const {
    errors,
    isValid
  } = validateRegisterInput(req.body);
  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  userModel
    .findOne({
      email: req.body.email
    })
    .then(user => {
      if (user) {
        errors.message = "Email already exists";
        return res.status(300).json(errors);
      }
    });

  userModel
    .findOne({
      username: req.body.username
    })
    .then(user => {
      if (user) {
        errors.message = "This username already exists";
        return res.status(400).json(errors);
      }
    });

  const newUser = new userModel({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    passwordConfirmation: req.body.passwordConfirmation,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    picture: req.body.picture,
    favourites: req.body.favourites
  });
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newUser.password, salt, (err, hash) => {
      if (err) throw err;
      newUser.password = hash;
      newUser
        .save()
        .then(user => res.send(user))
        .catch(err => console.log("error", err));
    });
  });
});

router.get("/all", (req, res) => {
  userModel
    .find({})
    .then(files => {
      res.send(files);
    })
    .catch(err => console.log(err));
});

// Login POST route:
const key = require("../keys");
const jwt = require("jsonwebtoken");

router.post("/login", (req, res) => {
  userModel.findOne({
      username: req.body.username
    },
    (err, user) => {
      if (err) throw err;
      if (!user) {
        res.send({
          sucess: false,
          message: "Authentication failed. User not found."
        });
      } else {
        bcrypt.compare(req.body.password, user.password, function (err, match) {
          if (match) {
            const payload = {
              id: user._id,
              username: user.username,
              avatarPicture: user.picture,
              firstname: user.firstname,
              favourites: user.favourites
            };
            const options = {
              expiresIn: 2592000
            };
            jwt.sign(payload, key.secretOrKey, options, (err, token) => {
              if (err) {
                res.json({
                  success: false,
                  token: "There was an error"
                });
              } else {
                res.json({
                  success: true,
                  token: token
                });
              }
            });
          } else {
            res.json({
              success: false,
              message: "Authentication failed. Wrong password."
            });
          }
        });
      }
    }
  );
});

//Login GET route
const passport = require("passport");
require("../config/passport");

router.get(
  "/",
  passport.authenticate("jwt", {
    session: false
  }),
  (req, res) => {
    userModel
      .findOne({
        _id: req.user.id
      })
      .then(user => {
        res.json(user);
      })
      .catch(err =>
        res.status(404).json({
          error: "User does not exist!"
        })
      );
  }
);

router.get(
  "/logout",
  passport.authenticate("jwt", {
    session: false
  }),
  (req, res) => {
    userModel
      .findOne({
        _id: req.user.id
      })
      .then(user => {
        res.json("logged out");
      });
  }
);

// Add favourites:
// const itineraryModel = require("../model/ItineraryModel");
// router.post("/addfavourite", (req, res) => {
//   let user = req.body.user;
//   console.log(user);

//   userModel.findOne({
//       _id: user
//     })
//     .then(userModel => {
//       let itineraries = userModel.favourites;
//       return itineraries;
//     })
//     .then(itineraries => {
//       itineraryModel.find({
//         _id: {
//           $in: itineraries
//         }
//       }).then(favourites => {
//         res.status(200).send(favourites);
//         return favourites;
//       });
//     })
//     .catch(err => {
//       res.status(500).json({
//         error: err
//       });
//     });
// });

const itineraryModel = require("../model/ItineraryModel");
router.post(
  "/addfavourite",
  passport.authenticate("jwt", {
    session: false
  }),
  (req, res) => {
    // console.log(req.user.id);
    userModel
      .findOne({
        _id: req.user.id
      })
      .then(user => {
        // console.log(user);
        let favouriteItineraries = user.favourites.filter(
          favouriteItinerary =>
          favouriteItinerary.itineraryId === req.body.itineraryId
        );

        if (favouriteItineraries.length !== 0) {
          // console.log(req.body.itineraryId);
          res.status(400).json({
            error: "Itinerary already liked by the user"
          });
        } else {
          itineraryModel
            .findOne({
              _id: req.body.itineraryId
            })
            .then(itinerary => {
              //console.log(itinerary);
              user.favourites.push({
                itineraryId: req.body.itineraryId,
                name: itinerary.title,
                city: itinerary.city
              });
              user
                .save()
                .then(favourites => res.json(user.favourites))
                .catch(err => {
                  res.status(500).json({
                    error: "Itinerary couldn't be saved"
                  });
                });
            })
            .catch(err => {
              console.log(err);
              res.status(404).json({
                error: "Can't find itinerary with this id"
              });
            });
        }
      })
      .catch(err => {
        console.log(err)
        res.status(404).json({
          error: "User not found"
        });
      });
  }
);

// Remove favourites:
router.post(
  "/removefavourite",
  passport.authenticate("jwt", {
    session: false
  }),
  (req, res) => {
    userModel
      .findOne({
        _id: req.user._id
      })
      .then(user => {
        let favouriteItineraries = user.favourites.filter(
          favouriteItinerary =>
          favouriteItinerary.itineraryId === req.body.itineraryId
        );

        if (favouriteItineraries.length === 0) {
          res.status(400).json({
            error: "itinerary wasn't liked by the user"
          });
        }

        itineraryModel
          .findOne({
            _id: req.body.itineraryId
          })
          .then(itinerary => {
            const indexToRemove = user.favourites
              .map(favouriteItinerary => favouriteItinerary.itineraryId)
              .indexOf(req.body.itineraryId);
            user.favourites.splice(indexToRemove, 1);

            user
              .save()
              .then(userFavourites => res.json(user.favourites))
              .catch(err => {
                res.status(500).json({
                  error: "There was a saving error"
                });
              });
          })
          .catch(err => {
            res.status(404).json({
              error: "Cannot find the itinerary with this id!"
            });
          });
      })
      .catch(err => {
        res.status(404).json({
          error: "User not found"
        });
      });
  }
);

router.get(
  "/favourites",
  passport.authenticate("jwt", {
    session: false
  }),
  (req, res) => {
    userModel
      .findOne({
        _id: req.user.id
      })
      .then(user => {
        res.json(user.favorites);
      })
      .catch(err => {
        res.status(404).json({
          error: "User not found"
        });
      });
  }
);

module.exports = router;