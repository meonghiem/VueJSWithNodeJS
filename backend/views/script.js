const btnDeleteTodo = document.getElementById("btn-delete-todo");
const btnSuaTodo = document.getElementById("btn-sua-todo");
const btnSuaTodo2 = document.getElementById("btn-sua-todo-2");
const aElement = document.getElementById("abc");
const form = document.forms["form-name"];
btnDeleteTodo.onclick = function () {
  form.action = "/todo?_method=DELETE";
  form.submit();
};

btnSuaTodo.onclick = function () {
  form.action = "/todo?_method=PUT";
  form.submit();
};

btnSuaTodo2.onclick = function () {
  const id = this.getAttribute("data-id");
  aElement.setAttribute("href", "/todo/" + id);
};
