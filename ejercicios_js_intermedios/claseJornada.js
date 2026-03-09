/**
 * Clase que representa una jornada de trabajo asociada a un usuario.
 */
class Jornada {
    constructor(id, usuarioId, fecha, inicio, fin) {
        this.id = id;
        this.usuarioId = usuarioId;
        this.fecha = fecha; // Formato 'AAAA-MM-DD'
        this.inicio = inicio; // Formato 'HH:MM'
        this.fin = fin; // Formato 'HH:MM'
    }

    calcularDuracionEnHoras() {
        const [h1, m1] = this.inicio.split(':').map(Number);
        const [h2, m2] = this.fin.split(':').map(Number);
        const totalMins = (h2 * 60 + m2) - (h1 * 60 + m1);
        return parseFloat((totalMins / 60).toFixed(2));
    }

    toString() {
        return `Jornada [${this.fecha}]: ${this.inicio} - ${this.fin} (${this.calcularDuracionEnHoras()}h)`;
    }
}

// Pruebas
const jornadaHoy = new Jornada(1, 101, '2026-03-09', '08:30', '17:45');
console.log(jornadaHoy.toString());
const jornadaMañana = new Jornada(2, 101, '2026-03-10', '09:00', '14:00');
console.log(jornadaMañana.toString());
