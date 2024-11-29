/**
 * Comillas dobles
 */
let producto = "Monitor de 23 Pulgadas"
producto = "Monitor de 23 Pulgadas"
// Escapar Caracteres
producto = "Moni\\tor de \"23\" Pul\ngad\tas"

//saber la longitud de un string

console.log(producto.length)

//Ecmascript 2015 -> le const... template stings
producto ="Teclado USB"
const precio = "180€"
// let oferta = producto + ",  tiene un precio de " + precio;
let oferta =`El product ${producto},
tiene un precio de ${precio}
la suma de 1 + 2 es : ${1 + 2}`;
let p1 ="Tele"
let p2 ="Telefono"
let p3 ="Calculadora"
let nombre ="Ana"

//LAS COMILLAS `` PARA METER CODE USAR ${}
let lista = `<h1>${nombre}</h1>
  <ul>
    <li>${p1}</li>
    <li>${p2}</li>
    <li>${p3}</li>
  </ul>`
console.log(oferta)
document.write(lista)

//Metodos para strings

const saludo= "Hola caracola; que ase!"
//Conocer su longitud
console.log(saludo.length)
console.log(saludo[0])
console.log(saludo[3])
console.log(saludo[saludo.length - 1])
let i = 0
while (i < saludo.length) {
console.log(saludo[i])
//Imprimir mensaje al encontrar una a
if (saludo[i]=== "a"){
console.log("eh encontrado una a en la pocision " + i)
}
i++ 
}
console.log(saludo.indexOf("paracola"))
console.log(saludo.includes("caracola"))
console.log(saludo.charAt(3))
console.log(saludo.charCodeAt(3))


// console.log(saludo)
// ----------------------------------------------
let userName = "Mafalda"
let userNamefiltered = userName.trim().toLocaleLowerCase()
// userNamefiltered = userNamefiltered.toLocaleLowerCase()

//TODO mas metodos
