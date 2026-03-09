/**
 * Simulador de conexión a un servidor MCP (Model Context Protocol).
 * Valida un token de seguridad antes de permitir el acceso.
 */
function simularConexionMCP(token) {
    console.log(`Intentando conectar con token: ${token}...`);

    // Validación: El token debe tener al menos 10 caracteres
    if (token && token.length >= 10) {
        console.log("%c✓ CONEXIÓN EXITOSA: El servidor MCP ha validado el token.", "color: green; font-weight: bold;");
    } else {
        console.error("X ERROR DE CONEXIÓN: El token es inválido o demasiado corto (mínimo 10 caracteres).");
    }
}

// Ejemplos de uso
console.log("--- Prueba 1: Token Válido ---");
simularConexionMCP("token_seguro_12345");

console.log("\n--- Prueba 2: Token Inválido ---");
simularConexionMCP("123");
