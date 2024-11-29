
// Ejercicio Calculadora

// let num1 = prompt("Primer Numero");
// let num2 = prompt("Segundo Numero");
// let resultado;

// alert(resultado = num1 + num2);
// alert(resultado = num1 - num2);
// alert(resultado = num1 * num2);
// alert(resultado = num1 / num2);

// console.log1(resultado)
// ------------------------------------------
//
//Pedir Operador
const operador = prompt("Escribe el operador: +, -, *, /,")
//Pedir Numero
const a = parseFloat(prompt("Primer Operando:"))
//Pedir otro numero
const b = parseFloat(prompt("Segundo Operando:"))
//realizar calculo segun el operador
let = resultado
if(operador === "+"){
    resultado = a + b
}else if( operador === "-"){
    resultado = a - b
}else if( operador === "*"){
    resultado = a * b
}else{
    resultado = a / b
}
// alert(eval(""+ a + "" + operador + "" + b))Ojo, no usar nunca eval en produccion
//Mostrar Resultado
alert("El resultado es: " + resultado)