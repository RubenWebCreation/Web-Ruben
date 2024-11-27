//Sirven para repetir pasos 
//Minetras se cumpla una condicion
// let intentos = 0
// while (intentos < 6){
//  alert("Has clikado " + clicks + " veces, pringao!!")
//     // clicks = clicks + 1
//     intentos++
// }
// -------------------------------------------------
// const pin = "1234"
// let respuesta =""

// while(respuesta !== pin){
//     respuesta = prompt("Escribe un pin")
// }
// alert("El pin es correcto")
// ---------------------------------
// const pin = "1234"
// let respuesta =""

// if(respuesta !== pin){
//     respuesta = prompt("Escribe un pin")
// }
// if(respuesta !== pin){
//     respuesta = prompt("Te quedan 3 intentos")
// }
// if(respuesta !== pin){
//     respuesta = prompt("Te quedan 2 intentos")
// }
// if(respuesta !== pin){
//     respuesta = prompt("Te quedan 1 Intento")
// }

// while(respuesta !== pin){
//     respuesta = prompt("Te quedaste sin intentos")
// }
// alert("El pin es correcto")
// -------------------------------------
const pin = "1234"
let respuesta =""
let intentos = 3

while(respuesta !== pin && intentos > 0){
    respuesta = prompt("Escribe un pin")
    intentos--
}
if (respuesta === pin){
    alert("Haz acertado!!")
}else{
alert("No tienes mas Intentos")
}