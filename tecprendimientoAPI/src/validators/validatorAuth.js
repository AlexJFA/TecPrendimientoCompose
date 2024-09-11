const { check } = require("express-validator");
const { validationResult } = require("express-validator");

/**
 *
 * @namespace validatorAuth
 */

const validation = (req, res, next) => {
  try {
    validationResult(req).throw();
    return next();
  } catch (err) {
    return res.json(err);
  }
};

const validatorAuth = [
  /**
   * Validates the data for creating a new client.
   * @method
   * @memberof validatorAuth
   * @returns {Array} An array of validation rules.
   */

  check("email").exists().not().isEmpty().isEmail(),
  check("password").exists().not().isEmpty(),

  (req, res, next) => {
    validation(req, res, next);
  },
];

module.exports = validatorAuth;
