//EJERCICIO 3
//lista de libros
//--------------------------------------------------------
const libros = [
  {
    titulo: "EL NOMBRE DE LA ROSA",
    autor: "Umberto Eco",
    imagen: "images/libros/libro1.jpg",
    leido: true,
  },
  {
    titulo: "EL SEÑOR DE LOS ANILLOS",
    autor: "J.R.R.TOLKIEN",
    imagen: "images/libros/libro2.jpg",
    leido: false,
  },
  {
    titulo: "ELINGENIOSO HIDALGO DON QUIXOTE DE LA MANCHA",
    autor: "Miguel de Cervantes",
    imagen: "images/libros/libro3.png",
    leido: true,
  },
  {
    titulo: "EL CAMINO",
    autor: "Miguel Delibes",
    imagen: "images/libros/libro4.jpg",
    leido: false,
  },
];

//Color Para los libros leidos y no leidos ademas de estilo al texto
//----------------------------------------------------
function agregarEstilos() {
  const style = document.createElement("style");
  style.innerHTML = `
  .libro {
      border: 2px solid #000;
      padding: 10px;
      margin: 10px;
      text-align: center;
  }
  .leido {
      background-color:rgb(0, 233, 54);
  }
  .no-leido {
      background-color:rgb(135, 135, 135);
  }
    `;
  document.head.appendChild(style);
}
//Funcion para mostrar si se a leido y no a los libros
//-------------------------------------------------------------

function mostrarLibros(libros) {
  const container = document.getElementById("libros-container");
  libros.forEach((libro) => {
    const div = document.createElement("div");
    div.className = `libro ${libro.leido ? "leido" : "no-leido"}`;
    div.innerHTML = `
                <h3>${libro.titulo}</h3>
                <p>Autor: ${libro.autor}</p>
                <img src="${libro.imagen}" alt="${libro.titulo}" width="100">
            `;
    container.appendChild(div);
  });
}
agregarEstilos();
mostrarLibros(libros);
//-------------------------------------------------------------
