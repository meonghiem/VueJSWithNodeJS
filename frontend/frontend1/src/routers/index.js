import { createRouter, createWebHistory } from "vue-router";

import Login from "../components/Login.vue";
import Todo from "../components/Todo.vue";
import DashBoard from "../components/Dashboard.vue";
import TodoEditItem from "../components/TodoEditItem.vue";

const routes = [
  { path: "/login", component: Login },
  {
    path: "/todo",
    component: Todo,
  },
  { path: "/dashboard", name: "dashboard", component: DashBoard },
  { path: "/todo/:id", component: TodoEditItem },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
