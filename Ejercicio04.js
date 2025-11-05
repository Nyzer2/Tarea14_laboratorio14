function gradosARadianes(grados) {
    if (isNaN(grados)) {
        return "Error: Ingresa un número válido para grados.";
    }
    let radianes = grados * (Math.PI / 180);
    let seno = Math.sin(radianes);
    let coseno = Math.cos(radianes);
    return `Grados: ${grados}\nRadianes: ${radianes.toFixed(4)}\nSeno: ${seno.toFixed(4)}\nCoseno: ${coseno.toFixed(4)}`;
}
function radianesAGrados(radianes) {
    if (isNaN(radianes)) {
        return "Error: Ingresa un número válido para radianes.";
    }
    let grados = radianes * (180 / Math.PI);
    return `Radianes: ${radianes}\nGrados: ${grados.toFixed(4)}`;
}
let opcion = prompt("Elige una opción:\n1. Convertir grados a radianes (y mostrar seno/coseno)\n2. Convertir radianes a grados");

if (opcion === "1") {
    let grados = parseFloat(prompt("Ingresa los grados:"));
    alert(gradosARadianes(grados));
} else if (opcion === "2") {
    let radianes = parseFloat(prompt("Ingresa los radianes:"));
    alert(radianesAGrados(radianes));
} else {
    alert("Opción inválida.");
}