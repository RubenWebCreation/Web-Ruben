// //foreach
// const nums = [2, 3, 54, 5, 9, 5, 2, 9];
// function suma3(num) {
//   console.log(num + 3);
// }

// nums.forEach(suma3);

// nums.forEach(function (item, index) {
//   console.log(`Indice ${index} vale: ${item}`);
// });

// //Arrow Funtions en ES6
// const resta3 = function (num) {
//   return num - 3;
// };

// const resta4 = (num) => {
//   return num - 4;
// };

// //Si solo hay una expresion el return va implicito
// //Se pueden omitir las llaves
// const resta5 = (num) => num - 5;

// nums.forEach((element) => {
//   console.log(element * 2);
// });

// // filter
// const nums2 = [2, 3, 84, 5, 9, 1, 3, 5];
// //Crear un nuevo array solo con los pares
// const numsPares = nums2.filter(function (num) {
//   return num % 2 === 0;
// });
//Lo mismo pero con arrow funtion
// const numsPares2 = nums2.filter((n) => n % 2 === 0);

// const empresas = [
//   { name: "Financiera Alpha", category: "Finanzas", start: 1981, end: 2004 },
//   { name: "Tienda Beta", category: "Minorista", start: 1992, end: 2008 },
//   { name: "Motores Gamma", category: "Automoción", start: 1999, end: 2007 },
//   { name: "Retail Delta", category: "Minorista", start: 1989, end: 2010 },
//   { name: "Tecno Epsilon", category: "Tecnología", start: 2009, end: 2014 },
//   { name: "Inversiones Zeta", category: "Finanzas", start: 1987, end: 2010 },
//   { name: "Autos Omega", category: "Automoción", start: 1986, end: 1996 },
//   { name: "Innovación Sigma", category: "Tecnología", start: 2011, end: 2016 },
//   { name: "Market Kappa", category: "Minorista", start: 1981, end: 1989 },
// ];
//-------------------------------------------------
// //Obtener solo la empresa Minorista
// const Minorista = empresas.filter((empres) => {
//   return empresas.category === "Minorista";
// });

// empresas.saludar = function () {
// alert("Las empresas te saludan")
// }
// -------------------------------------------------
//Crear un array nuevo con solo las empresas Minorista (flter)
// const minoristas = empresas.filter((emp) => {
//   return empresas.category === "Minorista";
// });
// console.log(minoristas);
// // -------------------------------------------------------------
// //Obtener las empresas que empezaron en 1980 o despues y cerraron en 2005 o antes
// const empresas1 = empresas.filter((empresa) => {
//   return empresa.start >= 1980 && empresa.end <= 2005;
// });
// console.log(empresas1);

// -------------------------------------------------------------
// empresas.miFilter = function (callback) {
//   const array = [];
//   for (let i = 0; i < empresas.length; i++) {
//     if (empresas[i].category === "Minoristas") {
//       array.push(empresas[i]);
//     }
//   }
//   return array;
// };
// -----------------------------------------------------------------
const raiz = nums.map((num) => {
  return Math.sqrt(num);
});

const doble = raiz.map((num) => {
  return num * 2;
});

const raizYdoble = num.map((num) => Math.sqrt(num)).map((num) => num * 2);
console.log(raizYdoble);

const paresDobles = nums.filter((num) => num % 2 === 0).map((num) => num * 2);

const saludar = function (nombre) {
  return "Hola " + nombre;
};

console.log(saludar("Santa Claus"));
console.log(saludar2("Santa Claus"));

// -----------------------------------------------------------------

const texto = "Feliz Navidad"(
  //IIFE
  function (_texto) {
    const texto = _texto;
    console.log(texto);
  }
)("Hola soy una Funcion IIFE");
// -----------------------------------------------------------------
