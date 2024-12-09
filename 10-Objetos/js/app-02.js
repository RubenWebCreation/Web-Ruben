//Los Objetos pueden tener cualquier tipo de dato como valor de propiedad
const producto = {
    nombre: "Mesa comedor" , 
    precio: 200, 
    stock: true,
    color: ["negro","bllanco","gris"],
    info:{
peso: "15kg",
medidas:{
    h:2,
    x:2,
    y:2,
  },
 },
};

console.log(producto)
console.log(`La ${producto.nombre} peso ${producto.info.peso}`)

function imprimirInfo(producto){
console.log(`La ${producto.nombre}
     peso ${producto.info.peso}`);
     console.log("Tienes los siguientes colores: ");
     for (let i = 0; i < producto.color.length; i++) {
        const color = producto.color[i];
        console.log(color);
     }
}