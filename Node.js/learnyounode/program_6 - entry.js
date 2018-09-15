var importedModule = require('./program_6 - module.js');

var callback = function(err, items){
	if(err){
		return console.error(err);
	}

	items.forEach(function(elem){
		console.log(elem);

	})
}

importedModule(process.argv[2], process.argv[3], callback)