//Estructuras condicionales
let haceSol = true

if(haceSol === true){
    // console.log("Voy a la playa!");
} else {
    // console.log("Me quedo en casa"); 
}

haceSol = true
let haceCalor = false

if(haceSol && haceCalor){
    // console.log("Voy a la playa!");
} else {
    // console.log("Me quedo en casa"); 
}

haceSol = true;
tengoHambre = true
if (haceSol){
    console.log("Voy a la playa!")
} else if (tengoHambre) {
    console.log("Hago Palomitas")
} else {
    console.log("No se que hacer...")
}

//Se puede anidar
if(haceSol){
    console.log("Voy a la playa!")
    if (tengoHambre){
        console.log("Como un Bocadillo")
    }
}
//Operadores aritmeticoa + - * / % ++ --
//Operadores de comparacion == != === !== > < >= <=
//Operadores logicos && || !

//Operador ternario
let accion = ""
if (haceSol) {
    accion = "Voy a la playa!"
} else {
    accion = "Me quedo en casa"
}

let accion2 = haceSol ? "Voy a la Playa!" : "Me quedo en casa";
console.log(accion2);

console.log("Fin del script");
