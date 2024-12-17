const coche = {
  //propiedades del objeto
  marca: "Toyota",
  modelo: "Corolla",
  motor: {
    tipo: "Gasolina",
    cilindrada: "1.8L",
    combutible: 50,
  },
  ruedas: 4,
  kilometraje: 0,

  //metodos
  desplazar: function (kilometros) {
    const combustibleNesesario = kilometros * this.motor.consumo;
    if (this.motor.combutible >= combustibleNesesario) {
      this.kilometraje += kilometros;
      this.motor.combutible -= combustibleNesesario;
      console.log("El coche se va a desplazar " + kilometros + "km");
      console.log(
        `Combustible restante: ${this.motor.combustible.toFixed(2)}Litros`
      );
    } else {
      console.log("No hay combustible suficiente para ese trayecto");
    }
  },
  respostar: function (litros) {
    this.motor;
  },

  informacion: function () {
    console.log(
      `Marca:${this.marca},
      Modelo${this.modelo},
      Combustible:${this.motor.combutible} Litros, 
      Kilometraje:${this.kilometraje}`
    );
  },
};
console.log(coche);
miCoche.desplazar(1000);
