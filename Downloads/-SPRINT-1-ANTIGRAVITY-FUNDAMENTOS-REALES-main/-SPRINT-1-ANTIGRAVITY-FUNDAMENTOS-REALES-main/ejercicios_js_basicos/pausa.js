/**
 * Resta el tiempo de pausa al total de minutos de trabajo.
 * @param {number} minutosTotales - Minutos totales transcurridos.
 * @param {number} pausa - Minutos que duró la pausa (a descontar).
 * @returns {number} Minutos reales trabajados.
 */
function restarPausa(minutosTotales, pausa) {
    // Retornamos la resta de los minutos totales menos la pausa
    return minutosTotales - pausa;
}

// ----------------------------------------
// Prueba en consola
// ----------------------------------------
const jornadaTotal = 480; // Ej: 8 horas completas
const tiempoDescanso = 45;
console.log(`Se registraron ${jornadaTotal} minutos totales y una pausa de ${tiempoDescanso} minutos.`);
console.log(`Tiempo trabajado (sin pausa): ${restarPausa(jornadaTotal, tiempoDescanso)} minutos.`);
