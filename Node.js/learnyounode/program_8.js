// console.log(process.argv[2])

var http = require('http');
var bl = require('bl')

// const BufferList = require('bl');
// var bl = new BufferList();






http.get(process.argv[2], function(res) {
	res.setEncoding('utf8');
	
	res.pipe(bl(function (err, data){
		console.log(data.length)		
		console.log(data.toString());
	}))
	


});


