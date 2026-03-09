/**
 * Realiza una validación simple de una dirección de correo electrónico.
 * @param {string} email - Cadena del email a validar.
 * @returns {boolean} True si el email es válido bajo criterios mínimos, false en caso contrario.
 */
function validarEmail(email) {
    if (typeof email !== 'string') {
        throw new Error('El email debe ser una cadena de texto');
    }
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexEmail.test(email);
}

// Pruebas
console.log("Validación de Correo Electrónico:");
console.log(`juan@ejemplo.com -> ${validarEmail('juan@ejemplo.com')}`);
console.log(`juan@ejemplo -> ${validarEmail('juan@ejemplo')} (esperado false)`);
console.log(`correo@dominio.ws -> ${validarEmail('correo@dominio.ws')}`);
