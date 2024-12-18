//Sintaxis de clase
class Motor {
  constructor(cilindrada, combustible, consumo) {
    this.tipo = tipo;
    this.cilindrada = cilindrada;
    this.combustible = combustible;
    this.consumo = consumo;
    console.log("Construyendo un Motor");
  }
}
const motorGasolina = new Motor("Gasolina", "1.8L", 50, 0.4);
const motorDiesel = new Motor("Diesel", "2L", 80, 0.2);
console.log(motorDiesel);
console.log(motorGasolina);

class Coche {
  constructor(marca, modelo, motor, ruedas) {
    this.marca = marca;
    this.modelo = modelo;
    this.motor = motor;
    this.ruedas = ruedas;
  }
}
