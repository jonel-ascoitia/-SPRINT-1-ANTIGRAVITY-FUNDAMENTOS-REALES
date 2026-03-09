/**
 * Valida un formato básico de email usando expresiones regulares.
 * @param {string} email - Correo electrónico a validar.
 * @returns {boolean} True si es válido, False si no lo es.
 */
function validarEmail(email) {
    // Expresión regular para validar estructura típica de email: texto@texto.texto
    const regexValidador = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // .test() devuelve un booleano si la cadena cumple la expresión regular
    return regexValidador.test(email);
}

// ----------------------------------------
// Pruebas en consola
// ----------------------------------------
const emailCorrecto = "usuario.demo@antigravity.com";
const emailIncorrecto = "correo.sin.dominio@";

console.log(`Evaluando email: ${emailCorrecto} -> ¿Es válido?: ${validarEmail(emailCorrecto)}`);
console.log(`Evaluando email: ${emailIncorrecto} -> ¿Es válido?: ${validarEmail(emailIncorrecto)}`);
