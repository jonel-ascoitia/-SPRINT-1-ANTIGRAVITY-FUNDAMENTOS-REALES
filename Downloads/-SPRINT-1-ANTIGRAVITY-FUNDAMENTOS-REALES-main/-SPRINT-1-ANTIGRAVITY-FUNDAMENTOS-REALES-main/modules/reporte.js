/**
 * Módulo para generar reportes en pantalla.
 */
export class Reporte {
    /**
   * Genera el HTML para mostrar el reporte de jornadas.
   * @param {Array} jornadas - Lista de jornadas.
   * @param {Array} usuarios - Lista de usuarios.
   * @param {Array} todasPausas - Todas las pausas registradas.
   * @returns {string} Fragmento HTML.
   */
    static generarHTML(jornadas, usuarios, todasPausas = []) {
        if (jornadas.length === 0) return "<p>No hay jornadas registradas.</p>";

        let html = "<table><thead><tr><th>Usuario</th><th>Entrada</th><th>Salida</th><th>Pausas (min)</th><th>Total Neto</th></tr></thead><tbody>";

        jornadas.forEach((j) => {
            const user = usuarios.find((u) => u.id == j.usuarioId);
            const nombre = user ? user.nombre : "Desconocido";

            const pausasJornada = todasPausas.filter(p => p.jornadaId == j.id);
            const totalPausaMin = pausasJornada.reduce((acc, p) => acc + p.minutos, 0);
            const totalNeto = j.calcularHorasNetas(pausasJornada);

            html += `<tr>
                <td>${nombre}</td>
                <td>${j.horaEntrada.toLocaleString()}</td>
                <td>${j.horaSalida ? j.horaSalida.toLocaleString() : "En curso"}</td>
                <td>${totalPausaMin} min</td>
                <td><strong>${totalNeto}h</strong></td>
              </tr>`;
        });

        html += "</tbody></table>";
        return html;
    }

    /**
     * Genera un string CSV.
     */
    static generarCSV(jornadas, usuarios, todasPausas = []) {
        let csv = "Usuario,Entrada,Salida,Pausas(min),TotalNeto(h)\n";
        jornadas.forEach(j => {
            const user = usuarios.find(u => u.id == j.usuarioId);
            const pausas = todasPausas.filter(p => p.jornadaId == j.id);
            const minPausa = pausas.reduce((acc, p) => acc + p.minutos, 0);
            csv += `${user?.nombre || 'N/A'},${j.horaEntrada.toISOString()},${j.horaSalida?.toISOString() || ''},${minPausa},${j.calcularHorasNetas(pausas)}\n`;
        });
        return csv;
    }
}
