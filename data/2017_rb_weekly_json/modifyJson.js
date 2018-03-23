var fs = require('fs');
var fileName = './data (2).json';
// var fileName = './week_17.json';
var file = require(fileName);

for (var key in file) {
  //   console.log('file[key] - ', file[key]);
  // calculate rz opp (sum of rush and targets)
  file[key]["RZ Opp In20"] = file[key]["Rush RZ In20"] + file[key]["Tar RZ In20"];
  file[key]["RZ Opp In10"] = file[key]["Rush RZ In10"] + file[key]["Tar RZ In10"];
  file[key]["RZ Opp In5"] = file[key]["Rush RZ In5"] + file[key]["Tar RZ In5"];
  
  // this takes player name and makes it the index of each entry
  file[file[key]["Col Player 1"]] = file[key];

  // this takes the team name and makes it the index of each entry
  //   file[file[key]["Col Teamname"]] = file[key];
  
  // delete old key...
  delete file[key];
}


fs.writeFile(fileName, JSON.stringify(file, null, 2), function (err) {
  if (err) return console.log(err);
  console.log(JSON.stringify(file));
  console.log('writing to ' + fileName);
});