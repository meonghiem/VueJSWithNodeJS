const express = require("express");

const router = express.Router();

const getAccessTokenController = require("../controllers/GetAccessTokenByRefreshTokenController");

router.get("/", getAccessTokenController.getAccessToken);

module.exports = router;
