
//variables globales
const formularioUI = document.querySelector("#formulario");
const listaActividadesUI = document.querySelector("#listaActividades");
// const actividadUI = document.querySelector("#actividad").value;
let arrayActividades = [];//reinicia arreglo meter en una funcion 1

//funciones
const CrearItem = (actividad) => {
  let item = {
    actividad: actividad,
    estado: false
  };
  arrayActividades.push(item);
  return item;
};
//guardando en local 
const GuardarDB = () => {
  //KW rutina
  localStorage.setItem("rutina", JSON.stringify(arrayActividades));
  console.log(arrayActividades);
 pintarDB()
};
const pintarDB = () => {
listaActividadesUI.innerHTML += `<div id="listaActividades " class="mt-4">     
          <div class="alert alert-danger" role="alert">
            <i class="material-icons float-left mr-3"> 
              accessibility </i>
            <b>Texto de la actividad</b> - Estado
            <span class="float-right">
              <i class="material-icons"> 
                done 
              </i>
              <i class="material-icons"> 
                delete 
              </i>
            </span>
          </div>
          
        </div>`;
}
//EventeListener

formularioUI.addEventListener("submit", (e) => {
  //preventDefault evita que refresque o haga cosas raras "XD"
  
  e.preventDefault();
  let actividadUI = document.querySelector("#actividad").value;
//   console.log(actividadUI);
  CrearItem(actividadUI);
  GuardarDB();
 formularioUI.reset();
 
});
  document.addEventListener('DOMContentLoaded', pintarDB);
