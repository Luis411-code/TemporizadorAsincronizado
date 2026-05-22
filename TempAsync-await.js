function TempPromise(valor,tiempo) {
    const respuesta = "El número " + valor + " es par"
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (valor % 2 == 0) {
        resolve(respuesta);
      } else {
        reject(new Error(`El número ${valor} no es par`));
      }
    }, tiempo);
  });
}

async function TempAsync_await(valor) {
  let resultado = "";
  try {
    resultado = await TempPromise(valor, 1000);
    console.log(resultado);
  } catch (error) {
    console.error("", error);
  }
}

console.log("Bienvenido al conteno de números Pares usando Async-await");
console.log();
for (let i = 0; i < 11; i++) {
    TempAsync_await(i);
}