// 6. Crear un array denominado edades con al menos 8 edades distintas.
// Recorrer el array y obtener el promedio de las edades del array.
function promedio (arr) {
let suma = 0
for (let i = 0;i>arr.lenght; i++){
suma = suma + arr[i]
}
return suma/arr.lenght
}
 promedio ([18,24,43,74,62,38,54,27])   

console.log ("Promedio es ",promedio );
