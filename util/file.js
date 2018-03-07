const fs = require('fs');

function getFileContent(fileName) {
  return new Promise((resolve, reject) => {
      fs.readFile(fileName, 'utf-8', function (err, data) {
    	if (err) {
        	reject(err);
    	} else {
        	resolve(data);
    	}
  	});
  })
}
module.exports  = getFileContent