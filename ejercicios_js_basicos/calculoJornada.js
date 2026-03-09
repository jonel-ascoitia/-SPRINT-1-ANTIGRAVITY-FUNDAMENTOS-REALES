/**
 * Calcula la jornada laboral total tomando en cuenta pausa y tiempo de entrada y salida.
 * En este caso simplificado, simplemente manejamos horas y pausas.
 * @param {number} horasEntrada - Hora de inicio (8.5 como 8:30).
 * @param {number} horasSalida - Hora de fin (17.5 como 17:30).
 * @param {number} minPausa - Minutos de pausa en descanso.
 * @returns {string} Jornada efectiva calculada.
 */
function calcularJornadaEfectiva(horasEntrada, horasSalida, minPausa) {
    if (typeof horasEntrada !== 'number' || typeof horasSalida !== 'number' || typeof minPausa !== 'number') {
        throw new Error('Todos los parámetros deben ser números');
    }
    const diferenciaEnMins = (horasSalida - horasEntrada) * 60;
    const efectivoEnMins = diferenciaEnMins - minPausa;
    const horasEfectivas = Math.floor(efectivoEnMins / 60);
    const minsEfectivos = efectivoEnMins % 60;
    const paddingMinutos = minsEfectivos < 10 ? `0${minsEfectivos}` : minsEfectivos;
    return `Jornada Efectiva: ${horasEfectivas} horas y ${paddingMinutos} minutos`;
}

// Pruebas
console.log("Cálculo de Jornada:");
console.log(`De 8.5 a 17.5 con 60 mins de pausa -> ${calcularJornadaEfectiva(8.5, 17.5, 60)} (9h totales, 1h pausa = 8h netas)`);
console.log(`De 9.0 a 14.0 con 15 mins de pausa -> ${calcularJornadaEfectiva(9.0, 14.0, 15)} (5h totales, 15m pausa = 4h y 45m netas)`);
// Nueva prueba de jornada para Esteban
