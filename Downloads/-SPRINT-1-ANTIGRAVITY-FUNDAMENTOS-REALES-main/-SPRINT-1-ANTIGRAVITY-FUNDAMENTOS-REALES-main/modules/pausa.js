/**
 * Módulo para la gestión de Pausas.
 */
export class Pausa {
    constructor(id, jornadaId, minutos) {
        this.id = id;
        this.jornadaId = jornadaId;
        this.minutos = parseInt(minutos);
    }

    /**
     * Obtiene la duración de la pausa en formato decimal de horas.
     * @returns {number}
     */
    getHoras() {
        return this.minutos / 60;
    }
}
