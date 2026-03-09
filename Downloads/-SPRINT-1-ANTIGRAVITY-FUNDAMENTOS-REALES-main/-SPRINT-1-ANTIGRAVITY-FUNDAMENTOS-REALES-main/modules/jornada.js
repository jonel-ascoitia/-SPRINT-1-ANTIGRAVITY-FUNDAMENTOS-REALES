/**
 * Módulo para la gestión de Jornadas.
 */
export class Jornada {
    constructor(id, usuarioId, horaEntrada, horaSalida = null) {
        this.id = id;
        this.usuarioId = usuarioId;
        this.horaEntrada = new Date(horaEntrada);
        this.horaSalida = horaSalida ? new Date(horaSalida) : null;
    }

    /**
   * Calcula las horas trabajadas restando las pausas.
   * @param {Array} pausas - Lista de pausas asociadas a esta jornada.
   * @returns {number} Horas netas.
   */
    calcularHorasNetas(pausas = []) {
        if (!this.horaSalida) return 0;

        const diffMs = this.horaSalida - this.horaEntrada;
        const horasBrutas = diffMs / (1000 * 60 * 60);

        const horasPausas = pausas.reduce((acc, p) => acc + p.getHoras(), 0);
        const netas = horasBrutas - horasPausas;

        return Math.max(0, netas).toFixed(2);
    }
}
