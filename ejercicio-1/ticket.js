/* Variables */
const producto = "Monitor";
const precio = 189; // precio por unidad, sin IVA
const cantidad = 2;
const porcentajeIva = 21;

/* Procedimiento */
/* 1. Calcular el subtotal (precio × cantidad) */
function subtotal(precio_, cantidad_) {
    return (precio_ * cantidad_);
}

/* 2. Calcular el IVA sobre el subtotal y el total (subtotal + IVA) */
function CalculoIva() {
    return (subtotal(precio, cantidad) * (porcentajeIva / 100));
}

/* Mostrar todos los importes con 2 decimales usando .toFixed(2) */
function ImprimirTicked() {
    let subtotal_ = subtotal(precio, cantidad).toFixed(2);
    let IVA_ = CalculoIva().toFixed(2);
    console.log("*******Ticked********");
    console.log(`Producti: ${producto}`);
    console.log(`${cantidad} x ${precio.toFixed(2)}`);
    console.log(`Subtotal: ${subtotal_}`);
    console.log(`IVA (21%): ${IVA_}`);
    console.log(`Total: ${(Number(subtotal_) + Number(IVA_)).toFixed(2)}`);
}
/* Ejecucion */
ImprimirTicked();