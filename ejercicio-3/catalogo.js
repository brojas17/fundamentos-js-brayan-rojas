/* Ejercicio 3 — Explorar el catálogo
 Contenidos: bucles, arrays,
patrones acumulador, contador y máximo */

const productos = ["Teclado", "Ratón", "Monitor", "Auriculares", "Webcam"];
const precios = [45.99, 19.90, 189.00, 59.95, 34.50];
const stock = [10, 25, 3, 0, 7];

/* 1. Mostrar el catálogo: una línea por producto con su precio y sus unidades. Si el stock es 0,
muestra AGOTADO. */
let catalogo = [];//producto, precio, stock
for (let i = 0; i < productos.length; i++) {
    let disponibilidad = stock[i] === 0 ? "AGOTADO" : `${stock[i]} unidades`;
    catalogo.push([productos[i], precios[i], disponibilidad]);
}
console.log(catalogo);
