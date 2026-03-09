# Fundamentos de Vibe Coding y Antigravity

Este documento resume los conceptos clave aprendidos durante el Día 1 del Sprint 1.

## 1. ¿Qué es Vibe Coding?
El **Vibe Coding** es un paradigma de desarrollo donde el programador describe sus intenciones a alto nivel (el "vibe") en lugar de escribir cada línea de código manualmente. La inteligencia artificial actúa como un "socio" que entiende el contexto y el propósito del software, encargándose de la sintaxis, la estructura y la implementación técnica, permitiendo que el humano se enfoque en el diseño, la lógica del negocio y la experiencia de usuario.

## 2. Diferencia entre Entorno Web y Entorno Local

| Característica | Entorno Web | Entorno Local |
| :--- | :--- | :--- |
| **Acceso al sistema** | Limitado al navegador. | Acceso total al disco duro y SO. |
| **Instalación** | No requiere (SaaS). | Requiere configuración de herramientas (Git, Node, etc). |
| **Potencia** | Depende de la nube. | Utiliza recursos de tu propia máquina. |
| **Uso** | Ideal para prototipos rápidos o educativos. | Requerido para desarrollo profesional complejo y despliegue. |

## 3. ¿Qué es el modo Planning?
Es una funcionalidad de la IA donde, antes de realizar cualquier cambio, el asistente analiza la petición del usuario y propone una serie de pasos detallados (un plan). Esto ayuda a asegurar de que la arquitectura y la lógica sean correctas antes de tocar el código real.

## 4. ¿Qué es el modo Fast?
A diferencia del modo Planning, el **modo Fast** busca resultados inmediatos. La IA aplica los cambios directamente al archivo sin discutir un plan previo. Es ideal para tareas repetitivas, micro-ajustes o correcciones rápidas donde la arquitectura no está en riesgo.

## 5. ¿Qué modelo usarías para generar una app completa y por qué?
Para generar una aplicación completa, seleccionaría un modelo de razonamiento avanzado como **Claude 3.5 Sonnet** o **GPT-4o**.
**Razón:** Estos modelos tienen una capacidad superior de "ventana de contexto" (pueden "ver" y recordar más archivos de una vez) y una lógica de programación más refinada para manejar dependencias, estructuras de archivos complejas y mejores prácticas de seguridad que modelos más pequeños o antiguos.
