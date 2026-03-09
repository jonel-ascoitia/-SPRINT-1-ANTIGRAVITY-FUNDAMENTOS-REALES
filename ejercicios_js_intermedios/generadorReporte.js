/**
 * Simula la generación de un reporte de jornadas laborales.
 */
function generarReporte(jornadas) {
    if (!Array.isArray(jornadas)) {
        throw new Error('Debe proveerse un array de jornadas');
    }

    console.log("=== REPORTE DE JORNADAS ===");
    let totalAcumulado = 0;

    jornadas.forEach(j => {
        const [h1, m1] = j.inicio.split(':').map(Number);
        const [h2, m2] = j.fin.split(':').map(Number);
        const duracion = ((h2 * 60 + m2) - (h1 * 60 + m1)) / 60;
        totalAcumulado += duracion;
        console.log(`Fecha: ${j.fecha} | Inicio: ${j.inicio} | Fin: ${j.fin} | Horas: ${duracion.toFixed(2)}h`);
    });

    console.log("---------------------------");
    console.log(`Total de horas acumuladas: ${totalAcumulado.toFixed(2)}h`);
    return totalAcumulado;
}

// Datos de prueba
const misJornadas = [
    { fecha: '2026-03-01', inicio: '08:00', fin: '16:00' },
    { fecha: '2026-03-02', inicio: '09:00', fin: '17:30' },
    { fecha: '2026-03-03', inicio: '08:30', fin: '17:45' }
];

generarReporte(misJornadas);
