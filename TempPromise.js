
function TempPromise(etiqueta,valor,tiempo) {
    const respuesta = "El número " + etiqueta + " es par"
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (valor % 2 == 0) {
        resolve(respuesta);
      } else {
        reject(new Error(`El número ${etiqueta} no es par`));
      }
    }, tiempo);
  });
}

function TempPromiseExi(etiqueta, valor) {
  TempPromise(etiqueta, valor, 2000)
    .then((resultado) => {
      console.log(resultado);
    })
    .catch((error) => {
      console.error("", error);
    })
}
console.log("Bienvenido al conteno de números Pares usando Promise");
console.log();
for (let i = 0; i < 10; i++) {
    TempPromiseExi(i, i);
}
