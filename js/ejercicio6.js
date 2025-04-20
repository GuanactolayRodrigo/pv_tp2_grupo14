// 6. Crear un array denominado edades con al menos 8 edades distintas.
// Recorrer el array y obtener el promedio de las edades del array.
function calcularPromedio(edades) {
  let suma = 0;
  for (let i = 0; i < edades.length; i++) {
    suma = suma + edades[i];
  }
  return suma / edades.length;
}

const edades = [18, 24, 43, 74, 62, 38, 54, 27];
console.log("El promedio es", calcularPromedio(edades));
