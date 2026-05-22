let indiceActual = 0;

function opNumero() {
    let numero = [2, 6, 4, 10, 12, 8, 14, 0, 6];
    
    if (indiceActual >= numero.length) {
        console.log("No quedan más números en el array");
        return null;
    }
    
    const valor = numero[indiceActual];
    indiceActual++;
    return valor;
}

async function fetchWithRetryAsync(fn, retries) {
    let contador = retries;
    
    while (contador >= 0) {
        try {
            const numero = fn();
            
            if (numero === null) {
                throw new Error("No hay más números para probar");
            }
            
            const operacion = numero / 0.2;
            
            
            if (operacion > 50) {
                return `✅ Felicidades la Tasa de Éxito para construcción es de un ${operacion}%!`;
            } else {
                throw new Error(`❌ Fracaso: Tasa de Éxito por debajo del 50%`);
            }
            
        } catch (error) {
            contador--;
            if (contador >= 0) {
                console.log(`${error.message}.`);
            } else {
                throw new Error(`💀 No es factible realizar esta construcción. Su tasa de Éxito esta por debajo del 50%`);
            }
        }
    }
}

indiceActual = 0;
fetchWithRetryAsync(opNumero, 4)
    .then(resultado => console.log(resultado))
    .catch(error => console.error(error.message));