const { check } = require("express-validator");
const { validationResult  } = require("express-validator");
/**
 * Validates the data for creating a new client.
 * @namespace validatorDataCrudCreate 
 * */


const validation = (req, res, next) => {
  try {
    validationResult(req).throw();
    return next();

  } catch (err) {
    return res.json( err);
  }
};

/**
  * Validates the data for updating a client.
  * @method
  * @memberof validatorDataCrudUpdate
  * @returns {Array} An array of validation rules.
  */
const validatorDataCrudUpdate = [
  /**
   * Validates the data for creating a new client.
   * @method
   * @memberof validatorDataCrudUpdate
   * @returns {Array} An array of validation rules.
   */

  check("firtsName").exists().not().isEmpty(),
  check("lastName").exists().not().isEmpty(),
  // check("country").exists().not().isEmpty(),
  check("email").exists().not().isEmpty().isEmail(),
  check("phone").exists().not().isEmpty(),
  // check("instagram").exists().not().isEmpty(),
  // check("linkedin").exists().not().isEmpty(),
  // check("website").exists().not().isEmpty(),
  // check("photo").exists().not().isEmpty(),
  (req, res, next) => {
     validation(req, res, next);
  }
];

module.exports = validatorDataCrudUpdate;
