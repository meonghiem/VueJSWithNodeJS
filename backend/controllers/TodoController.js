const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

class TodoController {
  // [GET] /todo
  async index(req, res) {
    // const username = req.cookies.account;
    // const username = req.query.username;
    const username = req.data.username;
    console.log(username);

    // console.log(req.username);
    const todos = await prisma.Todo.findMany({
      where: {
        account: username,
      },
    });
    // return res.render("todo", { todoList: todos });
    // console.log(username);
    return res.json({
      code: 200,
      data: todos,
    });
  }

  // [POST] /todo

  // [DELETE] /todo
  async deleteTodo(req, res) {
    try {
      // const username = req.query.username;
      const username = req.data.username;
      console.log(username);
      // const username = req.username;
      const _id = req.query.id;
      console.log(_id);
      const todo = await prisma.Todo.delete({
        where: {
          account_id: {
            account: username,
            id: parseInt(_id, 10),
          },
        },
      });
      if (todo) {
        console.log("success delete");
      }
      const todos = await prisma.Todo.findMany({
        where: {
          account: username,
        },
      });
      // res.render("todo", { todoList: todos });
      res.status(200).json({
        code: 200,
        data: todos,
      });
    } catch (e) {
      console.log(e);
      res.status(500).json(e);
    }
  }

  // [put] /todo
  async putTodo(req, res) {
    try {
      const { _id, tinhtrang } = req.body;
      const username = req.data.username;
      console.log(_id);
      console.log(tinhtrang);
      const todo = await prisma.Todo.update({
        where: {
          account_id: {
            account: username,
            id: parseInt(_id, 10),
          },
        },
        data: {
          is_done: tinhtrang === "done" ? true : false,
        },
      });

      if (todo) {
        console.log(todo);
      }
      const todos = await prisma.Todo.findMany({
        where: {
          account: username,
        },
      });
      // res.render("todo", { todoList: todos });
      res.status(200).json({
        code: 200,
        data: todos,
      });
    } catch (e) {
      console.log(e);
    }
  }

  // [PUT] /todo/:id
  async putTodoID(req, res) {
    // const username = req.cookies.account;
    const username = req.body.username;
    const id = req.params.id;
    const title = req.body.title;
    const desc = req.body.desc;
    const tinhtrang = req.body.tinhtrang;
    const todo = await prisma.Todo.update({
      where: {
        account_id: {
          account: username,
          id: parseInt(id, 10),
        },
      },
      data: {
        is_done: tinhtrang === "done" ? true : false,
        title,
        desc,
      },
    });
    if (todo) {
      console.log(todo);
    }
    // res.render("editTodo", { todo, id });
    res.redirect("/todo");
  }

  // [GET] /:id
  async ID(req, res) {
    const id = req.params.id;
    // const username = req.cookies.account;
    const username = req.query.username;
    const todos = await prisma.Todo.findUnique({
      where: {
        account_id: {
          account: username,
          id: parseInt(id, 10),
        },
      },
    });

    console.log(todos);

    // res.render("editTodo", { todo: todos });
    return res.status(200).json({
      code: 200,
      data: todos,
    });
  }
}

module.exports = new TodoController();
