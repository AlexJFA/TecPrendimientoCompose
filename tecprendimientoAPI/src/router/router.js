const express = require("express");

/**
 * The controller module for handling API requests.
 * @type {object}
 */
const controler = require("../controler/controler.js");
const authentication = require("../controler-authentication/authentication.js");
const validator = require("../validators/validatorToken.js");
const validatorDataCrudCreate = require("../validators/validatorDataCrudCreate.js");
const validatorDataCrudUpdate = require("../validators/validatorDataCrudUpdate.js");
const validatorAuth = require("../validators/validatorAuth.js");
const path = require("path");

/**
 * The router for the API.
 * @type {object}
 */
const router = express.Router();


// ------------------------------------ Routes authentication -----------------------------------

/**
 * Route for user authentication.
 * @name POST /authentication
 * @function
 * @memberof router
 * @inner
 * @param {object} req - The request object.
 * @param {object} res - The response object.
 * @returns {object} - The response object with authentication details.
 */
router.post("/authentication", validatorAuth, authentication.login);


/**
 * Route for user registration.
 * @name POST /register
 * @function
 * @memberof router
 * @inner
 * @param {object} req - The request object.
 * @param {object} res - The response object.
 * @returns {object} - The response object with registration details.
 */
router.post("/register", validator, validatorAuth, authentication.register);

// -------------------------------------- Routes Crud -----------------------------------

/**
 * Route for 
 * @name GET /
 * @function
 * @memberof router
 * @inner
 * @param {object} req - The request object.
 * @param {object} res - The response object.
 * @returns {object} - The response object with the list of clients.
 */
router.get("/", (req, res) => { res.json({message:"Welcome to the API"})});

// router.get("/imagen/:nameImg", (req, res) => {
//   const { nameImg } = req.params;
//   return res.sendFile(path.join(__dirname, `../src/uploads/${nameImg}`));

// });

/**
 * Route for listing all clients.
 * @name GET /listClients
 * @function
 * @memberof router
 * @inner
 * @param {object} req - The request object.
 * @param {object} res - The response object.
 * @returns {object} - The response object with the list of clients.
 */
router.get("/listClients", validator, controler.list);

/**
 * Route for getting a single client by ID.
 * @name GET /oneClient/:id
 * @function
 * @memberof router
 * @inner
 * @param {object} req - The request object.
 * @param {object} res - The response object.
 * @returns {object} - The response object with the client details.
 */
router.get("/oneClient/:id", validator ,controler.getOne);

/**
 * Route for getting a single client by ID.
 * @name GET /oneClient/:id
 * @function
 * @memberof router
 * @inner
 * @param {object} req - The request object.
 * @param {object} res - The response object.
 * @returns {object} - The response object with the client details.
 */
router.get("/client/:userName", controler.getOne);

/**
 * Route for creating a new client.
 * @name POST /newClient
 * @function
 * @memberof router
 * @inner
 * @param {object} req - The request object.
 * @param {object} res - The response object.
 * @returns {object} - The response object with the newly created client.
 */
router.post("/newClient", validator, validatorDataCrudCreate , controler.create);

/**
 * Route for updating a client by ID.
 * @name PATCH /updateClient/:id
 * @function
 * @memberof router
 * @inner
 * @param {object} req - The request object.
 * @param {object} res - The response object.
 * @returns {object} - The response object with the updated client.
 */
router.patch("/updateClient/:id", validator, validatorDataCrudUpdate,   controler.update);

/**
 * Route for deleting a client by ID.
 * @name DELETE /deleteClient/:id
 * @function
 * @memberof router
 * @inner
 * @param {object} req - The request object.
 * @param {object} res - The response object.
 * @returns {object} - The response object with a success message.
 * @throws {object} - The response object with an error message.
 */
router.delete("/deleteClient/:id", validator, controler.delete);



// -------------------------------------- Routes Card and components -----------------------------------


// --------------------------------------   cards -----------------------------------

/**
 * Route for listing all cards.
 * @name GET /listComponents
 * @function
 * @memberof router
 * @inner
 * @param {object} req - The request object.
 * @param {object} res - The response object.
 * @returns {object} - The response object with a list of cards.
 */

router.get("/listCards", controler.getAllcards);


/**
 * Route for getting a single card by ID.
 * @name GET /listComponents/:id
 * @function
 * @memberof router
 * @inner
 * @param {object} req - The request object.
 * @param {object} res - The response object.
 * @returns {object} - The response object with the card details.
 */

router.get("/listCards/:id", controler.getOneCard);



// --------------------------------------   components -----------------------------------

/**
 * Route for listing all components.
 * @name GET /listComponents
 * @function
 * @memberof router
 * @inner
 * @param {object} req - The request object.
 * @param {object} res - The response object.
 * @returns {object} - The response object with a list of components.
 */
router.get("/listComponents", controler.getAllcomponents);



/**
 * Route for getting a single component by ID.
 * @name GET /listComponents/:id
 * @function
 * @memberof router
 * @inner
 * @param {object} req - The request object.
 * @param {object} res - The response object.
 * @returns {object} - The response object with the component details.
 */
router.get("/listComponents/:id", controler.getOneComponent);



module.exports = router;
