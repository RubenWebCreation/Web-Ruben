//Pedir los 10 pokemos y listar sus nombres
//https://pokeapi.co/api/v2/pokemon?limit=10
//Parte del ejemplo de las pelis con XMLHTTPRequest

function fechPokemonData() {
  const baseUrl = "https://pokeapi.co/api/v2/pokemon?limit=10";

  const xhr = XMLHttpRequest();
  xhr.open("GET", baseUrl, true);
  xhr.onreadystatechange = function () {
    xhr.onerror = function () {
      console.log("Algo a ido mal");
    };
  };
}
