// <!-- 18. Mostrar en una página html un párrafo de texto y un botón, aplicar estilos css.
// Crear un script que capture el evento clic del botón y que cambie el texto del párrafo por otro. -->


export let cambiarTexto = (obj) => {
    obj.innerHTML = "¡El texto ha sido cambiado!";
    obj.style.color = "blue"; 
}