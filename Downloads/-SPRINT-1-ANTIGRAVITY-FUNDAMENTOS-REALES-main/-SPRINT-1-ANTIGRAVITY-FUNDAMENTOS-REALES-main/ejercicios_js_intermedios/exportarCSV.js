/**
 * Función que genera un string en formato CSV a partir de un array de objetos.
 * @param {Array} datos - Lista de datos de jornadas.
 * @returns {string} String formateado como CSV.
 */
function exportarCSV(datos) {
    let csvContent = "usuario,horas\n"; // Encabezados del CSV

    datos.forEach((fila) => {
        csvContent += `${fila.usuario},${fila.horas}\n`;
    });

    return csvContent;
}

// Ejemplo de uso
const jornadasSimuladas = [
    { usuario: "Juan", horas: 8 },
    { usuario: "Ana", horas: 7 }
];

const resultadoCSV = exportarCSV(jornadasSimuladas);

console.log("Contenido del archivo CSV generado:");
console.log(resultadoCSV);
