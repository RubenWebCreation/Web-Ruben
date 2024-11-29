// // ----------------------------------------------
// let aleatorio = Math.floor(Math.random() * 100) + 1;
// let contador = 6
// let intro = ""

// while (intro !== aleatorio && contador > 6){
// intro= parseInt(prompt("introduce..."))
// contador--
// }
// while (aleatorio !==intro || contador < 6){
// contador++

// intro =parseInt(prompt("intro num 1-100 este es tu aproximado" + contador))
// }

//Generar Numero aleatorio
 const secretNumber = Math.floor(Math.random() * 100) + 1;
//Inicializar Variables
const maxIntentos = 6
let intentos = 0
let acierto = false
//Miramos si se cumple la condicion
//jugar mientras no hemos acertado? y tenemos intentos
while (intentos < maxIntentos && !acierto){
let numeroJugador = parseInt(prompt("Introduce un numero entre 1 y 100"))

 //Si no acierta damos ayuda al jugador de si es mayor o menor
 //Si acierta ha ganado
 if(numeroJugador === secretNumber){
    acierto = true
 }else if (numeroJugador < secretNumber){
    alert("No llegas")
 }else{
    alert("Te Pasaste")
 }
 //Incrementamos al numero de intentos
 intentos++
}
 //Mostramos haz ganado si ha acertado
 //Mostramos haz perdido
 if (acierto){
    alert("Haz ganado el numero era " + secretNumber)
 }else{
    alert("Haz Perdido el numero era " + secretNumber)  
 }

// --------------------------------------------

//Ejercicio 1

// alert("Hello World");
// --------------------------------------------

//Ejercicio 2

// document.write("Hello world");
// -------------------------------------------

//Ejercicio 3

// alert("La suma de 3 + 5 es :" + ( 3 + 5));
// document.write(3+5)
// ------------------------------------------

//Ejercicio 4
// let userName = prompt("Dime tu Nombre:")
// document.write("Hola " + userName)
//-------------------------------------------

// //Ejercicio 5
// let num1 = prompt("Primer Numero");
// console.log(typeof num1)
// let num2 = prompt("Segundo Numero");
// let suma = num1 + num2;
// document.write(suma)
// -----------------------------------------
//Ejercicio 6
// let n1 =parseFloat(prompt("Numero 1:"))
// let n2 =parseFloat(prompt("Numero 2:"))
// let numMayor = n1
// if(n2 > numMayor){
// numMayor = n2;
// }
//     console.log("El numero " + numMayor + " es el mayor")
// -----------------------------------------------------
//Ejercicio 7
// let n1 =parseFloat(prompt("Numero 1:"))
// let n2 =parseFloat(prompt("Numero 2:"))
// let n3 =parseFloat(prompt("Numero 3:"))
// let numMayor = n1
// if(n3 > numMayor){
// numMayor = n3;
// }
//     console.log("El numero " + numMayor + " es el mayor")

//EXPLICCACION
// --------------------------------------------------------------
// debugger
// let a = parseFloat(prompt("Escribe otro numero"));
// let b = parseFloat(prompt("Escribe otro numero"));
// let c = parseFloat(prompt("Escribe otro numero"));

// let cartera = a;
// if (b > cartera ) {
//     cartera = b;
// }
// if (c > cartera ) {
//     cartera = c;
// }

// console.log("Llevas " + cartera + "En tu cartera")
// ------------------------------------------------------------
//Ejercicio 8
// let a = parseFloat(prompt("Escribe un numero"))

// if(a % 2 === 0){
// alert("Par")
// }else{
//     alert("Impar")
// }
//-------------------------------------------------------------

//Ejercicio 9