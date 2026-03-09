# Reglas de Desarrollo y Buenas Prácticas

Estas reglas aseguran la calidad y consistencia del código durante todo el Sprint.

## 1. Convenciones de Nombres
- **Variables y Funciones:** `camelCase` (ej. `calcularHorasTrabajadas`).
- **Clases:** `PascalCase` (ej. `UsuarioService`).
- **Archivos:** `kebab-case` o `camelCase` de forma consistente.
- **Constantes:** `UPPER_SNAKE_CASE` (ej. `MAX_WORKING_HOURS`).

## 2. Buenas Prácticas (Clean Code)
- **Funciones:** Deben realizar una sola tarea y ser fáciles de probar.
- **Comentarios:** Solo cuando el código no sea lo suficientemente descriptivo por sí solo.
- **DRY (Don't Repeat Yourself):** Reutilizar lógica siempre que sea posible.

## 3. Uso de Git y Commits
- **Frecuencia:** Commits pequeños y atómicos (mínimo 3 por sesión).
- **Mensajes:** Técnicos y descriptivos, empezando con el tipo de cambio (ej. `feat:`, `fix:`, `docs:`).
- **Pair Programming:** Rotar roles y acreditar los commits correctamente.

## 4. Estrategia de Ramas
- `main`: Código en producción, siempre estable.
- `dev`: Rama de integración para el desarrollo actual.
- `feature/*`: Ramas temporales para funcionalidades específicas.
