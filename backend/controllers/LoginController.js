const { PrismaClient } = require("@prisma/client");

const jwt = require("jsonwebtoken");

const prisma = new PrismaClient();

class LoginController {
  // [POST] /login
  async handleLogin(req, res) {
    try {
      // console.log(res);
      const { username, password } = req.body;
      // console.log(username);
      const user = await prisma.User.findUnique({
        where: {
          account: username,
        },
      });
      if (!user) {
        return res.json({
          errCode: 1,
        });
      }
      const isMatch = user.password === password;
      if (!isMatch) {
        return res.json({
          errCode: 1,
        });
      }
      // console.log(username);
      // res.cookie("account", username);
      // return res.redirect("/todo");
      const accessToken = jwt.sign(
        {
          username: user.account,
        },
        "accessToken",
        { expiresIn: "30s" }
      );
      const refreshToken = jwt.sign(
        {
          username: user.account,
        },
        "refreshToken",
        { expiresIn: "10d" }
      );
      return res.status(200).json({
        errCode: 0,
        accessToken,
        refreshToken,
      });
    } catch (e) {
      console.log(e);
      // return res.redirect("loginn");
      return res.status(500).json({
        errCode: 1,
      });
    }
  }

  // [GET] /loginn
  index(req, res) {
    res.render("loginn");
  }
}

module.exports = new LoginController();
