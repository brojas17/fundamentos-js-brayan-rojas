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




/* Ejecucion */
console.log(subtotal(precio, cantidad));