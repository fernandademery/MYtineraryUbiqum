const express = require("express");
const router = express.Router();
const userModel = require("../model/userModel");

const bcrypt = require("bcryptjs");
const validateRegisterInput = require("../validations/signup");

// router.post('/', (req, res) => {
//     validateInput(req.body, commonValidations).then(({
//         errors,
//         isValid
//     }) => {
//         if (isValid) {
//             const {
//                 username,
//                 email,
//                 password,
//                 firstname,
//                 lastname,
//                 picture
//             } = req.body;
//             const password_digest = bcrypt.hashSync(password, 10);

//             userModel.forge({
//                     username,
//                     email,
//                     password_digest,
//                     firstname,
//                     lastname,
//                     picture

//                 }, {
//                     hasTimestamps: true
//                 }).save()
//                 .then(user => {
//                     res.send(user);
//                 })
//                 .catch(err => res.status(500).json({
//                     error: err
//                 }));

//         } else {
//             res.status(400).json(errors);
//         }
//     });

// });

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