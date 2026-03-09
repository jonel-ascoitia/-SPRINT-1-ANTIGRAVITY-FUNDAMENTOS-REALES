/**
 * Clase que representa un lapso de pausa del trabajador.
 */
class Pausa {
    constructor(jornadaId, inicio, fin, motivo) {
        this.jornadaId = jornadaId;
        this.inicio = inicio; // Formato 'HH:MM'
        this.fin = fin; // Formato 'HH:MM'
        this.motivo = motivo; // Ej. 'Comida', 'Descanso'
    }

    obtenerDuracionEnMinutos() {
        const [h1, m1] = this.inicio.split(':').map(Number);
        const [h2, m2] = this.fin.split(':').map(Number);
        return (h2 * 60 + m2) - (h1 * 60 + m1);
    }
}

// Pruebas
const descansoComida = new Pausa(1, '14:00', '15:15', 'Comida');
console.log(`Pausa por ${descansoComida.motivo}: ${descansoComida.obtenerDuracionEnMinutos()} mins.`);
const descansoCafe = new Pausa(1, '11:00', '11:15', 'Descanso Café');
console.log(`Pausa por ${descansoCafe.motivo}: ${descansoCafe.obtenerDuracionEnMinutos()} mins.`);
