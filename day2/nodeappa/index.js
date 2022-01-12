var bCode = require("./bcode");
var nbCode = require("./nbcode");
var strCode = require("./strcode");
var readable = require("./readablecode");
var writestrcode = require('./writestrcode')

var fs = require('fs')

let rs = fs.createReadStream('./ifile.txt')
let ws = fs.createWriteStream('./jfile.txt')

rs.pipe(ws)
console.log('Program Ended');