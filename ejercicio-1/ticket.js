/* Ejercicio 1 — Ticket de un producto
Contenidos: variables, operadores,
template strings
 */
/* Variables */
const producto = "Monitor";
const precio = 19.90; // precio por unidad, sin IVA
const cantidad = 3;
const porcentajeIva = 21;

/* Procedimiento */
/* 1. Calcular el subtotal (precio × cantidad) */
function calcularImporteLinea(precio, cantidad) {
    return precio * cantidad;
}
/* 2. Calcular el IVA sobre el subtotal y el total (subtotal + IVA) */
function calcularIVA(importe_) {
    return importe_ * (porcentajeIva / 100);
}
/* Mostrar todos los importes con 2 decimales usando .toFixed(2) */
let importe_ = calcularImporteLinea(precio, cantidad);
let calcularIVA_ = calcularIVA(importe_);

console.log("*******Ticked********");
console.log(`Producti: ${producto}`);
console.log(`${cantidad} x ${precio.toFixed(2)} €`);
console.log(`Subtotal: ${importe_.toFixed(2)} €`);
console.log(`IVA (21%): ${calcularIVA_.toFixed(2)} €`);
console.log(`Total: ${(importe_ + calcularIVA_).toFixed(2)} €`);

