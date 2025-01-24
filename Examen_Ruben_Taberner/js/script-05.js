// Agregar estilos a la página.
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

// Función para mostrar los libros en el contenedor.
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
    div.setAttribute("data-leido", libro.leido);
    container.appendChild(div);
  });
}

// Función para cargar los libros desde un archivo JSON.
async function cargarLibros() {
  try {
    const response = await fetch("json/libros.json");
    const libros = await response.json();
    console.log(libros);

    mostrarLibros(libros);
  } catch (error) {
    console.error("Error al cargar los libros:", error);
  }
}

// Evento para alternar el estado de lectura al hacer clic en un libro
function agregarEventoCambioEstado() {
  const container = document.getElementById("libros-container");
  container.addEventListener("click", (event) => {
    const libro = event.target.closest(".libro");
    if (libro) {
      const leido = libro.getAttribute("data-leido") === "true";
      libro.setAttribute("data-leido", !leido);
      libro.classList.toggle("leido", !leido);
      libro.classList.toggle("no-leido", leido);
      console.log(
        `El libro ahora está marcado como ${!leido ? "leído" : "no leído"}.`
      );
    }
  });
}

agregarEstilos();
cargarLibros();
agregarEventoCambioEstado();
