/**
 * Clase que representa a un Usuario del sistema.
 */
class Usuario {
  /**
   * @param {number|string} id - Identificador único.
   * @param {string} nombre - Nombre del usuario.
   * @param {string} email - Correo electrónico.
   */
  constructor(id, nombre, email) {
    this.id = id;
    this.nombre = nombre;
    this.email = email;
  }

  /**
   * Muestra la información básica del usuario en consola.
   */
  mostrarInfo() {
    console.log(`Usuario [ID: ${this.id}]: ${this.nombre} (${this.email})`);
  }
}

// Ejemplo de uso
const usuario1 = new Usuario(1, "Jonel Ascoitia", "jonel@example.com");
usuario1.mostrarInfo();
