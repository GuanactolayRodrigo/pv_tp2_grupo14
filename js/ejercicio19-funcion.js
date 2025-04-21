export const mostrarDatos = () => {
    const nombre = document.querySelector('#nombre').value;
    const apellido = document.querySelector('#apellido').value;
    const lu = document.querySelector('#lu').value;
    
    if (!nombre || !apellido || !lu) {
        alert('Por favor, complete todos los campos.');
    } else {
        alert(`Datos ingresados:  
        Nombre: ${nombre}
        Apellido: ${apellido}
        Lu: ${lu}`);
    }
}