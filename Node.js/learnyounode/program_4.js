var fs = require('fs');
var myFile;


function fileReed(callback){
fs.readFile(process.argv[2], function render (err, data) {
	//myFile = parseInt(data);
	myFile = data.toString('utf8');

	myFile = myFile.split(/\r\n|\r|\n/);
	myFile = myFile.length - 1;
	callback();

  });
};


function logO(){
	console.log(myFile);
}
fileReed(logO)
