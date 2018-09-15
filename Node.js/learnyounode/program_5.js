
var  extentionIdentifier = '.' + process.argv[3];
// extentionIdentifier = ('.' + extentionIdentifier);

var fs = require('fs');

//console.log(extentionIdentifier);

fs.readdir(process.argv[2], function(err, items){
    for (var i=0; i<items.length; i++) {
    	if(items[i].search(extentionIdentifier) != -1 ){
    	console.log(items[i]);	
    	}
        
    }
})


