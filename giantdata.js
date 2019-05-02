var fs = require('fs');
const { convertArrayToCSV } = require('convert-array-to-csv');
const converter = require('convert-array-to-csv');

var content;

fs.readdir('./txtcleaned', function(err, filenames) {
  if (err) {
    onError(err);
    return;
  }

  let datajson = {};
  let arr = [];
  filenames.forEach(function(filename) {
    var data = fs.readFileSync("./txtcleaned/" + filename, 'utf8');
    data = data.replace(/\s+/gm, " ");
    datajson[filename] = data;
    arr.push([filename, data]);
  });

  fs.writeFile("./giantdata.json", JSON.stringify(datajson, null, 2), function(err) {
    if(err) {
      return console.log(err);
    }
    console.log("The file giantdata.json was saved!");
  });

  fs.writeFile("./giantdata.csv", convertArrayToCSV(arr), function(err) {
    if(err) {
      return console.log(err);
    }
    console.log("The file giantdata.csv was saved!");
  });
});
