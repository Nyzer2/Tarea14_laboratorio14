let x1 = parseFloat(prompt("Ingresa x1:"));
let y1 = parseFloat(prompt("Ingresa y1:"));
let x2 = parseFloat(prompt("Ingresa x2:"));
let y2 = parseFloat(prompt("Ingresa y2:"));
if (isNaN(x1) || isNaN(y1) || isNaN(x2) || isNaN(y2)) {
    alert("Por favor, ingresa números válidos para todas las coordenadas.");
} else {
    let distanciaEntrePuntos = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    let distanciaOrigen1 = Math.sqrt(Math.pow(x1, 2) + Math.pow(y1, 2));
    let distanciaOrigen2 = Math.sqrt(Math.pow(x2, 2) + Math.pow(y2, 2));
    let sumaDistanciasOrigen = distanciaOrigen1 + distanciaOrigen2;
    alert(`Punto 1: (${x1}, ${y1})\n` +
          `Punto 2: (${x2}, ${y2})\n` +
          `Distancia entre puntos: ${distanciaEntrePuntos.toFixed(4)}\n` +
          `Distancia de Punto 1 al origen: ${distanciaOrigen1.toFixed(4)}\n` +
          `Distancia de Punto 2 al origen: ${distanciaOrigen2.toFixed(4)}\n` +
          `Suma de distancias al origen: ${sumaDistanciasOrigen.toFixed(4)}`);
}
