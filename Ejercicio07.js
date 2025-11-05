const input = prompt("Ingresa las calificaciones separadas por comas:");
const calificaciones = input.split(',').map(cal => parseFloat(cal.trim()));
if (calificaciones.some(cal => isNaN(cal))) {
    console.log("Error: Por favor, asegúrate de ingresar solo números válidos");
} else {
    const maximo = Math.max(...calificaciones);
    const calificacionesNormalizadas = calificaciones.map(cal => cal / maximo);
    console.log("\n=== RESULTADOS DE NORMALIZACIÓN ===");
    console.log(`Calificación máxima: ${maximo}`);
    console.log("\nCalificaciones originales:");
    console.log(calificaciones);
    console.log("\nCalificaciones normalizadas (0-1):");
    console.log(calificacionesNormalizadas);
    console.log("\nDetalle:");
    calificaciones.forEach((original, index) => {
        console.log(`${original} → ${calificacionesNormalizadas[index].toFixed(4)}`);
    });
}
