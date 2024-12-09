// const nombre ="Monitor de 20 Pulgadas"
// const precio =200
// const disponible =true

//Objeto como literal
const producto = {
    nombre: "Pantalla OLED" , 
    precio: 300, 
    disponible: true
};
//accedemos a las propiedades por un .
console.log(producto.nombre)
console.log(producto.precio)
console.log(producto.disponible)

producto.nombre = "Teclado USB"
console.log(producto)

producto.imagen = "iman.jpg"
console.log(producto)
// ----------------------------------------

const producto2 = {
    nombre: "Pantalla 3D" , 
    precio: 500, 
    disponible: true,
    imagen: "pantalla.jpg",
};
//accedemos a las propiedades por un .
console.log(producto2)
//Otra forma de acceder a las propiedades
console.log(producto2["imagen"])
//quitar propiedad
delete producto2.imagen
console.log(producto2)

//desestructuracion de Objetos
// const nombre = producto2.nombre;
// const disponible = producto2.disponible;
// const precio = producto2.disponible;

const{ nombre ,precio ,disponible } = producto;
console.log(nombre)