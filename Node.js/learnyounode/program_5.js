
var  extentionIdentifier = '.' + process.argv[3];

var fs = require('fs');



fs.readdir(process.argv[2], function(err, items){
    for (var i=0; i<items.length; i++) {
    	if(items[i].search(extentionIdentifier) != -1 ){
    	console.log(items[i]);	
    	}
        
    }
})


