function generarContrasenaNumerica() {
    let contrasena = "";
    for (let i = 0; i < 6; i++) {
        let digito = Math.floor(Math.random() * 10);
        contrasena += digito;  
    }
    return contrasena;
}
let contrasenaGenerada = generarContrasenaNumerica();
console.log(`Contraseña generada: ${contrasenaGenerada}`);
