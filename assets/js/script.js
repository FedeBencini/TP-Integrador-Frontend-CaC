const getEl = (x) => document.getElementById(x);

const borrarBtn = getEl("borrarBtn");
const resumBtn = getEl("resumBtn");

function borrarPrecio() {
  getEl("cantidad").value = "";
  getEl("categoria").value = "ninguno";
  getEl("total").innerHTML = "";
}

function calcularTotal() {
  const cantidad = +getEl("cantidad").value;
  const descuento = getEl("categoria").value;
  let precioFinal = 200 * cantidad;
  switch (descuento) {
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
  getEl("total").innerHTML = precioFinal;
}

borrarBtn.addEventListener("click", borrarPrecio);
resumBtn.addEventListener("click", calcularTotal);
