//console.log(process.argv[2])
var fs = require('fs');
var myFile;

myFile = fs.readFileSync(process.argv[2]);
//console.log(myFile)
var str = myFile.toString('utf8');
// console.log(str)
var count = str.split(/\r\n|\r|\n/);

console.log(count.length - 1);
