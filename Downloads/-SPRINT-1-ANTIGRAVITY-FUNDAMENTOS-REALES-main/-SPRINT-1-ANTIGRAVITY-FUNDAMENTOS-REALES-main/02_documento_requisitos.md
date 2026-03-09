# Documento de Requisitos

## 1. Descripción del sistema
El sistema de **Control de Jornada Laboral** es una herramienta diseñada para gestionar y registrar el tiempo que los empleados dedican a sus actividades profesionales. Permite el monitoreo preciso de las horas de entrada, salida y los periodos de descanso realizados durante el día, facilitando la transparencia y el cumplimiento de las normativas laborales.

## 2. Problema que resuelve
Las empresas enfrentan constantes retos para llevar un registro exacto de la asistencia y productividad. La falta de un sistema centralizado suele derivar en:
* Errores manuales en el cálculo de horas.
* Dificultad para gestionar tiempos de pausa legalmente requeridos.
* Falta de reportes rápidos para la toma de decisiones administrativas.
* Riesgo de incumplimiento de normativas de registro de jornada.

## 3. Funcionalidades mínimas
Se han definido las siguientes capacidades básicas para el sistema:
* **Registrar usuario:** Permitir el alta de nuevos empleados en el sistema.
* **Registrar jornada laboral:** Capturar la hora de inicio y fin de las labores.
* **Registrar pausas:** Contabilizar los minutos de descanso tomados.
* **Calcular horas trabajadas:** Determinar el tiempo neto laborado restando las pausas.
* **Generar reporte de jornadas:** Visualizar un resumen de las actividades del usuario.
* **Exportar reporte:** Permitir la descarga de los datos en formatos compatibles como CSV.

## 4. Arquitectura propuesta

### Componentes
* **Frontend:** Interfaz de usuario construida con HTML y CSS para que el usuario interactúe con el sistema.
* **Backend:** Lógica de negocio desarrollada en JavaScript que procesa los cálculos de horas y gestiona las reglas del sistema.
* **Base de datos:** Sistema de almacenamiento (simulado o físico) para persistir datos de usuarios, jornadas y pausas.

### Comunicación
El Frontend captura las acciones del usuario y las envía al Backend. El Backend valida la lógica, realiza los cálculos necesarios y persiste o recupera la información de la Base de Datos para finalmente devolver una respuesta visual al usuario.

## 5. Modelo de datos propuesto

### Entidad: Usuario
* `id` (Número o String único)
* `nombre` (Nombre del empleado)
* `email` (Correo electrónico de contacto)

### Entidad: Jornada
* `id` (Identificador de la jornada)
* `usuarioId` (Relación con la entidad Usuario)
* `horaEntrada` (Fecha y hora de inicio)
* `horaSalida` (Fecha y hora de fin)

### Entidad: Pausa
* `id` (Identificador de la pausa)
* `jornadaId` (Relación con la entidad Jornada)
* `minutos` (Duración del descanso)

### Relación entre entidades
Un **Usuario** puede tener múltiples **Jornadas**. Cada **Jornada** puede contener una o varias **Pausas**. Esta estructura jerárquica permite un desglose detallado del tiempo diario de cada colaborador.
