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
const usuarios = [
    new Cliente('Juan Pérez', 'juan@example.com', 3),
    new Administrador('Ana López', 'ana@example.com', ['crear', 'editar', 'eliminar']),
    new Cliente('María García', 'maria@example.com', 5),
    new Administrador('Carlos Ruiz', 'carlos@example.com', ['crear', 'eliminar']),
    new Cliente('Laura Torres', 'laura@example.com', 1)
];
usuarios.forEach((usuario, index) => {
    console.log(`Usuario ${index + 1}: ${usuario.mostrarInfo()}`);
});