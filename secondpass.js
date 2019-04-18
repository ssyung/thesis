var fs = require('fs');

var hood_counts = {};
var neighborhoods = [
  "people",
  "Queens",
  "family",
  "work",
  "Flushing",
  "kind",
  "music",
  "money",
  "Astoria",
];

fs.readdir('./txtcleaned', function(err, filenames) {
  if (err) {
    onError(err);
    return;
  }
  filenames.forEach(function(filename) {
    var data = fs.readFileSync("./txtcleaned/" + filename, 'utf8');
    // console.log("processing: " + filename);
    // console.log(Object.keys(data));
    processFile(data, filename);          // Or put the next step in a function and invoke it
  });

  // writing the csv
  let buffer = '';
  for (let filename in hood_counts) {
    for (let word in hood_counts[filename]) {
      buffer += [filename, word, hood_counts[filename][word]].toString()+"\n";
    }
  }

  fs.writeFile("./hood_counts_cleaned.csv", buffer, function(err) {
    if(err) {
      return console.log(err);
    }
    console.log("The file was saved!");
  });
});

function processFile(data, filename) {
  // collapse whitespace
  data = data.replace(/\s+/g, " ");
  // remove punctuation and space
  data = data.replace(/[^\w\s]|_/g, "");

  neighborhoods.forEach(function(hood) {
    // create a regex that does case insensitive global match for each neighborhood
    let hoodRegExp = new RegExp(hood, "ig");
    // count the matches
    let matches = data.match(hoodRegExp);
    if (matches !== null) {
      // if this is first match in file, start counting for file!
      if (hood_counts[filename] === undefined) {
        hood_counts[filename] = {};
      }
      // count number of hoods
      hood_counts[filename][hood] = matches.length;
    }
  });
}
