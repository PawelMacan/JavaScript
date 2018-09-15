var fs = require('fs');


module.exports = function(fileDirectory, extentionIdentifier, callback){
	fs.readdir(fileDirectory, function(err, items){

    extentionIdentifier = '.' + extentionIdentifier;
	
    if(err){
			return callback(err);
		}

    items = items.filter(function(elem){
        return elem.includes(extentionIdentifier)
    })

    // for (var i=0; i<fileDirectory.length; i++) {
    // 	if(fileDirectory[i].search(extentionIdentifier) != -1 ){
    // 		items = fileDirectory[i];
    // 	    console.log(fileDirectory[i]);
    // 	   return items	
    // 	}
        
    // }

    callback(null, items )
})
}

