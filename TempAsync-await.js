function TempPromise(etiqueta,valor,tiempo) {
    const respuesta = "El número " + etiqueta + " es par"
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (valor % 2 == 0) {
        resolve(respuesta);
      } else {
        reject(new Error(`El número ${etiqueta} no es par...NIGA`));
      }
    }, tiempo);
  });
}

async function TempAsync_await(etiqueta,valor) {
  let resultado = "";
  try {
    resultado = await TempPromise(etiqueta, valor, 1000);
    console.log(resultado);
  } catch (error) {
    console.error("", error);
  }
}

console.log("Bienvenido al conteno de números Pares usando Async-await");
console.log();
for (let i = 0; i < 11; i++) {
    TempAsync_await(i, i);
}