//Declaracion de variables a leer 
let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let posts = document.getElementById("posts");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("boton cliqueado XD");
  formValidation();
});
//validacion de Formulario para que no este en blanco
let formValidation = () => {
  if (input.value === "") {
    msg.innerHTML = "tarea en blanco , no se puede agregar";
  } else {
    console.log("successss");
    msg.innerHTML = "";
    acceptData();
  }
};

//Cualesquiera que sean los datos que obtengamos de los campos de entrada, los almacenaremos en un objeto. Vamos a crear un objeto llamado data. Y crea una función llamada acceptData
let data = {};

let acceptData = () => {
  data["text"] = input.value;
  console.log(data);
  creatPost();
};

//crear publicaciones usando literales de plantilla de JavaScript
let creatPost = () => {
  posts.innerHTML += `
    <div>
        <p>${data.text}</p>
        <span class="options">
            <i onClick="editPost(this)" class="fas fa-edit"></i>
            <i onClick="deletePost(this)" class="fas fa-trash-alt"></i>
        </span>
    </div>
    `;
};

//+++++++++++++++++++Eliminar una publicacion
// "this"  es una kw y se referirá al elemento que disparó el evento. /en nuestro caso, el "this" se refiere al botón eliminar.
let deletePost = (e) => {
  e.parentElement.parentElement.remove();
};

// nota: el padre del botón de edición es el span con nombre de clase options. El padre del span es el div. Por lo tanto, escribimos parentElement dos veces para que podamos saltar del icono de edición al div y apuntarlo directamente para eliminarlo.

//*********************Editar publicacion
let editPost = (e) => {
  input.value = e.parentElement.previousElementSibling.innerHTML;
  e.parentElement.parentElement.remove();
};
