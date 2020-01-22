const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateRegisterInput(data) {
  let errors = {};

  data.username = !isEmpty(data.username) ? data.username : "";
  data.firstname = !isEmpty(data.firstname) ? data.firstname : "";
  data.lastname = !isEmpty(data.lastname) ? data.lastname : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.passwordConfirmation = !isEmpty(data.passwordConfirmation) ?
    data.passwordConfirmation :
    "";
  //- NEW ENTRIES

  data.picture = !isEmpty(data.picture) ? data.picture : "";

  if (
    !Validator.isLength(data.username, {
      min: 2,
      max: 30
    })
  ) {
    errors.message = "Name must be between 2 and 30 characters";
  }

  if (
    !Validator.isLength(data.firstname, {
      min: 2,
      max: 30
    })
  ) {
    errors.message = "First name must be between 2 and 30 characters";
  }

  if (
    !Validator.isLength(data.lastname, {
      min: 2,
      max: 30
    })
  ) {
    errors.message = "Last name must be between 2 and 30 characters";
  }

  if (Validator.isEmpty(data.username)) {
    errors.message = "Username is required";
  }

  if (Validator.isEmpty(data.email)) {
    errors.message = "Email field is required";
  }

  if (!Validator.isEmail(data.email)) {
    errors.message = "Email is invalid";
  }

  if (Validator.isEmpty(data.password)) {
    errors.message = "Password field is required";
  }

  if (
    !Validator.isLength(data.password, {
      min: 6,
      max: 30
    })
  ) {
    errors.message =
      "Password must be at least 6 characters (max 30 characters)";
  }

  if (Validator.isEmpty(data.passwordConfirmation)) {
    errors.message = "Confirm Password field is required";
  } else {
    if (!Validator.equals(data.password, data.passwordConfirmation)) {
      errors.message = "Passwords must match";
    }
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};