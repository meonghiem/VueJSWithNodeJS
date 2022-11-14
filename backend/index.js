const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const express = require("express");

const methodOverride = require("method-override");

const cookieParser = require("cookie-parser");

const cors = require("cors");

const route = require("./routers"); // auto require index.js

const app = express();

app.use(methodOverride("_method"));

app.set("view engine", "pug");
app.set("views", "views");
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());

// route init
route(app);

app.listen(3001, () => {
  console.log("server running");
});

async function main() {
  // ... you will write your Prisma Client queries here
  // await prisma.User.create({
  //   data: {
  //     account: "abcd",
  //     password: "abc",
  //   },
  // });
  // await prisma.Todo.create({
  //   data: {
  //     account: "abc",
  //     id: 3,
  //     title: "hello world",
  //     desc: "hello",
  //     is_done: true,
  //   },
  // });
  // const todo = await prisma.Todo.delete({
  //   where: {
  //     account_id: {
  //       account: "abc",
  //       id: 1,
  //     },
  //   },
  // });
  // if (todo) {
  //   console.log("deleted");
  // }
  // const allUsers = await prisma.Todo.findMany();
  // console.log(allUsers);
}

// If the return value of an async function is not explicitly a promise, it will be implicitly wrapped in a promise
main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
