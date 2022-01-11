console.log("welcome to debugger");

const numbers = [1, 2, 3, 4, 5, 6]
console.table(numbers)

for (let i = 0; i < 10; i++) {
  debugger;
  console.log(i);
}

// Para debuggear poner en la consola node debug nombredelarchivo.js
// añadir 'watch('x')' a la consola para ver el valor que queramos debuggear
// 'watchers' para ver los watch añadidos
// 'next' para ir al siguiente paso

// La clave para debuggear con VSCode: Ejecutar(Run) -> Iniciar con debuguer(Start debugguing) -> añadir watchers()
