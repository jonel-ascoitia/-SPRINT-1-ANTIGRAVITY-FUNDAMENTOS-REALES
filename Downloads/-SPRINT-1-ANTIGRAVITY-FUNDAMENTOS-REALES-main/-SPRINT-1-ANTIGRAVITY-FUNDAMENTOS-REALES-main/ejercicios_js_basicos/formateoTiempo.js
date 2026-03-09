/**
 * Convierte una cantidad de minutos a formato HH:MM (Horas y Minutos).
 * @param {number} minutos - Total de minutos a convertir.
 * @returns {string} Tiempo formateado como "HH:MM".
 */
function convertirMinutosAHoras(minutos) {
    // Calculamos el total de horas dividiendo entre 60. Math.floor nos da la parte entera.
    const horasCalculadas = Math.floor(minutos / 60);

    // Calculamos los minutos restantes usando el operador módulo (%) que nos da el resto.
    const minutosRestantes = minutos % 60;

    // Formateamos como strings para asegurar que siempre tengan 2 dígitos con padStart
    const horasString = String(horasCalculadas).padStart(2, '0');
    const minsString = String(minutosRestantes).padStart(2, '0');

    // Retorna la cadena interpolada con el formato esperado
    return `${horasString}:${minsString}`;
}

// ----------------------------------------
// Prueba en consola
// ----------------------------------------
const pruebaMinutos = 125;
const resultadoEsperado = convertirMinutosAHoras(pruebaMinutos);

console.log(`${pruebaMinutos} minutos convertidos a formato HH:MM son: ${resultadoEsperado}`);
// Resultado esperado: 02:05
