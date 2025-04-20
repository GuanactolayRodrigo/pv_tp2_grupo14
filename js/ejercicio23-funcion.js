export let agregarChange=(radio,res)=>{
    let valorRadio = "";
    for (let i = 0; i < radio.length; i++) {
        radio[i].addEventListener("change", function() { //click,change,input
          if (radio[i].checked) {
            valorRadio = radio[i].value;
            res.innerHTML = "El lenguaje seleccionado es: " + valorRadio;
          }
        });
      }

}