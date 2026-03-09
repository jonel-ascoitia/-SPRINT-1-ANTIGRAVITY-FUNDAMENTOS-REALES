/**
 * Clase que representa una Jornada Laboral.
 */
class Jornada {
    /**
     * @param {string} horaEntrada - Hora de inicio (formato ISO o HH:MM).
     * @param {string} horaSalida - Hora de fin (formato ISO o HH:MM).
     */
    constructor(horaEntrada, horaSalida) {
        this.horaEntrada = new Date(`2024-01-01T${horaEntrada}:00`);
        this.horaSalida = new Date(`2024-01-01T${horaSalida}:00`);
    }

    /**
     * Calcula la diferencia de horas entre entrada y salida.
     * @returns {number} Horas totales trabajadas.
     */
    calcularHorasTrabajadas() {
        const diferenciaMs = this.horaSalida - this.horaEntrada;
        const horas = diferenciaMs / (1000 * 60 * 60);
        return horas;
    }
}

// Ejemplo en consola
const jornadaHoy = new Jornada("08:00", "16:00");
console.log(`Horas brutas trabajadas: ${jornadaHoy.calcularHorasTrabajadas()}h`);
