/* Ejercicio 2 — Descuento y envío 
Contenidos:
condicionales, casos límite */

/* 1. Dado el importe de una compra, calcula el descuento y los gastos de envío según las reglas de la
tienda.
 */
const importe = 50.01;

/* Descuentos */
let descuento = 0;
if (importe > 100) {
    descuento = importe * (10 / 100);
} else if (importe > 50 && importe <= 100) {
    descuento = importe * (5 / 100);
} else {
    descuento = 0;
}
/* Envio */
let envio = 4.95;
let importeDsc = importe - descuento;
if (importeDsc >= 50) {
    envio = 0;
}

/* Total */
let total = importeDsc + envio;
/* Impresion de Resultados */
console.log("|Importe|Descuento|Importe con descuento|Envio|Total|");
console.log(`|${importe.toFixed(2)}€|${descuento.toFixed(2)}€|${importeDsc.toFixed(2)}€|${envio.toFixed(2)}€|${total.toFixed(2)}€|`);
