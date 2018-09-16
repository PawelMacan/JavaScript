var http = require('http');
var bl = require('bl');

var result = [];
var count = 0;
var args = process.argv.slice(2);
var noOfUrls = args.length;

for (var i = 0; i < noOfUrls; i++) {
    
    httpGet(i);

}

function httpGet(index){
	http.get(args[index], function(res) {
		res.setEncoding('utf8');
		res.pipe(bl(function (err, data){
			if (err) {
			    return console.error(err)    
			}	

			result[index] = data.toString();

			count++
			if (count === noOfUrls) {
			    printResults()
    		}
		}))
	});
}


function printResults () {

    for (var i = 0; i < noOfUrls; i++) {
    console.log(result[i])
    }

}

