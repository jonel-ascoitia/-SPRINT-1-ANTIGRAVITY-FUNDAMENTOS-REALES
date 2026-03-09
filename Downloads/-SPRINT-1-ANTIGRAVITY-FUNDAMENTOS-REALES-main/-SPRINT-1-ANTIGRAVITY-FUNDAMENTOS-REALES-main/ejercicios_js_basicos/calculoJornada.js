/**
 * Calcula las horas trabajadas en una jornada ingresando hora de entrada y hora de salida (formato 24h).
 * @param {number} horaEntrada - Hora a la que inicia la jornada laboral.
 * @param {number} horaSalida - Hora a la que termina la jornada laboral.
 * @returns {number} Horas totales de duración de la jornada.
 */
function calcularJornada(horaEntrada, horaSalida) {
    // Asumimos un ingreso y salida en el mismo día, sin rebasar medianoche.
    // Retornamos la resta directa
    return horaSalida - horaEntrada;
}

// ----------------------------------------
// Pruebas en consola
// ----------------------------------------
const entradaUsuario = 8;
const salidaUsuario = 17;

console.log(`entrada ${entradaUsuario}`);
console.log(`salida ${salidaUsuario}`);
console.log(`resultado ${calcularJornada(entradaUsuario, salidaUsuario)} horas.`);
