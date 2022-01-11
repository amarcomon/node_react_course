// Creating buffers
const buffa = new Buffer(10);
const buffb = new Buffer([1, 2, 3, 4]);
const buffc = new Buffer("Hello", "utf-8");
// console.log(buffc.toString('ascii'));

const buffd = new ArrayBuffer(100);

// Write to a buffer
let buffe = new Buffer(200);
let wrbuff = buffe.write("My test");
//console.log("object written  to buffer", wrbuff);

let bufff = new Buffer(20);
let str= ''

for(let i = 0; i < 20; i++) {
  str += (String.fromCharCode(i + 99)) + '';
}

bufff.write(str)
//console.log(bufff.toString("ascii"));
let t = JSON.stringify(bufff.toString("ascii"))
console.log(t);

// Combine buffers
let buffg = new Buffer('Test1');
let buffh = new Buffer('Test2');

let comb = Buffer.concat([buffg, buffh])
console.log(comb.toString());

// Copy buffers
let buffi = new Buffer('PRR');
let buffj = new Buffer(1);

buffi.copy(buffj);
console.log(buffj.toString());

// Slice buffer
let buffk = new Buffer('My table');
let buffl = buffk.slice(0,4)
console.log(buffl.toString());
