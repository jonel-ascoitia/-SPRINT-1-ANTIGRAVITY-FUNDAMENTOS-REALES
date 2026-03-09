# Documento de Requisitos - Sistema de Control Horario

## 1. Descripción Funcional
El sistema permite a los empleados registrar su jornada laboral diaria, incluyendo la hora de entrada, hora de salida y tiempos de pausa. El objetivo es proporcionar una herramienta sencilla para el seguimiento de horas trabajadas y la generación de reportes básicos de productividad.

## 2. Funcionalidades Mínimas (MVP)
- **Registro de Jornada:** Iniciar y finalizar el cronómetro de trabajo.
- **Gestión de Pausas:** Registrar descansos durante la jornada (comida, café, etc.).
- **Cálculo Automático:** Determinar las horas netas trabajadas restando las pausas.
- **Historial:** Visualizar registros de días anteriores.
- **Exportación:** Generar un resumen de la jornada en formato texto o CSV.

## 3. Arquitectura Propuesta
### Frontend (Cliente)
- **Tecnologías:** HTML5, CSS3 (Vanilla) y JavaScript (ES6+).
- **Interfaz:** Diseño responsivo para uso en escritorio y móvil.
- **Gestión de Estado:** Manejo de estado local para la sesión activa.

### Backend (Servidor/Servicios)
- **Lógica:** Procesamiento de cálculos de tiempo en JS.
- **Persistencia:** Inicialmente en LocalStorage (Navegador), con miras a Supabase en el futuro.

## 4. Modelo de Datos
- **Usuario:** `id, nombre, email, password, rol`.
- **Jornada:** `id, usuario_id, fecha, hora_inicio, hora_fin, total_horas_netas`.
- **Pausa:** `id, jornada_id, hora_inicio, hora_fin, motivo`.
