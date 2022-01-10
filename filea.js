var rr = require("./fileb");
var ff = require("./filec");
var mycls = require("./filed");

let myclass = new mycls("juan", "juan@msn.com");
myclass.funct1();
console.log(JSON.stringify(myclass));
console.log(rr.x);

console.log(ff(2, 3)); // use console.log to show return of function

// class Person {
//   constructor(name, email) {
//     this.name = name;
//     this.email = email;
//   }
// }

// let person1 = new Person('Juan', 'juan@gmail.com');
// console.log(JSON.stringify(person1));

// let ffa = new Function('a', 'b', 'return a + b')
// console.log(ffa(21,22));

// const spread = (...b) => {
//     let cc = b.join(';')
//     console.log(cc);
// }

// const letters = ['a','b','c','d','e','f'];

// spread(...letters, 'g', 22, 77);
