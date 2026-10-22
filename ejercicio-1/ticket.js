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
let subtotal = precio * cantidad;

/* 2. Calcular el IVA sobre el subtotal y el total (subtotal + IVA) */
let calculoIva = subtotal * (porcentajeIva / 100);

/* Mostrar todos los importes con 2 decimales usando .toFixed(2) */
console.log("*******Ticked********");
console.log(`Producti: ${producto}`);
console.log(`${cantidad} x ${precio.toFixed(2)}`);
console.log(`Subtotal: ${subtotal.toFixed(2)}`);
console.log(`IVA (21%): ${calculoIva.toFixed(2)}`);
console.log(`Total: ${(subtotal + calculoIva).toFixed(2)}`);