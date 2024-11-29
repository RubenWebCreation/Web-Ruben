
const operador = prompt("Escribe el operador: +, -, *, /,")
const a = parseFloat(prompt("Primer Operando:"))
const b = parseFloat(prompt("Segundo Operando:"))
let = resultado
switch (operador) {
    case "+":
        resultado = a + b
     break;
    case "-":
        resultado = a - b
     break;
    case "*":
        resultado = a * b
     break;
    case "/":
        resultado = a / b
     break;
    default:
    resultado = "Operador no valido"
    break;
}
alert("El resultado es: " + resultado)