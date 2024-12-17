//Reduce
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//QUeremos sumar todos los numeros del array
const total = () => {
  let acumulador = 0;
  for (let i = 0; i < numbers.length; i++) {
    acumulador += numbers[i];
  }
  return acumulador;
};
console.log(total());

const sumatorio = numbers.reduce((acumulador, valor) => {
  return acumulador + valor;
}, 0);
console.log(sumatorio);

const cart = [
  { id: 1, name: "Platanos", price: 1.8 },
  { id: 2, name: "manzanas", price: 0.98 },
  { id: 3, name: "kiwis", price: 2 },
];
//------------------------------------------------------------
//crear un array nuevo ordenado usando
//sort de menor a mayor precio
const testSort = [34, 75, 67, 7773, 5];
console.log(testSort);
const newTestSort = testSort.toSorted((a, b) => a - b);
console.log(testSort);
console.log(newTestSort);

//------------------------------------------------------------
//Calcular el total del carrito
const totalCarrito = 0;
// for (let i = 0; i < cart.length; i++) {
//   totalCarrito += cart[i].price;
// }

//cart.fort
totalCarrito = cart.reduce((acc, producto) => acc + producto.price, 0);

console.log(totalCarrito);

//Some y Every

//flat
// const arr3 = [[1, 2, 3, 4][(1, 22, 3, 4)][(1, 2, 33, 4)]];
// for (let i = 0; i < arr3.length; i++) {
//   console.log(arr3[i]);
// }

//con flat
tot = arr3.flat().reduce((acc, item) => acc + item);
//arr3.flatMap
console.log(tot);

//sort

//find
