//EJERCICIO 2
//Modificacion con CSS

//Cambio de Fuente en el Body
const Sobremi = (document.body.style.fontFamily =
  "Verdana, Geneva, Tahoma, sans-serif");
//---------------------------------------------------------------
const usuario = {
  nombre: "Ruben",
  favoritos: "Jugar Videojuegos",
  ciudad: "Palma",
};
//----------------------------------------------------------------
function spans() {
  // Seleccionamos los spans por su ID
  document.getElementById("nickname").textContent = usuario.nombre;
  document.getElementById("favorites").textContent = usuario.favoritos;
  document.getElementById("ciudad").textContent = usuario.ciudad;
}

spans();
//----------------------------------------------------------------
const elementos = document.querySelectorAll("#lista li");

elementos.forEach((elemento) => {
  elemento.classList.add("color-list-red");
});

// Agregar los estilos a la clase
const estilo = document.createElement("style");
estilo.textContent = `
    .color-list-red {
        color: red;
    }`;
document.head.appendChild(estilo);
//---------------------------------------------------------------
//Agregar imagen al Html
const imagen = document.createElement("img");
imagen.src =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRICERp7kY6FEr8AZ79VcKd-DCJlhlT_HdSaA&s";
document.body.appendChild(imagen);
