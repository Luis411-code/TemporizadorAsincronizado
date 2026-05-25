function wait(callback, ms) {
  return setTimeout(() => {
    callback();
  }, ms);
}

console.log("Bienvenido al conteno de números Pares usando Callback");
console.log();
for (let i = 0; i < 10; i++) {
    if (i % 2 == 0) {
        wait(() => console.log("El número", i, "es par"), 2000);
    }else{
        console.log(i);
    }
}