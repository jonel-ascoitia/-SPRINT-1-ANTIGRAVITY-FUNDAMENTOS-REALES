/**
 * Función que incrementa las horas trabajadas dado un valor inicial y el incremento.
 * @param {number} horasActuales - Total de horas trabajadas hasta el momento.
 * @param {number} incremento - Horas que se desean sumar.
 * @returns {number} Nuevo total de horas trabajadas.
 */
function incrementarHorasTrabajadas(horasActuales, incremento) {
    if (typeof horasActuales !== 'number' || typeof incremento !== 'number') {
        throw new Error('Ambos parámetros deben ser números');
    }
    return horasActuales + incremento;
}

// Pruebas
console.log("Contador de Horas:");
console.log(`Total acumulado (8 + 2): ${incrementarHorasTrabajadas(8, 2)} horas`);
console.log(`Total acumulado (0 + 7): ${incrementarHorasTrabajadas(0, 7)} horas`);
