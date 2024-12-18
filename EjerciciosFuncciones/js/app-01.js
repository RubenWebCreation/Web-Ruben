//1. Crea una función que reciba dos números y devuelva su suma
//---------------------------------------------------------------
function sumar(num1, num2) {
  return num1 + num2;
}
alert(sumar(8, 9));
//---------------------------------------------------------------
//2. Crea una función que reciba un array de números y devuelva el mayor de ellos
//---------------------------------------------------------------
function MayorNum(array) {
  return Math.max(array);
}
let maximo = Math.max(3, 4, 5, 6, 8, 10);
alert("El numero mayor es " + maximo);

//---------------------------------------------------------------
//EXPLICACION
//---------------------------------------------------------------
function getMaxValue(numList) {
  let max = 0;
  for (let i = 0; i < numList.length; i++) {
    if (numList[1]) {
    }
  }
}

//---------------------------------------------------------------
//3. Crea una función que reciba un string y devuelva el número de vocales que contiene
//---------------------------------------------------------------
function CuentaVocales(frase) {
  let frase = prompt("Escribe una frase:");
  let NumVocales = 0;
  const vocales = "AEIOUaeiou";

  for (let j = 0; j < frase.length; j++) {
    for (let j = 0; j < frase.length; j++) {
      if (frase[1] === vocales[j]) {
        NumVocales++;
        break;
      }
    }
  }
  return NumVocales;
}
console.log(CuentaVocales("Calabaza"));
//---------------------------------------------------------------
//4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas
//---------------------------------------------------------------
function minusToMayus(lista) {
  const mayus = [];
  mayus = [];
  for (let i = 0; i < lista.length; i++) {
    const element = lista[i];
    mayus.push(element.toUppercase());
  }
  return mayus;
}
const deportes = ["futbol", "tenis", "padel"];
console.log(minusToMayus(deportes)); //["FUTBOL"]

//---------------------------------------------------------------
//5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario
//---------------------------------------------------------------
function esPrimo(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

//---------------------------------------------------------------
//6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos
//---------------------------------------------------------------
function getComunes(arrA, arrB) {
  //resolver con num for y el metodo includes
  const comunes = [];
  //aqui for
  for (let i = 0; i < arrA.length; i++) {
    const element1 = arrA[i];
    if (arrB.includes(element1)) {
      comunes.push(element1);
    }
  }
  return comunes;
}

const a = [2, 3, 5, 7];
const b = [3, 6, 9, 5];
getComunes(a, b); //Deberia devolver [3,5]

//---------------------------------------------------------------
//7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares
//---------------------------------------------------------------

//---------------------------------------------------------------
//8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado
//---------------------------------------------------------------
function numCuadrado(listaNum) {
  const lisaNumCuadrado = [];
  for (let i = 0; i < listaNum.length; i++) {
    const element = listaNum[i];
    const cuadrado = element * element;
    lisaNumCuadrado.push(cuadrado);
  }
  return lisaNumCuadrado;
}
const nuevaLista = Lista.map((n) => n * n);
//---------------------------------------------------------------
//9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso
/**
 * "Este fin de semana hay puente" -> ["este","fin","de","semana","hay","puente"]
 * Hay algun metodo de strings que convierta a array por un delimitador
 * Hay algun metodo de array que invierta el orden
 * Hay algun metodo a array que lo convierta a string usando un conector?
 */
//---------------------------------------------------------------
function reverseWords(text) {
  return text.split(" ").reverse().join(" ");
}

//---------------------------------------------------------------
//10. Crea una función que calcule el factorial de un número dado
//---------------------------------------------------------------
debugger;
function factorial(n) {
  //el factorial 0 o 1 es 1
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

function saluda() {
  console.log("Feliz Navidad");
  saluda();
}

//---------------------------------------------------------------
