//Funciones Constructoras
function Coche(marca, modelo, motor, ruedas) {
  this.marca = marca;
  this.modelo = modelo;
  this.motor = motor;
  this.ruedas = ruedas;
  this.kilometraje = 0;
  this.informacion = function () {
    `Marca: ${this.marca},Modelo:${this.modelo},Combustible:${this.motor.combustible}`;
  };
}
function Motor(tipo, cilindrada, combustible, consumo) {
  this.tipo = tipo;
  this.cilindrada = cilindrada;
  this.combustible = combustible;
  this.consumo = consumo;
}

const motorGasolina = new Motor("Gasolina", "1.8L", 50, 0.4);
const motorDiesel = new Motor("Diesel", "2L", 80, 0.2);
