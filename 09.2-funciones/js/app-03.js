//Dividir el codigo en funciones
console.log("Antes de  init APP")
initAPP()
console.log("Despues de init APP")


function initAPP() {
  console.log("Inicializando app...")
  pedirDatosUsuario()
}

function pedirDatosUsuario() {
  console.log("Pidiendo Datos del Usuario...")
autenticarUsuario("Papa Noel")
  
}

function autenticarUsuario(usuario) {
  console.log("Autenticando Usuario...")
  console.log("Usuario " + usuario + "Autenticado con exito")
  
}