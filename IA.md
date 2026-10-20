# Registro de uso de IA
| Fecha | Ejercicio | Herramienta | Qué le pedí (prompt) | Qué me respondió | Qué hice con la
respuesta |
|---|---|---|---|---|---|
|20/10/2026|
Ejercicio-1|
gemini|
en esta linea de codigo:
console.log(`Total: ${Number(subtotal_) + Number(IVA_)}`);
me sale con muchos decimales si ya he usado tofixed antes en las variables declaradas, no me des la solucion |
gemini: ¡Hola, Brian! Es un detalle clásico de JavaScript que suele sorprender la primera vez que te topas con él.

Para darte una pista sin resolverlo por ti: piensa en qué tipo de dato devuelve exactamente el método .toFixed() y cómo maneja JavaScript la precisión decimal al hacer operaciones aritméticas entre números con decimales.

¿Te has fijado en qué tipo de dato se convierte una variable justo después de aplicarle toFixed()?
yo: en string
gemini: ¡Exacto! Da en el clavo.

Al convertir el resultado a un string, cuando intentas sumarlos de nuevo con el operador +, JavaScript interpreta el + como una concatenación de texto en lugar de una suma matemática (o bien, al volver a pasarlos a Number, las operaciones internas de punto flotante de JavaScript vuelven a desatar los decimales infinitos).

Con esa pista, ¿por dónde se te ocurre que podrías enfocarlo para que el cálculo se mantenga limpio y el formato con los decimales deseados se aplique únicamente al final de todo?
yo: poner la suma entre parentesis y aplicar tofixed(2) al final|
console.log(`Total: ${(Number(subtotal_) + Number(IVA_)).toFixed(2)}`);|