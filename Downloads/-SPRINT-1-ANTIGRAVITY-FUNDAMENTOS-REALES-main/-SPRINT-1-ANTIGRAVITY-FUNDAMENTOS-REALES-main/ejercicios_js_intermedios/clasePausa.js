/**
 * Clase que representa un periodo de Pausa o descanso.
 */
class Pausa {
    /**
     * @param {number} minutos - Duración del descanso en minutos.
     */
    constructor(minutos) {
        this.minutos = minutos;
    }

    /**
     * Aplica la pausa restando el tiempo de descanso al tiempo total.
     * @param {number} tiempoTotalHoras - El tiempo total en horas.
     * @returns {number} Tiempo neto en horas después de la pausa.
     */
    aplicarPausa(tiempoTotalHoras) {
        const pausaEnHoras = this.minutos / 60;
        return tiempoTotalHoras - pausaEnHoras;
    }
}

// Ejemplo de uso
const miPausa = new Pausa(30); // 30 minutos
const tiempoBruto = 8; // 8 horas
const tiempoNeto = miPausa.aplicarPausa(tiempoBruto);

console.log(`Tiempo total original: ${tiempoBruto}h`);
console.log(`Tiempo después de aplicar pausa: ${tiempoNeto}h`);
