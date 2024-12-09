//Declaracion de un funcion
// function sumar() {
// console.log(2+3)
// }

// //Ejecutar la funcion o llamarla
// sumar()

// //funcion con parametros
// function sumaParam(num1 , num2) {
// console.log(num1+ num2)
// }
// sumaParam(3,4)
// --------------------------------------------------------
//Crea una funcion q le pasemos un nombre como parametro y lanze un alert diciendo hola.

// function saludo(nombre , apellido) {
//   console.log(`Hola ${nombre} ${apellido}`)
// }
// // saludo("Mario")

// const n = prompt("Escribe tu nombre")
// const a = prompt("Escribe tu apellido")
// saludo(n, a)
// //hosting
// function nombre(nombre,apellido) {
//  console.log(`Hola ${nombre} ${apellido}`) 
// }
// ------------------------------------------------------
//Crea una funcion a la que se le pase un
//numero e imprima
//en la consola su tabla de multiplicar
/**
 * Imprimir tabla
 * 1x1 = 1
 * 1x2 = 2
 * 1x3 = 3
 * 1x4 = 4
 * 1x5 = 5
 * 1x6 = 6
 * 1x7 = 7
 * 1x8 = 8
 * 1x9 = 9
 * 1x10 = 10
 */
// EXPLICACION
// -----------------------------------------------------
// function imprimirTabla(num) {

//   console.log("Tabla del " + num)
// for(let i = 1; i <= 10;i++){
//   // console.log(`num x ${i} =${num * i}`)
//   let res = num * i
//   console.log("num x " + i + " = " + res)
// }
// }
// let numero = prompt("Escribe un numero")
// imprimirTabla(numero)
// ----------------------------------------------------

function suma(a, b) {
  return a + b
}
let resultado = suma(1,3)
console.log(resultado)
/**
 *  Escribe una funcion que pase de euros a dolares
 * 1 euro es 1,05 USD
 * 
 * @descriptcion
 * @param
 * @
 */


function euroToDolar(cantidad){
  const usd = cantidad * 1.05;
  return usd
}
