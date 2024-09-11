const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const dotenv = require("dotenv");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
dotenv.config();
const keySecret = process.env.KEYSECRET;

const authentication = {
  /**
   * Registers a new user in the database.
   *
   * @param {Object} req - The request object.
   * @param {Object} res - The response object.
   * @returns {Object} The response object with a success message or an error message.
   */
  async register(req, res) {
    const { email, password } = req.body;

    // hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    try {
      // Create a new user in the database
      const user = await prisma.administrators.create({
        data: {
          email: email,
          password: hashedPassword,
        },
      });
      return res.json({
        title: "Exito",
        message: "Usuario creado exitosamente",
        status: "success",
      });
    } catch (error) {

      return res.json({
        title: "Error",
        message: "No se pudo crear el usuario",
        status: "error",
      });
    }
  },

  /**
   * Authenticates a user and returns a JWT token.
   *
   * @param {Object} req - The request object.
   * @param {Object} res - The response object.
   * @returns {Object} The response object with a JWT token or an error message.
   */
  async login(req, res) {
    const { email, password } = req.body;

    if (!email || !password)
      return res.json({
        title: "Error ",
        message: "Email o Password son obligatorios ",
        status: "error",

      });

    // Find the user in the database
    const user = await prisma.Administrators.findUnique({
      where: {
        email: email,
      },
    });

    // Check if the user exists
    if (!user) {
      return res.json({
        title: "Error de autenticación",
        message: "Credenciales inválidas",
        status: "error",
      });
    }
    // Check if the password is correct
    const valid = await bcrypt.compare(password, user.password);
    // If the password is incorrect
    if (!valid) {
      return res.json({
        title: "Error de autenticación",
        message: "Credenciales inválidas",
        status: "error",
      });
    }
    // If the password is correct
    // Create a JWT token
    const token = jwt.sign({ adminId: user.adminId }, keySecret, {
      expiresIn: "3h",
    });

    // Send the token to the client
    return res.json({
      title: "Exito",
      message: "Usuario autenticado",
      token: token,
      status: "success",
    });
  },
};

module.exports = authentication;
