class Producto {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }
}
class Carrito {
  constructor() {
    this.productos = []; 
  }
  agregarProducto(producto) {
    if (producto instanceof Producto) {
      this.productos.push(producto);
      console.log(`Producto "${producto.nombre}" agregado al carrito.`);
    } else {
      console.log("Solo se pueden agregar objetos Producto.");
    }
  }
  calcularTotal() {
    return this.productos.reduce((total, producto) => total + producto.precio, 0);
  }
  mostrarResumen() {
    if (this.productos.length === 0) {
      console.log("El carrito está vacío.");
      return;
    }
    console.log("Resumen del carrito:");
    this.productos.forEach((producto, index) => {
      console.log(`${index + 1}. ${producto.nombre} - $${producto.precio}`);
    });
    console.log(`Total: $${this.calcularTotal()}`);
  }
}

