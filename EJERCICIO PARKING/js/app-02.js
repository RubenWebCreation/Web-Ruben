// Clase Plaza
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

// Clase Vehiculo
class Vehiculo {
  constructor(matricula, horaEntrada) {
    this.matricula = matricula;
    this.horaEntrada = horaEntrada;
  }
}

// Clase Parking
class Parking {
  constructor(numeroPlazas, precioPorHora = 1) {
    this.plazas = Array.from(
      { length: numeroPlazas },
      (_, i) => new Plaza(i + 1)
    );
    this.precioPorHora = precioPorHora;
    this.vehiculos = new Map(); // Almacena matrícula -> { vehiculo, plaza }
  }

  registrarVehiculo(matricula) {
    // Verificar si ya existe el vehículo
    if (this.vehiculos.has(matricula)) {
      console.log(`El vehículo con matrícula ${matricula} ya está registrado.`);
      return;
    }

    // Buscar la primera plaza libre
    const plazaLibre = this.plazas.find((plaza) => !plaza.ocupada);

    if (!plazaLibre) {
      console.log("El parking está lleno. No se puede registrar el vehículo.");
      return;
    }

    // Registrar el vehículo
    const horaEntrada = new Date();
    const vehiculo = new Vehiculo(matricula, horaEntrada);
    plazaLibre.ocupar();
    this.vehiculos.set(matricula, { vehiculo, plaza: plazaLibre });

    console.log(
      `Vehículo con matrícula ${matricula} registrado en la plaza ${
        plazaLibre.numero
      } a las ${horaEntrada.toLocaleTimeString()}.`
    );
  }

  generarTiquet(matricula) {
    if (!this.vehiculos.has(matricula)) {
      console.log(`El vehículo con matrícula ${matricula} no está registrado.`);
      return;
    }

    const { vehiculo, plaza } = this.vehiculos.get(matricula);
    const horaSalida = new Date();
    const costeTotal = this.calcularCoste(vehiculo.horaEntrada, horaSalida);

    // Liberar la plaza y eliminar el vehículo del sistema
    plaza.liberar();
    this.vehiculos.delete(matricula);

    // Generar el tiquet
    console.log("========== TIQUET ==========");
    console.log(`Matrícula: ${matricula}`);
    console.log(`Plaza: ${plaza.numero}`);
    console.log(
      `Hora de entrada: ${vehiculo.horaEntrada.toLocaleTimeString()}`
    );
    console.log(`Hora de salida: ${horaSalida.toLocaleTimeString()}`);
    console.log(`Coste total: ${costeTotal} euros`);
    console.log("============================");
  }

  calcularCoste(horaEntrada, horaSalida) {
    const milisegundosPorHora = 1000 * 60 * 60;
    const horasEstacionadas = Math.ceil(
      (horaSalida - horaEntrada) / milisegundosPorHora
    );
    return horasEstacionadas * this.precioPorHora;
  }

  mostrarEstadoParking() {
    const plazasOcupadas = this.plazas.filter((plaza) => plaza.ocupada).length;
    const plazasLibres = this.plazas.length - plazasOcupadas;
    console.log(`Plazas ocupadas: ${plazasOcupadas}`);
    console.log(`Plazas libres: ${plazasLibres}`);
  }
}

// Simulación
const parking = new Parking(3); // Crear un parking con 3 plazas

// Registrar vehículos
parking.registrarVehiculo("1234-ABC");
parking.registrarVehiculo("5678-DEF");
parking.registrarVehiculo("1234-ABC"); // Intento de duplicado
parking.registrarVehiculo("9101-GHI");
parking.registrarVehiculo("1112-JKL"); // Sin plazas disponibles

// Generar tiquets
setTimeout(() => parking.generarTiquet("1234-ABC"), 2000); // Simular salida tras 2 segundos
setTimeout(() => parking.generarTiquet("5678-DEF"), 4000); // Simular salida tras 4 segundos

// Mostrar estado del parking
setTimeout(() => parking.mostrarEstadoParking(), 5000);
