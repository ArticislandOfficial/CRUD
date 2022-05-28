
//variables globales
const formularioUI = document.querySelector("#formulario");
const listaActividadesUI = document.querySelector("#listaActividades");
const actividadUI = document.querySelector("#actividad").value;
let arrayActividades = [];

//funciones
const CrearItem = (actividad) => {
  let item = {
    actividad: actividad,
    estado: false
  };
  arrayActividades.push(item);
  return item;
};
const GuardarDB = () => {
  //KW rutina
  localStorage.setItem("rutina", JSON.stringify(arrayActividades));
  console.log(arrayActividades);

};
const pintarDB = () => {
listaActividadesUI.innerHTML = `
<div class="alert alert-danger" role="alert">
          <i class="material-icons float-left mr-3"> 
            accessibility </i>
          <b>${arrayActividades.actividadUI}</b> - Estado
          <span class="float-right">
            <i class="material-icons"> done </i>
            <i class="material-icons"> delete </i>
          </span>
        </div>
      </div>
    </div>

`;

}
//EventeListener

formularioUI.addEventListener("submit", (e) => {
  //preventDefault evita que refresque o haga cosas raras "XD"
  e.preventDefault();
  const actividadUI = document.querySelector("#actividad").value;
//   console.log(actividadUI);
  CrearItem(actividadUI);
  GuardarDB();
//   formularioUI.reset();
 
});
//  document.addEventListener('DOMContentLoaded', pintarDB);
// if (typeof listaActividadesUi !== "undefined") {
// Ahora sabemos que foo está definido, ahora podemos continuar.
// }
// if (document.readyState !== "loading") {
//   console.log("document is already ready, just execute code here");
//   myInitCode();
// } else {
//   document.addEventListener("DOMContentLoaded", function () {
//
//     console.log("document was not ready, place code here");
//     myInitCode();
//   });
// }

// function myInitCode() {}
