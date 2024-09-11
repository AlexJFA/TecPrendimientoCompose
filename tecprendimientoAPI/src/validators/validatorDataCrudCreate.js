const { check } = require("express-validator");
const { validationResult  } = require("express-validator");
/**
 * Validates the data for creating a new client.
 * @namespace validatorDataCrudCreate
 */

const validation = (req, res, next) => {
  try {
    validationResult(req).throw();
    return next();

  } catch (err) {
    return res.json(err);
  }
};

const validatorDataCrudCreate = [
  /**
   * Validates the data for creating a new client.
   * @method
   * @memberof validatorDataCrudCreate
   * @returns {Array} An array of validation rules.
   */

  check("firtsName").exists().not().isEmpty(),
  check("lastName").exists().not().isEmpty(),
  check("email").exists().not().isEmpty().isEmail(),
  check("phone").exists().not().isEmpty(),
  (req, res, next) => {
     validation(req, res, next);
  }
];

module.exports = validatorDataCrudCreate;
