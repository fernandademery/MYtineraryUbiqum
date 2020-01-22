const express = require("express");
const router = express.Router();
const userModel = require("../model/userModel");

const bcrypt = require("bcryptjs");
const validateRegisterInput = require("../validations/signup");

router.post("/", (req, res) => {
  const {
    errors,
    isValid
  } = validateRegisterInput(req.body);
  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  userModel.findOne({
    email: req.body.email
  }).then(user => {
    if (user) {
      errors.message = "Email already exists";
      return res.status(300).json(errors);
    }
  });

  userModel.findOne({
    username: req.body.username
  }).then(user => {
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

module.exports = router;