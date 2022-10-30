const getEl = (x) => document.getElementById(x);

const borrarBtn = getEl("borrarBtn");
const resumBtn = getEl("resumBtn");
const estudiante = getEl("estudiante");
const trainee = getEl("trainee");
const junior = getEl("junior");

const cantidad = getEl("cantidad");
const categoria = getEl("categoria");
const total = getEl("total");

function cambiarCat(x) {
  categoria.value = x;
  checkStatus();
}

function catEstudiante() {
  cambiarCat("estudiante");
  selectElement("estudiante", "trainee", "junior", "dodgerblue", "white");
}
function catTrainee() {
  cambiarCat("trainee");
}
function catJunior() {
  cambiarCat("junior");
}

function changeBackground(elem, color) {
  elem.style.backgroundColor = color;
}
function changeColor(elem, color) {
  elem.style.color = color;
  elem.style.transition = "0.1s ease";
}

function deleteStyles(x) {
  changeBackground(x, "inherit");
  changeColor(x, "inherit");
}

function selectElement(selected, notSelected1, notSelected2, back, col) {
  changeBackground(selected, back);
  changeColor(selected, col);
  deleteStyles(notSelected1);
  deleteStyles(notSelected2);
}

function checkStatus() {
  const catVal = categoria.value;
  switch (catVal) {
    case "estudiante":
      selectElement(estudiante, trainee, junior, "dodgerblue", "white");
      break;
    case "trainee":
      selectElement(trainee, estudiante, junior, "darkturquoise", "white");
      break;
    case "junior":
      selectElement(junior, estudiante, trainee, "gold", "black");
      break;
  }
}

function borrarPrecio() {
  deleteStyles(estudiante);
  deleteStyles(trainee);
  deleteStyles(junior);
  cantidad.value = "";
  categoria.value = "ninguno";
  total.innerHTML = "";
}

function calcularTotal() {
  const cantVal = +cantidad.value;
  const catVal = categoria.value;
  let precioFinal = 200 * cantVal;
  switch (catVal) {
    case "estudiante":
      precioFinal *= 0.2;
      break;
    case "trainee":
      precioFinal *= 0.5;
      break;
    case "junior":
      precioFinal *= 0.85;
      break;
  }
  total.innerHTML = precioFinal;
}

borrarBtn.addEventListener("click", borrarPrecio);
resumBtn.addEventListener("click", calcularTotal);
categoria.addEventListener("change", checkStatus);
estudiante.addEventListener("click", catEstudiante);
trainee.addEventListener("click", catTrainee);
junior.addEventListener("click", catJunior);
