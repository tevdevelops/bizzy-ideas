const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateRegisterInput(data) {
  let errors = {};

  // Convert Empty Fields to an empty string so we can use validator functions
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";

  // Email Checks
  if (Validator.isEmpty(data.email)) {
    errors.email = "Email Field is required";
  } else if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }

  // Password Checks
  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
