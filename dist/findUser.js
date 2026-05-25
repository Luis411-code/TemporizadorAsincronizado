"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Función genérica para hacer fetch con retry
async function fetchWithRetry(url, retries = 3, delay = 1000) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Error en la respuesta del servidor");
        }
        return await response.json();
    }
    catch (error) {
        if (retries > 0) {
            console.log(`Fallo. Reintentando en ${delay}ms... (${retries} intentos restantes)`);
            // Esperar antes de reintentar
            await new Promise(resolve => setTimeout(resolve, delay));
            return fetchWithRetry(url, retries - 1, delay);
        }
        else {
            throw new Error("No se pudo completar la solicitud después de varios intentos");
        }
    }
}
// Función principal
async function main() {
    try {
        const users = await fetchWithRetry("https://jsonplaceholder.typicode.com/users", 3);
        // Buscar un usuario específico
        const usernameToFind = "Bret";
        const foundUser = users.find(u => u.username === usernameToFind);
        if (foundUser == null) {
            console.log("Usuario no encontrado");
            return;
        }
        console.log("Usuario encontrado:", foundUser);
    }
    catch (error) {
        console.error("Error final:", typeof error === "object" && error !== null ? error.message : String(error));
    }
}
main();
//# sourceMappingURL=findUser.js.map