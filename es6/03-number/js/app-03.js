let num1 = 20; //Number
let num2 = "20"; //string


let num3 = 33.3
let num4 = 0.4567
let num5 = -4

//Operadores aritmeticos
let resultado;

resultado = num1 + num3;
resultado = num1 - num3;
resultado = num3 * num3;
resultado = num1 / num3;

//modulo -> resto
resultado = 20 % 10; //devuelve el resto de 20 / 10

//(Libreria) Objeto Math
resultado= Math.PI;
resultado= Math.round(2.5);
resultado= Math.ceil(2.2);
resultado= Math.floor(2.8);

resultado= Math.min(3,5,10,-1,7)
resultado= Math.max(3,5,10,-1,7)

// ------------------------------------
// NUMERO ALEATORIO

resultado = Math.random()
//Gnerar un numero aleatorio dentro de un rango de 1 a 6
resultado = Math.floor(Math.random() * 6) + 1;

//Precedencia de operadores
resultado= 20 + 30 * 6;//200
resultado= (20 + 30) * 6;//300

resultado= 20 + 34 + 56 + 5;//115
resultado= resultado * 0.2

// Incremento y decremento
let clicks = 5;
clicks = clicks + 1;
clicks++;
++clicks;

clicks--;
--clicks;


clicks = clicks + 3
clicks += 3;
clicks -= 3;
clicks *= 3;
clicks /= 3;

let total = 0;

// total = total + 3;
// FORMA CORTA
total +=3;
total -=4;
total *=100;
total = total / 2;
total /= 2;
// El += se puede usar en strings
let saludo = "Hola";
saludo += " Que tal"


//Funciones para convertir strings a number
const n1 = "20.7"
const n2 = "34$"
const n3 = "uno"
const n4 = 12



console.log(typeof +n1);
console.log(parseInt(n1));
console.log(parseInt(n2));
console.log(parseFloat(n1));
console.log(Number.parseFloat(n3));

console.log(Number.isInteger(22))
//Revisar si el cambio de numero a ido bien
console.log(Number.isNaN(Number.parseInt(n1)));

// window.alert("hola")