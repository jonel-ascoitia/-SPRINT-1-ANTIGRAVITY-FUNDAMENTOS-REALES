/**
 * Simulación de base de datos de jornadas.
 */
const jornadas = [
    { usuario: "Juan", horas: 8 },
    { usuario: "Ana", horas: 7 },
    { usuario: "Esteban", horas: 9 },
    { usuario: "Jonel", horas: 6.5 }
];

/**
 * Función que recorre las jornadas y muestra un reporte en la consola.
 */
function generarReporte(listaJornadas) {
    console.log("--- REPORTE DE JORNADAS ---");
    listaJornadas.forEach((item) => {
        console.log(`Empleado: ${item.usuario} | Horas Registradas: ${item.horas}h`);
    });
    console.log("---------------------------");
}

// Ejecución del generador
generarReporte(jornadas);
