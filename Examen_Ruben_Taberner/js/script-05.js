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
//------------------------------------------------------------
async function cargarLibros() {
  try {
    const response = await fetch("libros.json");
    const libros = await response.json();
    mostrarLibros(libros);
  } catch (error) {
    console.error("Error al cargar los libros:", error);
  }
}

agregarEstilos();
cargarLibros();
