let numero = parseFloat(prompt("Ingresa un número:"));
if (isNaN(numero)) {
    alert("Por favor, ingresa un número válido.");
} else {
    let cuadrado = Math.pow(numero, 2);
    let cubo = Math.pow(numero, 3);
    let raizCuadrada = Math.sqrt(numero);
    alert(`Número: ${numero}\n` +
          `Cuadrado: ${cuadrado}\n` +
          `Cubo: ${cubo}\n` +
          `Raíz cuadrada: ${raizCuadrada}`);
}
