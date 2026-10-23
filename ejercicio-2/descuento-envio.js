/* Ejercicio 2 — Descuento y envío 
Contenidos:
condicionales, casos límite */

/* 1. Dado el importe de una compra, calcula el descuento y los gastos de envío según las reglas de la
tienda.
 */
const importe = 50.01;

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

// Cálculos
const descuento = calcularDescuento(importe);
const importeConDescuento = importe - descuento;
const envio = calcularEnvio(importeConDescuento);
const total = importeConDescuento + envio;

// Mostrar resultados
console.log("Importe: " + importe.toFixed(2) + " €");
console.log("Descuento: " + descuento.toFixed(2) + " €");
console.log("Importe con descuento: " + importeConDescuento.toFixed(2) + " €");
console.log("Envío: " + (envio === 0 ? "Gratis" : envio.toFixed(2) + " €"));
console.log("Total: " + total.toFixed(2) + " €");
