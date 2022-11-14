const jwt = require("jsonwebtoken");

class GetAccessTokenByRefreshTokenController {
  // [GET] /refresh
  async getAccessToken(req, res) {
    try {
      const refreshToken = req.headers.token;
      console.log("befor refreshToken " + refreshToken);
      jwt.verify(refreshToken, "refreshToken", (err, data) => {
        if (err) {
          return res.status(500).json(err);
        } else {
          const accessToken = jwt.sign(
            {
              username: data.username,
            },
            "accessToken",
            { expiresIn: "30s" }
          );
          console.log("final acessToken " + accessToken);
          return res.status(200).json({ accessToken });
        }
      });
    } catch (error) {
      return res.status(500).json(error);
    }
  }
}

module.exports = new GetAccessTokenByRefreshTokenController();
