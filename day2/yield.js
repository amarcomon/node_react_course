function* gt() {
  console.log("first");
  yield "First gen";
  console.log("second");
  yield "Second gen";
  console.log("third");
  yield "Third gen";
  console.log("fourth");
  yield "fourth gen";
}

let ng = gt();
// for (const i of ng) {
//   console.log(i);
//   setInterval(() => {
//       console.log('');
//   }, 5000)
// }
console.log(ng.next());
console.log(ng.next());


// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/yield*
