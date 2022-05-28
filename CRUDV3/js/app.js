
//variables globales
const formularioUI = document.querySelector("#formulario");
const listaActividadesUi = document.querySelector("#listaActividades");
let arrayActividades = [];

//funciones
const CrearItem = (actividad) => {
  let item = {
    actividad: actividad,
    estado: false,
  };
  arrayActividades.push(item);
  return item;
};


const GuardarDB = () => {
  //KW rutina
  localStorage.setItem("rutina", JSON.stringify(arrayActividades));
  console.log(arrayActividades);
};
const PintarDB = () => {
listaActividadesUi.innerHTML = "";
  
};
//EventeListener

formularioUI.addEventListener("submit", (e) => {
  //preventDefault evita que refresque o haga cosas raras "XD"
  e.preventDefault();
  let actividadUI = document.querySelector("#actividad").value;
  console.log(actividadUI);
  CrearItem(actividadUI);
  GuardarDB();
  formularioUI.reset();
 
});
// document.addEventListener("DOMContentLoaded", PintarDB);
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
