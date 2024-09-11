const express = require("express");
const validator = express.Router();
const jwt = require("jsonwebtoken");

// Middleware to validate the token
validator.use((req, res, next) => {
  // Get the token from the headers

  let token = req.headers.authorization;

  //   Check if there is a token
  if (!token) {
    return res.status(401).json({ error: "Es necesario un token " });
  }

  //   Check if the token is va
  if (token.startsWith("Bearer ")) {
    token = token.slice(7, token.length);
  }

  //   Verify the token
  if (token) {
    jwt.verify(token, process.env.KEYSECRET, (err, decoded) => {
      if (err) {
        return res.status(401).json({ error: "Token no es valido" });
      } else {
        req.decoded = decoded;
        next();
      }
    });
  }
});

module.exports = validator;
