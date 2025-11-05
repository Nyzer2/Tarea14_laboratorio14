class Empleado {
    constructor(nombre, sueldoBase) {
        this.nombre = nombre;
        this.sueldoBase = sueldoBase;
    }
}
class Programador extends Empleado {
    constructor(nombre, sueldoBase, lenguaje) {
        super(nombre, sueldoBase); 
        this.lenguaje = lenguaje;
    }
    calcularSueldo() {
        return this.sueldoBase + (this.sueldoBase * 0.10);
    }
}
class ProgramadorSenior extends Programador {
    constructor(nombre, sueldoBase, lenguaje) {
        super(nombre, sueldoBase, lenguaje); 
    }
    calcularSueldo() {
        return super.calcularSueldo() + (this.sueldoBase * 0.15); 
    }
}
const programador = new Programador('Juan Pérez', 50000, 'JavaScript');
console.log(`${programador.nombre} - Lenguaje: ${programador.lenguaje} - Sueldo: ${programador.calcularSueldo()}`);
const senior = new ProgramadorSenior('Ana López', 50000, 'Python');
console.log(`${senior.nombre} - Lenguaje: ${senior.lenguaje} - Sueldo: ${senior.calcularSueldo()}`);

