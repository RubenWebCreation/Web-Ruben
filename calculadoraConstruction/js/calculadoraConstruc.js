// class Calculadora {
//   constructor() {
//     this.resultado = 0;
//   }
//   mostrarResultado() {
//     console.log(this.resultado);
//   }
//   pedirNumero() {
//     let numero;
//     //pedir numero con un promt
//     do {
//       // Intentar parsear la entrada a numero
//       numero = Number.parseFloat(prompt("Ingresa el numero"));
//       if (Number.isNaN(numero)) {
//         alert("Ingresa un numeri valido");
//       }
//     } while (Number.isNaN(numero)); // verfificar si es un numero valido con isNaN
//     // Si es validp actualizar this.resultado sino volver a pedir el numero
//     return numero;
//   }
//   suma() {
//     const n = this.pedirNumero;
//     this.resultado += n;
//     this.mostrarResultado();
//   }
//   reiniciar() {
//     this.resultado = 0;
//     this.mostrarResultado();
//   }
// }
// //Uso de la calculadora
// const miCalculadora = new Calculadora();

// miCalculadora.mostrarResultado();

// const calc = {
//   resultado: 0,
// };
// ----------------------------------------------------------------------------------------------
