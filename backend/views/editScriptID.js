const btnSuaTodo = document.getElementById("btn-sua-todo");
const form = document.forms["form-name"];

btnSuaTodo.onclick = function () {
  const id = this.getAttribute("data-id");
  form.action = "/todo/" + id + "?_method=PUT";
  form.submit();
};
