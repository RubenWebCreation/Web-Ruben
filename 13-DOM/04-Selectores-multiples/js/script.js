//Selectores multiples
const lista = document.getElementsByClassName("item");
// console.log(lista[2].innerHTML);
//HTML COLECTION NO TIENE EL FOREACH
const listaArray = Array.from(lista);

listaArray.forEach((element) => {
  console.log(element.innerText);
});

const lista2 = document.getElementsByTagName("li");
console.log("Lista2: ", lista2);

//Query Selector

const Lista3 = document.querySelectorAll(".item");
console.log("lista3: ", Lista3);
Lista3.forEach((item, key) => {
  item.style.color = "red";
  if (key === 0) {
    item.remove();
  }
});

//Algunos aspectos de NodeList
//entries()
for (const entry of Lista3.entries()) {
  console.log(entry);
}

//values
for (const value of Lista3.values()) {
  console.log(value);
}

//keys
for (const key of Lista3.keys()) {
  console.log(key);
}
