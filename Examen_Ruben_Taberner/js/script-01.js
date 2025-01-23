//EJERCICIO 1
//Creacion de libros y si estan vistos o no

//Los Libros y sus respectivos arrays
const libros = [
  {
    titulo: "EL NOMBRE DE LA ROSA",
    autor: "Umberto Eco",
    leido: true,
  },
  {
    titulo: "EL SEÑOR DE LOS ANILLOS",
    autor: "J.R.R.TOLKIEN",
    leido: false,
  },
  {
    titulo: "ELINGENIOSO HIDALGO DON QUIXOTE DE LA MANCHA",
    autor: "Miguel de Cervantes",
    leido: true,
  },
  {
    titulo: "EL CAMINO",
    autor: "Miguel Delibes",
    leido: false,
  },
];

libros.forEach((libro) => {
  //Mensajes en consola:
  if (libro.leido) {
    console.log(`Ya has leído "${libro.titulo}" de ${libro.autor}.`);
  } else {
    console.log(`Aún no has leído "${libro.titulo}" de ${libro.autor}.`);
  }
});
