// Definir la clase Auto
class Auto {
  constructor(marca, modelo, precio, disponible) {
    this.marca = marca;
    this.modelo = modelo;
    this.precio = precio;
    this.disponible = disponible;
  }
}

// Crear un array de autos disponibles para rentar
const autosDisponibles = [];

const auto1 = new Auto("Toyota", "Corolla", 20000, true);
const auto2 = new Auto("Honda", "Civic", 25000, true);
const auto3 = new Auto("Ford", "Mustang", 40000, false);
const auto4 = new Auto("Chevrolet", "Camaro", 30000, true);

autosDisponibles.push(auto1, auto2, auto3, auto4)

// Aplicar un filtro para obtener los autos disponibles para rentar
const obtenerAutosDisponibles = (autos) => {
  return autos.filter((auto) => auto.disponible);
};


// Guardamos los autos disponibles para rentar
const autosDisponiblesParaRenta = obtenerAutosDisponibles(autosDisponibles);
console.log("Autos disponibles para renta:");
autosDisponiblesParaRenta.forEach((auto) => {
  console.log("Modelo: " + auto.modelo);
  console.log("Marca: " + auto.marca);
  console.log("Precio: " + auto.precio);
  console.log("-------------------");
});


// Aplicar una función de orden superior para calcular el costo total de renta de los autos
const calcularCostoTotalRenta = (autos, dias) => {
  const autosSeleccionados = obtenerAutosDisponibles(autos);
  const precios = autosSeleccionados.map((auto) => auto.precio);
  const costoTotal = precios.reduce((acumulador, precio) => acumulador + precio, 0);
  return costoTotal * dias;
};

const eleccion = Number(prompt("Seleccione el número correspondiente al auto que desea rentar:"));

if (eleccion >= 1 && eleccion <= autosDisponiblesParaRenta.length) {
  const autoElegido = autosDisponiblesParaRenta[eleccion - 1];

  const dias = Number(prompt("Ingrese la cantidad de días de renta:"));

  const total = autoElegido.precio * dias;

  console.log("Total de la compra: $" + total);
} else {
  console.log("Selección inválida");
}