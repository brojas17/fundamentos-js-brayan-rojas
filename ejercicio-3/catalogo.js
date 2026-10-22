/* Ejercicio 3 — Explorar el catálogo
 Contenidos: bucles, arrays,
patrones acumulador, contador y máximo */

const productos = ["Teclado", "Ratón", "Monitor", "Auriculares", "Webcam"];
const precios = [45.99, 19.90, 189.00, 59.95, 34.50];
const stock = [10, 25, 3, 0, 7];

/* 1. Mostrar el catálogo: una línea por producto con su precio y sus unidades. Si el stock es 0,
muestra AGOTADO. */
let catalogo = [];//producto, precio, stock
let agotadoContador = 0;
let posicionMoreExpensive = 0;
let moreExpensive = 0;
let acumulado = 0;
for (let i = 0; i < productos.length; i++) {
    let disponibilidad = stock[i] === 0 ? "AGOTADO" : `${stock[i]} uds`;
    catalogo.push([productos[i], precios[i], disponibilidad]);
    /* Segundo problema */
    if (stock[i] === 0) {
        agotadoContador += 1;
    }
    /* Tercer problema */
    if (precios[i] > moreExpensive) {
        moreExpensive = precios[i];
        posicionMoreExpensive = i;
    }
    /* Cuarto problema */
    acumulado += precios[i] * stock[i];
}
/* 
1. Mostrar el catálogo: una línea por producto con su precio y sus unidades. Si el stock es 0, muestra AGOTADO
 */
for (let i = 0; i < catalogo.length; i++) {
    console.log(`${catalogo[i][0]} - ${catalogo[i][1]}€ (${catalogo[i][2]})`);
}

/* 2. Contar cuántos productos están agotados.
 */
console.log("");
console.log(`Productos Agotados: ${agotadoContador}`);

/* 3. Encontrar el producto más caro y mostrar su nombre y su precio. */
console.log(`Producto mas caro: ${catalogo[posicionMoreExpensive][0]} (${catalogo[posicionMoreExpensive][1]})`);

/* 4. Calcular el valor total del inventario: la suma de precio × stock de todos los productos.
 */
console.log(`Valor del inventario: ${acumulado}€`);
