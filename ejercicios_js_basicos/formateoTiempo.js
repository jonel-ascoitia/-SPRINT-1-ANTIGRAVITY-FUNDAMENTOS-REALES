/**
 * Convierte un número de minutos en formato legible HH:MM.
 * @param {number} totalMinutos - Minutos totales a convertir.
 * @returns {string} Tiempo en formato HH:MM.
 */
function formatearMinutosAHoras(totalMinutos) {
    if (typeof totalMinutos !== 'number') {
        throw new Error('El parámetro debe ser un número');
    }
    const horas = Math.floor(totalMinutos / 60);
    const minutos = totalMinutos % 60;
    const paddingMinutos = minutos < 10 ? `0${minutos}` : minutos;
    return `${horas}:${paddingMinutos}`;
}

// Pruebas
console.log("Formateador de Tiempo:");
console.log(`480 mins -> ${formatearMinutosAHoras(480)} HH:MM`);
console.log(`245 mins -> ${formatearMinutosAHoras(245)} HH:MM (debe ser 4:05)`);
console.log(`60 mins -> ${formatearMinutosAHoras(60)} HH:MM`);
