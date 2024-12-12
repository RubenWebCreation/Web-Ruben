//Declaracion de una funcion
// var nombre = "Calamardo"
// console.log("Ambito global", nombre);

// saludo("señor cangrejo")

// //saludo
// function saludo(nombre) {
//   //  if (nombre === undefained)
//   //
//   //
//   var local = "Soy local a la funcion"

//   console.log("local a la funcion", nombre);
//   console.log("local a la funcion", local);
// }

// console.log(nombre);
// // console.log(local);

// for (let i = 0; i < 10; i++) {
// console.log(i);
// }
// console.log(i);

// {
//   var text = "Existo"
//   var text = "mal"
// }

// console.log(test);
// ------------------------------------------------------------------------
//Declaracion de una funcion
function saludo() {
  console.log("Hola");
}

//Expresion de funcion
const saludoChaChi = function () {
  console.log("Aloha!!");
};

// const nuevoSaudo = saludoChaChi

//callback -> una funcion que se pasa como argumento a otra
/*
function preguntar(pregunta, funcSI,funcNO) {
if (confirm(pregunta)) {
  console.log("Haz contestado que SI");
} else{
  console.log("Haz contestado que NO");
}
}
preguntar("Quieres un cafe?", mostrarSI,mostrarNO);
preguntar(
  "Quieres una ensalada",
  function () {
    alert("Aqui tienes tu ensalada")
  },
  function () {
    alert("Pues nada")
  }
);
*/

function crearMiCita(cita, callback) {
  const miCita = "Como yo siempre digo " + cita;
  callback(miCita);
}

crearMiCita("En abril aguas mil", function (texto) {
  document.write(texto);
});
// document.addEventListener("click", function (evt) {
//   console.log(evt.x, evt.y);
// });
// function logCita(cita) {
//   console.log(cita);
// }
// function alertCita(cita) {
//   alert(cita);
// }
//-----------------------------------------------------------------------------------
// function calcular(a, b, calcFun) {
//   const res = calcFun(a, b);
//   console.log("El resultado es: " + res);
// }

// function suma(num1, num2) {
//   return num1 + num2;
// }
// function resta(num1,num2) {
//   return num1 - num2
// }
// calcular(2,3,suma)

// calcular(9, 8, function (a, b) {
//   return 9 * 8;
// });
// -----------------------------------------------------------------
// let respuesta = "No hay Datos...";
// // Ejemplo de callback con asincronia
// function solicitudServidor(callback) {
//   console.log("Consultando...");
//   setTimeout(function () {
//     respuesta = " Aqui tienes tus datos";
//     callback(respuesta);
//   }, 5000);
// }
// solicitudServidor(function (res) {
//   alert(respuesta);
// });
// console.log("El script sigue");
// console.log(respuesta);
