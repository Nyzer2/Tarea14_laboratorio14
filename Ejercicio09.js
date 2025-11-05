class Producto {
    #nombre;
    #precio;
    #stock;
    constructor(nombre, precio, stock) {
        this.#nombre = nombre;
        this.setPrecio(precio);
        this.setStock(stock);
    }
    getNombre() {
        return this.#nombre;
    }
    getPrecio() {
        return `${this.#precio.toFixed(2)}`;
    }
    getPrecioNumerico() {
        return this.#precio;
    }
    getStock() {
        return this.#stock;
    }
    setNombre(nombre) {
        this.#nombre = nombre;
    }
    setPrecio(precio) {
        const precioNumerico = Number(precio);
        if (isNaN(precioNumerico)) {
            console.log("Error: El precio debe ser un número válido");
            return false;
        }
        if (precioNumerico <= 0) {
            console.log("Error: El precio debe ser mayor a 0");
            return false;
        }
        this.#precio = precioNumerico;
        return true;
    }
    setStock(stock) {
        if (stock < 0) {
            console.log("Error: El stock no puede ser negativo");
            return false;
        }
        this.#stock = stock;
        return true;
    }
    vender(cantidad) {
        if (cantidad <= 0) {
            console.log("Error: La cantidad a vender debe ser mayor a 0");
            return false;
        }
        if (cantidad > this.#stock) {
            console.log(`Error: No hay suficiente stock. Stock disponible: ${this.#stock}`);
            return false;
        }
        this.#stock -= cantidad;
        console.log(`Venta exitosa! Se vendieron ${cantidad} unidades de ${this.#nombre}`);
        console.log(`Total de venta: ${(cantidad * this.#precio).toFixed(2)}`);
        console.log(`Stock restante: ${this.#stock}`);
        return true;
    }
    mostrarInfo() {
        console.log("\n=== INFORMACIÓN DEL PRODUCTO ===");
        console.log(`Nombre: ${this.#nombre}`);
        console.log(`Precio: ${this.getPrecio()}`);
        console.log(`Stock: ${this.#stock} unidades`);
        console.log("================================\n");
    }
    reabastecer(cantidad) {
        if (cantidad <= 0) {
            console.log("Error: La cantidad a reabastecer debe ser mayor a 0");
            return false;
        }
        this.#stock += cantidad;
        console.log(`Stock reabastecido! Se agregaron ${cantidad} unidades`);
        console.log(`Stock actual: ${this.#stock}`);
        return true;
    }
}
console.log("SISTEMA DE CONTROL DE INVENTARIO\n");
const nombre = prompt("Ingresa el nombre del producto:");
const precio = parseFloat(prompt("Ingresa el precio del producto:"));
const stock = parseInt(prompt("Ingresa el stock inicial:"));
const producto = new Producto(nombre, precio, stock);
producto.mostrarInfo();
let continuar = true;
while (continuar) {
    const opcion = prompt(
        "¿Qué deseas hacer?\n\n" +
        "1. Ver información del producto\n" +
        "2. Vender producto\n" +
        "3. Reabastecer stock\n" +
        "4. Cambiar precio\n" +
        "5. Salir\n\n" +
        "Ingresa el número de opción:"
    );
    switch (opcion) {
        case "1":
            producto.mostrarInfo();
            break;
        case "2":
            const cantidadVenta = parseInt(prompt("¿Cuántas unidades deseas vender?"));
            if (!isNaN(cantidadVenta)) {
                producto.vender(cantidadVenta);
            } else {
                console.log("Error: Ingresa un número válido");
            }
            break;
        case "3":
            const cantidadReabastecer = parseInt(prompt("¿Cuántas unidades deseas agregar al stock?"));
            if (!isNaN(cantidadReabastecer)) {
                producto.reabastecer(cantidadReabastecer);
            } else {
                console.log("Error: Ingresa un número válido");
            }
            break;
        case "4":
            const nuevoPrecio = prompt("Ingresa el nuevo precio (puede ser número o cadena):");
            if (producto.setPrecio(nuevoPrecio)) {
                console.log(`Precio actualizado a ${producto.getPrecio()}`);
            }
            break;
        case "5":
            continuar = false;
            console.log("\nGracias por usar el sistema de inventario");
            producto.mostrarInfo();
            break;
        default:
            console.log("Opción inválida. Por favor, selecciona una opción del 1 al 5");
    }
}