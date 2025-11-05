let precio = parseFloat(prompt("Ingresa el precio decimal (ej. 12.49 o 12.5):"));
if (isNaN(precio)) {
    alert("Por favor, ingresa un número válido.");
} else {
    let haciaAbajo = Math.floor(precio);
    let haciaArriba = Math.ceil(precio);
    let normal = Math.round(precio);
    alert(`Precio original: ${precio}\n` +
          `Redondeo hacia abajo: ${haciaAbajo}\n` +
          `Redondeo hacia arriba: ${haciaArriba}\n` +
          `Redondeo normal: ${normal}`);
}
