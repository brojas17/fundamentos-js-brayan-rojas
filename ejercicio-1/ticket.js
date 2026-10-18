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
    let subtotal_ = subtotal(precio, cantidad);
    let iva_ = subtotal_ * (porcentajeIva / 100);
    return subtotal_ + iva_;
}


/* Ejecucion */
console.log(subtotal(precio, cantidad));
console.log(CalculoIva())
