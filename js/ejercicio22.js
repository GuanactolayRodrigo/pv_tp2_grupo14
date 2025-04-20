import { changeBackground } from "./ejercicio22-funcion.js";

const inputText = document.getElementById("inputText");
const displayText = document.getElementById("displayText");

inputText.addEventListener("input", () =>
  changeBackground(displayText, inputText)
);