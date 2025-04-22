/*8.Declarar una función con nombre calcularMayor() y pasarle como 
parámetros (numero1,numero2). Dentro de la función mostrar un alert que diga cuál de los 
números ingresados es mayor. En caso de ser iguales, tendrá que indicarlo a través de un 
alert también. 
Invocar la función y enviar los argumentos con diferentes números para probar.*/




let calcularMayor=(numero1, numero2) =>{
    if (numero1 > numero2) {
        console.log(`El número mayor es: ${numero1}`);
    } else if (numero2 > numero1) {
        console.log(`El número mayor es: ${numero2}`);
    } else {
        console.log(`Los números son iguales: ${numero1} y ${numero2}`);
    }
}

calcularMayor(5, 10);
calcularMayor(100, 10);
calcularMayor(80, 20);
calcularMayor(40, 150);
calcularMayor(2, 2);