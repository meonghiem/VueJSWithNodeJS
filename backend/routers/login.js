const express = require("express");

const router = express.Router();

const loginController = require("../controllers/LoginController");

router.get("/", loginController.index);

router.post("/", loginController.handleLogin);

module.exports = router;
