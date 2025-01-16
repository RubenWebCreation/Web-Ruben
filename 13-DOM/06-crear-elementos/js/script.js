//Crear eleentos del DOM
const miDiv = document.createElement("div");
//MiDiv.style.background ="red"
miDiv.className = "text-red btn hola";
miDiv.id = "mi-id";
//minDiv.title = "Texto random"
//Mejor con metodo
miDiv.setAttribute("title", "Texto del titulo");
miDiv.classList.add("oculto");
//console.dir(miDiv)
//miDiv.innerHTML ="Soy un Div nuevo!!"
//Crear un nodo de texto
const texto = document.createTextNode("Soy un Div nuevo!!");
console.dir(texto);
//
