/**
 * Función que resta minutos de pausa del tiempo total trabajado en minutos.
 * @param {number} totalMinutos - Tiempo total de la jornada en minutos.
 * @param {number} minutosPausa - Minutos tomados de descanso.
 * @returns {number} Minutos efectivos de trabajo.
 */
function restarMinutosPausa(totalMinutos, minutosPausa) {
    if (typeof totalMinutos !== 'number' || typeof minutosPausa !== 'number') {
        throw new Error('Ambos parámetros deben ser números');
    }
    return totalMinutos - minutosPausa;
}

// Pruebas
console.log("Restador de Minutos de Pausa:");
console.log(`480 mins totales - 30 mins pausa = ${restarMinutosPausa(480, 30)} mins efectivos`);
console.log(`240 mins totales - 15 mins pausa = ${restarMinutosPausa(240, 15)} mins efectivos`);
