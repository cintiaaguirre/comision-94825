
const nombre = prompt("¿Cómo te llamás?");
const servicio = prompt("¿Qué servicio necesitás?");
const peso = parseFloat(prompt("¿Cuántos kilos?"));
const precioPorKilo = parseFloat(prompt("¿Cuál es el precio por kilo?"));
const total = peso * precioPorKilo;



console.log("Nombre: " + nombre);
console.log("Servicio: " + servicio);
console.log("Peso: " + peso + " kg");
console.log("Precio por kilo: $" + precioPorKilo);
console.log("Total del presupuesto: $" + total);


alert("Hola " + nombre + ". El servicio solicitado es: " + servicio + ". El peso es de " + peso + " kg. El total del presupuesto es: $" + total);