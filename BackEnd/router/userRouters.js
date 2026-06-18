const express = require("express");
const validateTokenHandler = require('../middleware/validateTokenHandler');
const { loginUser, currentUser, registerUser } = require("../Controllers/UserController");
const router = express.Router();

router.post("/register", registerUser);

router.post("/login", loginUser);

router.post("/current", validateTokenHandler, currentUser);

module.exports = router; 
