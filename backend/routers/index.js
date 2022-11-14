const loginRouter = require("./login");

const todoRouter = require("./todo");

const authMiddleWare = require("../middlewares/authMiddleWare");

const refreshRouter = require("./refresh");

function route(app) {
  app.use("/loginn", loginRouter);

  app.use("/todo", authMiddleWare.requireAuth, todoRouter);

  app.use("/refresh", refreshRouter);
}

module.exports = route;
