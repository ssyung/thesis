var fs = require('fs');

var content;

fs.readdir('./txtcleaned', function(err, filenames) {
  if (err) {
    onError(err);
    return;
  }

  let datajson = {};
  filenames.forEach(function(filename) {
    var data = fs.readFileSync("./txtcleaned/" + filename, 'utf8');

    datajson[filename] = data;
  });

  fs.writeFile("./giantdata.json", JSON.stringify(datajson, null, 2), function(err) {
    if(err) {
      return console.log(err);
    }
    console.log("The file was saved!");
  });
});
