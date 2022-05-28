//1.Declaracion de variables a leer
const form = document.getElementById("form");
const inputName = document.getElementById("name");
const inputEmail = document.getElementById("email");
const input = document.getElementById("input");
const msg = document.getElementById("msg");
const posts = document.getElementById("posts");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("boton cliqueado XD");
  formValidation();
});
//2.validacion de Formulario para que no este en blanco
let formValidation = () => {
  if (input.value === "" || inputName.value === "" || inputEmail.value === "") {
    msg.innerHTML = "tarea en blanco , no se puede agregar";
  } else {
    console.log("successss");
    msg.innerHTML = "";
    acceptData();
  }
};

//3.Cualesquiera que sean los datos que obtengamos de los campos de entrada, los almacenaremos en un objeto. Vamos a crear un objeto llamado data. Y crea una función llamada acceptData
const data = [];

const acceptData = () => {
  data.push({
    name: inputName.value,
    email: inputEmail.value,
    description: input.value,
  });
  // data["text1"] = inputName.value;
  // data["text2"] = inputEmail.value;
  // data["text"] = input.value;
  data.name = inputName.value;
  data.email = inputEmail.value;
  data.description = input.value;

  localStorage.setItem("data", JSON.stringify(data));
  console.log(data);
  creatPost();
  obtenerLs()
};

//4.crear publicaciones usando literales de plantilla de JavaScript
const creatPost = () => {
  posts.innerHTML += `
    <div>
        <p>${data.name}</p>
        <p>${data.email}</p>
        <p>${data.description}</p>
        <span class="options">
            <i onClick="editPost(this)" class="fas fa-edit"></i>
            <i onClick="deletePost(this)" class="fas fa-trash-alt"></i>
        </span>
    </div>
    `;
};
const obtenerLs = ()=>{
let tareas = localStorage.getItem('data');
tareas = JSON.parse(localStorage.getItem('data'))
console.log(tareas);  
}
// const showPost = ()=>{
//    let array = JSON.parse(localStorage.getItem('array'))
//    if (array === null) {
//      console.log('entro');
//      localStorage.setItem('array',JSON.stringify([]))
//      array = [];
//    }
//  }

// document.getElementById('')

//+++++++++++++++++++Eliminar una publicacion
// "this"  es una kw y se referirá al elemento que disparó el evento. /en nuestro caso, el "this" se refiere al botón eliminar.
const deletePost = (e) => {
  e.parentElement.parentElement.remove();
};

// nota: el padre del botón de edición es el span con nombre de clase options. El padre del span es el div. Por lo tanto, escribimos parentElement dos veces para que podamos saltar del icono de edición al div y apuntarlo directamente para eliminarlo.

//*********************Editar publicacion
const editPost = (e) => {
  input.value = e.parentElement.previousElementSibling.innerHTML;
  e.parentElement.parentElement.remove();
};
