/**
 * Simula la exportación de datos a formato CSV.
 */
function exportarCSV(datos) {
    if (!Array.isArray(datos) || datos.length === 0) {
        return "";
    }

    // Obtener cabeceras
    const headers = Object.keys(datos[0]).join(',');

    // Generar filas
    const rows = datos.map(row => {
        return Object.values(row).map(val => `"${val}"`).join(',');
    });

    return `${headers}\n${rows.join('\n')}`;
}

// Datos de prueba
const datosJornadas = [
    { fecha: '2026-03-01', horas: 8, usuario: 'Jonel' },
    { fecha: '2026-03-02', horas: 7.5, usuario: 'Esteban' },
    { fecha: '2026-03-03', horas: 9, usuario: 'Jonel' }
];

const csvResultado = exportarCSV(datosJornadas);
console.log("Archivo CSV Generado:");
console.log(csvResultado);
