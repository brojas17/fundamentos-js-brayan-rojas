/* Ejercicio 3 — Explorar el catalogo
 Contenidos: bucles, arrays,
patrones acumulador, contador y maximo */

const productos = ["Teclado", "Raton", "Monitor", "Auriculares", "Webcam"];
const precios = [45.99, 19.90, 189.00, 59.95, 34.50];
const stock = [10, 25, 3, 0, 7];

// 1. Mostrar el catalogo
for (let i = 0; i < productos.length; i++) {
    let unidades;
    if (stock[i] === 0) {
        unidades = "AGOTADO";
    } else {
        unidades = stock[i] + " uds";
    }
    console.log(`${productos[i]} - ${precios[i].toFixed(2)} € (${unidades})`);
}

// 2. Contar productos agotados (patron contador)
function contarAgotados(stock) {
    let agotados = 0;
    for (let i = 0; i < stock.length; i++) {
        if (stock[i] === 0) {
            agotados++;
        }
    }
    return agotados
}
console.log("");
console.log(`Productos agotados: ${contarAgotados(stock)}`);

// 3. Producto mas caro (patron maximo: guardamos la posicion)
function productoMasCaro(productos, precios) {
    let posMax = 0;
    for (let i = 1; i < precios.length; i++) {
        if (precios[i] > precios[posMax]) {
            posMax = i;
        }
    }
    return posMax;
}
let rslt = productoMasCaro(productos, precios);
console.log(`Producto mas caro: ${productos[rslt]} (${precios[rslt].toFixed(2)} €)`);

// 4. Valor total del inventario (patron acumulador)
function valorInventario(precios, stock) {
    let valorTotal = 0;
    for (let i = 0; i < productos.length; i++) {
        valorTotal += precios[i] * stock[i];
    }
    return valorTotal;
}

console.log(`Valor del inventario: ${valorInventario(precios, stock).toFixed(2)} €`);
