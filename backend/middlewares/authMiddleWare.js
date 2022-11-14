const { PrismaClient } = require("@prisma/client");

const jwt = require("jsonwebtoken");

const prisma = new PrismaClient();

module.exports.requireAuth = async function (req, res, next) {
  const accessToken = req.headers.token;
  if (accessToken) {
    jwt.verify(accessToken, "accessToken", (err, data) => {
      if (err && err.message == "jwt expired") {
        console.log(err.name);
        return res.status(200).json({
          code: 401,
          err,
        });
      } else if (err) {
        console.log(err);
        return res.status(500).json({ err });
      }
      req.data = data;
      next();
    });
  } else {
    return res.status(500).json("You are not  authenticated");
  }
};
