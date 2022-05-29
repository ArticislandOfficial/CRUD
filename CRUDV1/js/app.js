const nombre=document.getElementById('nombre');
const email=document.getElementById('email');
const mensaje=document.getElementById('mensaje');
const arrayLs =[];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("boton cliqueado XD");
  formValidation();
});



//validacion de formulario 
let formValidation = ( )=>{
    if (nombre.value === "" || email.value === "" || mensaje === "") {
    msg.innerHTML = "tarea en blanco , no se puede agregar";
    } else {
      console.log("successss");
      msg.innerHTML = "";
    }

    }
  


