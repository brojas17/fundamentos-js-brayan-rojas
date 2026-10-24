/* Ejercicio 4 — Buscar un producto
Contenidos: bucles,
arrays, búsqueda */

const productos = ["Teclado", "Ratón", "Monitor", "Auriculares", "Webcam"];
const precios = [45.99, 19.90, 189.00, 59.95, 34.50];
const stock = [10, 25, 3, 0, 7];
let varbuscarProducto = "webcam";
function buscarProducto(productos, varbuscarProducto) {
    let indexProducto = -1;
    for (let i = 0; i < productos.length; i++) {
        if (productos[i].toLowerCase() === String(varbuscarProducto).toLowerCase()) {
            indexProducto = i;
            break;
        }
    }
    return indexProducto;
}
let rslt = buscarProducto(productos, varbuscarProducto);
console.log(`${varbuscarProducto} esta en la posicion ${rslt}. Precio: ${precios[rslt]}€. Stock: ${stock[rslt]}`);