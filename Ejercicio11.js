class Usuario {
    constructor(nombre, email) {
        this.nombre = nombre;
        this.email = email;
    }
    mostrarInfo() {
        return `Nombre: ${this.nombre}, Email: ${this.email}`;
    }
}
class Cliente extends Usuario {
    constructor(nombre, email, nivelFidelidad) {
        super(nombre, email); 
        if (nivelFidelidad < 1 || nivelFidelidad > 5) {
            throw new Error("El nivel de fidelidad debe estar entre 1 y 5.");
        }
        this.nivelFidelidad = nivelFidelidad;
    }
    mostrarInfo() {
        return `${super.mostrarInfo()}, Nivel de Fidelidad: ${this.nivelFidelidad}`;
    }
}
class Administrador extends Usuario {
    constructor(nombre, email, permisos) {
        super(nombre, email); 
        this.permisos = permisos; 
    }
    mostrarInfo() {
        return `${super.mostrarInfo()}, Permisos: ${this.permisos.join(', ')}`;
    }
}
const cliente = new Cliente('Juan Pérez', 'juan@example.com', 3);
console.log(cliente.mostrarInfo()); 
const admin = new Administrador('Ana López', 'ana@example.com', ['crear', 'editar', 'eliminar']);
console.log(admin.mostrarInfo()); 
