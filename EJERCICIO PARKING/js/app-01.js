class vehiculo {
  constructor(matricula, horaEntrada) {
    this.matricula = matricula;
    this.horaEntrada = horaEntrada;
  }
}

class Plaza {
  constructor(numero) {
    this.numero = numero;
    this.ocupada = false;
  }
  ocupar() {
    this.ocupada = true;
  }
  liberar() {
    this.ocupada = false;
  }
}

class Parking {
  constructor(totalPlazas, precioPorHora = i) {
    this.plazas = [{ numero: 1, ocupado: false }, new Plaza(2)];
    this.precioPorHora = precioPorHora;
    this.vehiculo = new Map();

    //Crear Plazas Parking
    for (let i = 0; i < totalPlazas; i++) {
      this.plazas.push(new Plaza(i));
    }
  }
  regristarVehiculo(matricula) {
    //Buscar plaza libre
    const plazLibre = this.plazas.find((Plaza) => !this.plazas.ocupada);
    //Si no hay plazas no se puede aparcar

    const horaEntrada = new Date();
    const vehiculo = new Vehiculo(matricula, horaEntrada);

    this.vehiculos.set(matricula, { vehiculo: vehiculo, plaza: plazLibre });
    plazLibre.ocupada();
  }
}
const parking = new Parking(10, 6);
