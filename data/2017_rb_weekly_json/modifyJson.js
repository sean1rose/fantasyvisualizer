var fs = require('fs');
var fileName = './data (2).json';
var file = require(fileName);

for (var key in file) {
  console.log('file[key] - ', file[key]);
  file[file[key]["Col Player 1"]] = file[key];
  delete file[key];
}

fs.writeFile(fileName, JSON.stringify(file, null, 2), function (err) {
  if (err) return console.log(err);
  console.log(JSON.stringify(file));
  console.log('writing to ' + fileName);
});