import { actualizarCapital } from "./ejercicio20-funcion.js";

const paisesSelect = document.getElementById("paises");
const capitalesSelect = document.getElementById("capitales");

paisesSelect.addEventListener("change", () =>
  actualizarCapital(paisesSelect, capitalesSelect)
);

window.addEventListener("load", () =>
  actualizarCapital(paisesSelect, capitalesSelect)
);
