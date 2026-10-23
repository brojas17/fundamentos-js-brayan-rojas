/* Ejercicio 4 — Buscar un producto
Contenidos: bucles,
arrays, búsqueda */

const productos = ["Teclado", "Ratón", "Monitor", "Auriculares", "Webcam"];
const precios = [45.99, 19.90, 189.00, 59.95, 34.50];
const stock = [10, 25, 3, 0, 7];
let varbuscarProducto = "webcam";
let indexProducto = -1;
function buscarProducto(productos, varbuscarProducto) {
    for (let i = 0; i < productos.length; i++) {
        if (productos[i].toLowerCase() === String(varbuscarProducto).toLowerCase()) {
            indexProducto = i;
            break;
        }
    }
    return indexProducto;
}
indexProducto = buscarProducto(productos, varbuscarProducto);
console.log(`${varbuscarProducto} esta en la posicion ${indexProducto}. Precio: ${precios[indexProducto]}€. Stock: ${stock[indexProducto]}`);