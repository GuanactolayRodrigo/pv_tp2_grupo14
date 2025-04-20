// 7. Declarar un array denominado nombres con al menos 6 nombres. Obtener el nombre más largo del array nombres. Las cadenas de textos (String) son listas de caracteres y las listas tienen un largo (length) que indica su tamaño.

const nombres = ["Juan", "María", "Alejandro", "Isabel", "Cristin", "Pedro"];
let nombreMasLargo = "";
let longitudMaxima = 0;

for (let nombre of nombres) {
  if (nombre.length > longitudMaxima) {
    longitudMaxima = nombre.length;
    nombreMasLargo = nombre;
  }
}

console.log("El nombre más largo es: " + nombreMasLargo);