var fs = require('fs');

var hood_counts = {};
var neighborhoods = [
'Arverne',
'Astoria',
'Auburndale',
'Baisley Park',
'Bayside',
'Bayswater',
'Belle Harbor',
'Bellerose',
'Briarwood',
'Broad Channel',
'Cambria Heights',
'College Point',
'Corona',
'Douglaston',
'East Elmhurst',
'Elmhurst',
'Far Rockaway',
'Floral Park',
'Flushing',
'Flushing Meadows Corona Park',
'Forest Hills',
'Forest Hills Gardens',
'Fresh Meadows',
'Glen Oaks',
'Glendale',
'Hillcrest',
'Hollis',
'Holliswood',
'Howard Beach',
'Hunters Point',
'Jackson Heights',
'Jamaica',
'Jamaica Estates',
'Jamaica Hill',
'Kew Gardens',
'Kew Gardens Hills',
'Laurelton',
'Little Neck',
'Long Island City',
'Malba',
'Maspeth',
'Middle Village',
'Neponsit',
'Oakland Gardens',
'Ozone Park',
'Queens Village',
'Queensboro Hill',
'Ravenswood',
'Rego Park',
'Richmond Hill',
'Ridgewood',
'Rockaway Beach',
'Rockaway Park',
'Rockaway Point',
'Rosedale',
'Saint Albans',
'South Jamaica',
'South Ozone Park',
'Springfield Gardens',
'Steinway',
'Sunnyside',
'Whitestone',
'Woodhaven',
'Woodside',
];

fs.readdir('./txt', function(err, filenames) {
  if (err) {
    onError(err);
    return;
  }
  filenames.forEach(function(filename) {
    var data = fs.readFileSync("./txt/" + filename, 'utf8');
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

  fs.writeFile("./hood_counts.csv", buffer, function(err) {
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
