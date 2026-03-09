/**
 * Incrementa el número de horas actuales en una unidad.
 * @param {number} horasActuales - La cantidad de horas inicial.
 * @returns {number} Las horas actuales incrementadas en 1.
 */
function incrementarHoras(horasActuales) {
    // Retornamos el valor incrementado de forma directa
    return horasActuales + 1;
}

// ----------------------------------------
// Prueba en consola
// ----------------------------------------
const horasDePrueba = 4;
console.log(`Horas previas: ${horasDePrueba}`);
console.log(`Horas tras incrementar: ${incrementarHoras(horasDePrueba)}`);
