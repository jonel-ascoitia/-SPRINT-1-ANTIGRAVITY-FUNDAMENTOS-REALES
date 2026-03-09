# Reglas de Desarrollo

Este documento establece las pautas y estándares para asegurar la calidad y consistencia del código en el proyecto de Control de Jornada Laboral.

## Buenas prácticas
* **Código claro y comentado:** El código debe ser fácil de leer para otros desarrolladores. Se deben incluir comentarios que expliquen el "por qué" de las soluciones complejas.
* **Funciones pequeñas:** Cada función debe realizar una única tarea específica (Principio de Responsabilidad Única).
* **Evitar duplicación de código:** Seguir el principio DRY (Don't Repeat Yourself). Si una lógica se repite, debe extraerse a una función o clase reutilizable.

## Convenciones de nombres
* **Variables:** Usar `camelCase` (ej. `horasTrabajadas`, `usuarioLogueado`).
* **Clases:** Usar `PascalCase` (ej. `Usuario`, `GeneradorReporte`).
* **Archivos:** Usar `camelCase.js` (ej. `claseUsuario.js`).

## Uso de commits
Los mensajes de commit deben ser claros, en español o inglés, y usar los siguientes prefijos:
* `feat:` Para nuevas funcionalidades.
* `fix:` Para corrección de errores.
* `docs:` Para cambios en la documentación.
* `refactor:` Para cambios en el código que no corrigen errores ni añaden funcionalidades.

**Ejemplo:**
`feat(js): crear clase Usuario`

## Uso de ramas
* **main:** Es la rama estable y productiva del proyecto. Nunca se trabaja directamente sobre ella.
* **dev:** Rama de desarrollo donde se integran las nuevas características.

**Flujo de trabajo:**
1. Los cambios se realizan en la rama `dev` (o ramas de características que apunten a `dev`).
2. Una vez finalizada la tarea, se realiza un **Pull Request** de `dev` a `main` para su revisión e integración final.
