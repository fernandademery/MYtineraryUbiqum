const express = require("express");
const router = express.Router();
const userModel = require("../model/userModel");

//const commonValidations = require("../validations/signup");
const bcrypt = require("bcrypt");
//const isEmpty = require("lodash/isEmpty");

// function validateInput(data, otherValidations) {
//     let {
//         errors
//     } = otherValidations(data);

//     return userModel.query({
//         where: {
//             email: data.email
//         },
//         orWhere: {
//             username: data.username
//         }
//     }).fetch().then(user => {
//         if (user) {
//             if (user.get('username') === data.username) {
//                 errors.username = 'There is user with such username';
//             }
//             if (user.get('email') === data.email) {
//                 errors.email = 'There is user with such email';
//             }
//         }

//         return {
//             errors,
//             isValid: isEmpty(errors)
//         };
//     })

// }

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
    const newUser = new userModel({
        const {
            username,
            email,
            password,
            firstname,
            lastname,
            picture
        } = req.body;
        // const password_digest = bcrypt.hashSync(password, 10);
    });
    newUser
        .save()
        .then(user => {
            res.send(user);
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


module.exports = router;