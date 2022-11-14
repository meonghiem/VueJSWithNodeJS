const express = require("express");

const router = express.Router();

const todoController = require("../controllers/TodoController");

router.get("/", todoController.index);

// router.post("/", todoController.handleLogin);

router.delete("/", todoController.deleteTodo);

router.put("/:id", todoController.putTodoID);

router.put("/", todoController.putTodo);

router.get("/:id", todoController.ID);

module.exports = router;
