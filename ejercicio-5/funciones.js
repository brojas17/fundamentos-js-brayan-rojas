/* Ejercicio 5 — Refactorizar en funciones
 Contenidos: funciones,
parámetros, return 

1. Convierte el código de los ejercicios 1 a 4 en funciones reutilizables. Todas deben devolver su
resultado con return; ninguna debe usar console.log por dentro. Los console.log van fuera, al
llamarlas.*/
/* Ejercicio-1 */
/* Variables */
const porcentajeIva = 21;

/* 1. Calcular el subtotal (precio × cantidad) */
function calcularImporteLinea(precio, cantidad) {
    return precio * cantidad;
}

/* 2. Calcular el IVA sobre el subtotal y el total (subtotal + IVA) */
function calcularIVA(importe_) {
    return importe_ * (porcentajeIva / 100);
}
console.log("-------------------");
console.log("Ejercicio 1");
console.log("-------------------");
console.log(`Primero: ${calcularImporteLinea(19.90, 2)}`);
console.log(`Primero: ${calcularIVA(19.90)}`);
console.log("-------------------");
console.log(`Primero: ${calcularImporteLinea(31.15, 3)}`);
console.log(`Primero: ${calcularIVA(31.15)}`);

/* Ejercicio-2 */
/* Variables */
const gasto_envio = 4.95;

// Devuelve el descuento según las reglas de la tienda
function calcularDescuento(importe) {
    if (importe > 100) {
        return importe * 0.10;   // Más de 100 €: 10 %
    } else if (importe > 50) {
        return importe * 0.05;   // Más de 50 € (hasta 100 €): 5 %
    } else {
        return 0;                           // 50 € o menos: sin descuento
    }
}
// Recibe el importe YA DESCONTADO.
function calcularEnvio(importe) {
    if (importe >= 50) {
        return 0;              // Gratis
    } else {
        return gasto_envio;
    }
}
console.log("-------------------");
console.log("Ejercicio 2");
console.log("-------------------");
console.log(calcularDescuento(101.90));
console.log(calcularEnvio(101.90));
console.log("-------------------");
console.log(calcularDescuento(99.91));
console.log(calcularEnvio(99.91));
console.log("-------------------");
console.log(calcularDescuento(44.91));
console.log(calcularEnvio(44.91));

/* Ejercicio-3 */
/* Variables */
const productos = ["Teclado", "Raton", "Monitor", "Auriculares", "Webcam"];
const precios = [45.99, 19.90, 189.00, 59.95, 34.50];
const stock = [10, 25, 3, 0, 7];

const productos2 = ["Camisa", "Pantalon", "Sueter", "Sombrero", "Zapato"];
const precios2 = [10.99, 25.9, 7.00, 12.95, 50.50];
const stock2 = [0, 2, 38, 0, 70];

// Contar productos agotados (patron contador)
function contarAgotados(stock) {
    let agotados = 0;
    for (let i = 0; i < stock.length; i++) {
        if (stock[i] === 0) {
            agotados++;
        }
    }
    return agotados
}
// Producto mas caro (patron maximo: guardamos la posicion)
function productoMasCaro(productos, precios) {
    let posMax = 0;
    for (let i = 1; i < precios.length; i++) {
        if (precios[i] > precios[posMax]) {
            posMax = i;
        }
    }
    return posMax;
}
// Valor total del inventario (patron acumulador)
function valorInventario(precios, stock) {
    let valorTotal = 0;
    for (let i = 0; i < productos.length; i++) {
        valorTotal += precios[i] * stock[i];
    }
    return valorTotal;
}
console.log("-------------------");
console.log("Ejercicio 3");
console.log("-------------------");
console.log(contarAgotados(stock));
console.log(contarAgotados(stock2));
console.log("-------------------");
console.log(productoMasCaro(productos, precios));
console.log(productoMasCaro(productos2, precios2));
console.log("-------------------");
console.log(valorInventario(precios, stock));
console.log(valorInventario(precios2, stock2));

/* Ejercicio-3 */
/* Variables */

let varbuscarProducto = "whatsap";
let varbuscarProducto2 = "zapato";
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
console.log("-------------------");
console.log("Ejercicio 3");
console.log("-------------------");
console.log(buscarProducto(productos, varbuscarProducto));
console.log(buscarProducto(productos2, varbuscarProducto2));
