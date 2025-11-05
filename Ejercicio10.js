class Figura {
    constructor(nombre) {
        this.nombre = nombre;
    }
    area() {
        console.log("El método area() debe ser implementado en la subclase");
        return 0;
    }
    perimetro() {
        console.log("El método perimetro() debe ser implementado en la subclase");
        return 0;
    }
    mostrarInfo() {
        console.log("\n--- Información de la figura ---");
        console.log("Tipo: " + this.nombre);
        console.log("Area: " + this.area().toFixed(2) + " unidades cuadradas");
        console.log("Perimetro: " + this.perimetro().toFixed(2) + " unidades");
        console.log("--------------------------------\n");
    }
}
class Cuadrado extends Figura {
    constructor(lado) {
        super("Cuadrado");
        this.lado = lado;
    }
    area() {
        return this.lado * this.lado;
    }
    perimetro() {
        return 4 * this.lado;
    }
    mostrarDatos() {
        console.log("Lado: " + this.lado);
    }
}
class Triangulo extends Figura {
    constructor(base, altura, lado1, lado2, lado3) {
        super("Triangulo");
        this.base = base;
        this.altura = altura;
        this.lado1 = lado1;
        this.lado2 = lado2;
        this.lado3 = lado3;
    }
    area() {
        return (this.base * this.altura) / 2;
    }
    perimetro() {
        return this.lado1 + this.lado2 + this.lado3;
    }
    mostrarDatos() {
        console.log("Base: " + this.base);
        console.log("Altura: " + this.altura);
        console.log("Lados: " + this.lado1 + ", " + this.lado2 + ", " + this.lado3);
    }
}
console.log("SISTEMA DE CALCULO DE FIGURAS GEOMETRICAS\n");
console.log("=== CUADRADOS ===");
const cuadrado1 = new Cuadrado(5);
cuadrado1.mostrarDatos();
cuadrado1.mostrarInfo();
console.log("=== TRIANGULOS ===");
const triangulo1 = new Triangulo(6, 4, 5, 5, 6);
triangulo1.mostrarDatos();
triangulo1.mostrarInfo();
console.log("=== EJEMPLO DE POLIMORFISMO ===");
console.log("Calculando areas y perimetros de múltiples figuras:\n");
const figuras = [
    new Cuadrado(5),
    new Triangulo(6, 4, 5, 5, 6),
];
figuras.forEach((figura, index) => {
    console.log("Figura " + (index + 1) + ":");
    console.log("  Tipo: " + figura.nombre);
    console.log("  Area: " + figura.area().toFixed(2));
    console.log("  Perimetro: " + figura.perimetro().toFixed(2));
    console.log("");
});
const areaTotal = figuras.reduce((total, figura) => total + figura.area(), 0);
console.log("Area total de todas las figuras: " + areaTotal.toFixed(2) + " unidades cuadradas");
