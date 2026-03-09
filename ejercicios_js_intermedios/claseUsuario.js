/**
 * Clase que representa a un usuario del sistema.
 */
class Usuario {
    constructor(id, nombre, email, rol) {
        this.id = id;
        this.nombre = nombre;
        this.email = email;
        this.rol = rol;
    }

    obtenerPerfil() {
        return `Usuario: ${this.nombre} (${this.rol}) - ${this.email}`;
    }
}

// Pruebas
const user1 = new Usuario(1, 'Jonel Ascoitia', 'jonel@ascoitia.com', 'Admin');
console.log(user1.obtenerPerfil());
const user2 = new Usuario(2, 'Esteban', 'esteban@ejemplo.com', 'Developer');
console.log(user2.obtenerPerfil());
