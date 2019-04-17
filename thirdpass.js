var fs = require('fs');

var locs = [];

fs.readdir('./txt', function(err, filenames) {
  if (err) {
    onError(err);
    return;
  }
  filenames.forEach(function(filename) {
    var data = fs.readFileSync("./txt/" + filename, 'utf8');
    processFile(data, filename);
  });

  // writing the csv
  let buffer = '';
  for (let hood of locs) {
    buffer += hood.filename + ',"' + hood.hood + "\"\n";
  }
  fs.writeFile("./hood_loc.csv", buffer, function(err) {
    if(err) {
      return console.log(err);
    }
    console.log("The file was saved!");
  });
});

function processFile(data, filename) {
  // if data.contains(/Waldheim neighborhood/)
  let matches = data.match(/^[\t ]*neighborhood[\t ]*(\(if any\))?[\t ]*:(.*)$/gim);
  if (matches) {
    for (let hood of matches) {
      // ignore Waldheim neighborhood
      if (hood.includes("Waldheim neighborhood")) {
        // do nothing
      } else {
        let parts = hood.split(/:\s*/);
        if (parts[1]) {
          locs.push({
            filename: filename,
            hood: parts[1]
          })
        }
      }
    }

    // console.log(filename, matches);
  }
}
