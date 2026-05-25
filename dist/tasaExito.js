function ListNumero() {
  let numero = [2, 6, 4, 10, 12, 8, 14, 0, 6];
  const element = numero[i];
  i++;
  return element / 0.2;
}
function Promiseasync({ valor, tiempo, intentos }) {
  const respuesta = "Felicidades tiene una tasa de Éxito de un " + valor + "% puede proceder a construir"
  return new Promise((resolve, reject) => {
    setTimeout(() => {

      if (valor > 50) {
        resolve(respuesta);
      } else {
        reject(new Error(` Su tasa de Exito fue de ${valor}%. Le quedan ${intentos} intentos`));
      }
    }, tiempo);
  });
}

async function fetchWithRetryAsync(fn, retries) {
  let resultado = "";
  let numero = fn;
  if (retries <= 0) {
    console.log("Fracaso eminente");
    return null;
  } else if (numero > 50) {
    resultado = await Promiseasync({ valor: numero, tiempo: 1000, intentos: 0 });
    console.log(resultado);

    console.log("Programa finalizado gracias por su visita");
    return null;
  } else {
    try {
      resultado = await Promiseasync(retries, numero, 1000);
      console.log(resultado);
    } catch (error) {
      console.error("", error);
    }
  }
  fetchWithRetryAsync(ListNumero(), retries - 1)
}
let i = 0;
fetchWithRetryAsync(ListNumero(), 4)