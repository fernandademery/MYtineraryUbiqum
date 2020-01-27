const express = require("express");
const router = express.Router();
const userModel = require("../model/userModel");

const bcrypt = require("bcryptjs");
const validateRegisterInput = require("../validations/signup");

router.post("/", (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);
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
    picture: req.body.picture
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
  userModel.findOne(
    {
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
        bcrypt.compare(req.body.password, user.password, function(err, match) {
          if (match) {
            const payload = {
              id: user.id,
              username: user.username,
              avatarPicture: user.avatarPicture
            };
            const options = { expiresIn: 2592000 };
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

module.exports = router;
