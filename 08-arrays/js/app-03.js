//arrays literal
const numberlist = [12,34,56,79,98]
const mix = [12, "hola", true , null]
//Constructor
const frutas = new Array("Manzana","Pera","Naranja")

let x
//Obtener el valor de un elemento de array
x = numberList[3]
x = numberList[1] + numberlist[3]
x = `Mi fruta preferida es ${frutas[2]}`
x = frutas.length
frutas[0] = "fresa"
frutas[frutas.length]= ["piña","melon"]
frutas[frutas.length]= "cacahuetes"

let verdura= "col"
verdura = "patata"
let verduraPreferida = verdura

console.log("verdura vale", verdura)
console.log("preferida vale", verduraPreferida)

const deportes =("futbol","padel","baloncesto")
const deportesFavoritos = deportes //No podemos copiar arrays directamente
deportesFavoritos[0] ="golf"
