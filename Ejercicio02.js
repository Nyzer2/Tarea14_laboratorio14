function lanzarDado() {
    return Math.floor(Math.random() * 6) + 1;
}
let dado1 = lanzarDado();
let dado2 = lanzarDado();
let suma = dado1 + dado2;
console.log(`Dado 1: ${dado1}`);
console.log(`Dado 2: ${dado2}`);
console.log(`Suma: ${suma}`);
