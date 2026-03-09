import { Usuario } from '../modules/usuario.js';
import { Jornada } from '../modules/jornada.js';
import { Pausa } from '../modules/pausa.js';
import { Reporte } from '../modules/reporte.js';

// Estado de la aplicación
const state = {
    usuarios: [],
    jornadas: [],
    pausas: []
};

// Selectores
const formUsuario = document.getElementById('form-usuario');
const formJornada = document.getElementById('form-jornada');
const formPausa = document.getElementById('form-pausa');
const selectUsuarioJornada = document.getElementById('select-usuario-jornada');
const selectJornadaPausa = document.getElementById('select-jornada-pausa');
const btnReporte = document.getElementById('btn-reporte');
const btnExportarCSV = document.getElementById('btn-exportar-csv');
const resultadoReporte = document.getElementById('resultado-reporte');

// --- EVENTOS ---

// Registrar Usuario
formUsuario.addEventListener('submit', (e) => {
    e.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const id = Date.now();

    const nuevoUsuario = new Usuario(id, nombre, email);
    state.usuarios.push(nuevoUsuario);

    actualizarSelects();
    formUsuario.reset();
    alert(`Usuario ${nombre} creado!`);
});

// Registrar Jornada
formJornada.addEventListener('submit', (e) => {
    e.preventDefault();
    const usuarioId = selectUsuarioJornada.value;
    const entrada = document.getElementById('hora-entrada').value;
    const salida = document.getElementById('hora-salida').value;

    if (!usuarioId) return alert("Seleccione un usuario");

    const nuevaJornada = new Jornada(Date.now(), usuarioId, entrada, salida);
    state.jornadas.push(nuevaJornada);

    actualizarSelects();
    formJornada.reset();
    alert("Jornada registrada!");
});

// Registrar Pausa
formPausa.addEventListener('submit', (e) => {
    e.preventDefault();
    const jornadaId = selectJornadaPausa.value;
    const minutos = document.getElementById('minutos-pausa').value;

    if (!jornadaId) return alert("Seleccione una jornada");

    const nuevaPausa = new Pausa(Date.now(), jornadaId, minutos);
    state.pausas.push(nuevaPausa);

    formPausa.reset();
    alert("Pausa agregada!");
});

// Generar Reporte
btnReporte.addEventListener('click', () => {
    resultadoReporte.innerHTML = Reporte.generarHTML(state.jornadas, state.usuarios, state.pausas);
});

// Exportar CSV
btnExportarCSV.addEventListener('click', () => {
    const csv = Reporte.generarCSV(state.jornadas, state.usuarios, state.pausas);
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'reporte_jornadas.csv';
    a.click();
});

// --- FUNCIONES AUXILIARES ---

function actualizarSelects() {
    // Select Usuarios
    selectUsuarioJornada.innerHTML = '<option value="">Seleccione Usuario</option>';
    state.usuarios.forEach(u => {
        const opt = document.createElement('option');
        opt.value = u.id;
        opt.textContent = u.nombre;
        selectUsuarioJornada.appendChild(opt);
    });

    // Select Jornadas
    selectJornadaPausa.innerHTML = '<option value="">Seleccione Jornada</option>';
    state.jornadas.forEach(j => {
        const u = state.usuarios.find(user => user.id == j.usuarioId);
        const opt = document.createElement('option');
        opt.value = j.id;
        opt.textContent = `${u?.nombre || 'User'} - ${j.horaEntrada.toLocaleDateString()}`;
        selectJornadaPausa.appendChild(opt);
    });
}
