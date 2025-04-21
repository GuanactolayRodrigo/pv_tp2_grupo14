const paisesSelect = document.getElementById("paises");
const capitalesSelect = document.getElementById("capitales");

const capitales = {
    Mexico: "Ciudad de México",
    EEUU: "Washington",
    Canada: "Otawa",
    Argentina: "Buenos Aires",
    Brasil: "Brasilia",
    Uruguay: "Montevideo",
    Chile: "Santiago de Chile",
    Bolivia: "La Paz"
    };

const actualizarCapital = () =>{

        const paisSeleccionado = paisesSelect.value;
        const capital = capitales[paisSeleccionado];
    
        capitalesSelect.innerHTML = "";
    
        const opcion = document.createElement("option");
        opcion.textContent = capital;
        capitalesSelect.appendChild(opcion);
    
        capitalesSelect.disabled = false;
}

paisesSelect.addEventListener("change", actualizarCapital);

window.addEventListener("load", actualizarCapital);