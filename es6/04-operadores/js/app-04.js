const a = 28
const b = "28"
const c = 38

console.log(a > c);
console.log(a < c);

console.log(a>= c);
console.log(a>= c);

//Comparacion
//Un "=" asigna el valor de la derecha
//a la isquierda; No Compara

//No tiene en cuenta el tipo de dato
console.log(a == b);//20 == "20"

//Igualdad estricta

console.log(a === b);
//Revisa primero el tipo de dato
console.log(a === Number.parseInt(b));

//Desigualdad
console.log(a != b);
//Desigualdad estricta
console.log(a !== b);

//Operadores Booleanos
// U AND ->  &&   
// O OR ->    ||
// Negacion !
let test = true && true;
test = (3 < (4 + 6)) &&((2 / 4) >= (2 - 1))

test = true || true; //true
test = true || false; //true
test = false || true; //true
test = false || false; //false

test = !test;//invierte el valor

console.log("test:", test)