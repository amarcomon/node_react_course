var mycls = require('./mymod')

var pera = new mycls.MyPerson('pepe', 'pepe@gmail.com')
var cara = new mycls.MyCar('megane', 'renault')

console.log(JSON.stringify(pera));
console.log(JSON.stringify(cara));