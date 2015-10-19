var fs = require('fs');

(function () {
	
	var readOrCreate = function readOrCreate(){
		var readFileOptions = {
			encoding : 'utf-8'
		};
		fs.readFile('tmp/file', readFileOptions, function (err, fileData) {
		  if (err) {
				fileData = 'File created by NodeJs';
				writeFile(fileData);
			}
			console.log(fileData);
		});
	};
	
	
	var writeFile = function writeFile(fileData){
		fs.writeFile('tmp/file', fileData, function (err) {
		  if (err) throw err;
		  console.log('File saved!');
		});
	};
	
	readOrCreate();
})();