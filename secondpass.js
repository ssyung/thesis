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
'Flushing Meadows-Corona Park',
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

var neighborhoods_lc = neighborhoods.map(x => x.toLowerCase());

fs.readdir('./txt', function(err, filenames) {
  if (err) {
    onError(err);
    return;
  }
  filenames.forEach(function(filename) {
    var data = fs.readFileSync("./txt/" + filename, 'utf8');
    data = data.replace(/\s+/g, " ");
    // console.log("processing: " + filename);
    // console.log(Object.keys(data));
    processFile(data, filename);          // Or put the next step in a function and invoke it
  });

  // writing the csv
  let buffer = '';
  for (let word in hood_counts) {
    for (let filename in hood_counts[word]) {
      buffer += [word, filename, hood_counts[word][filename]].toString()+"\n";
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
  let words = data.split(" ");
  words.forEach(function(word) {
    // remove punctuation and space
    word = word.replace(/[^\w\s]|_/g, "");
    // if statement to check if word is a stop word
    if (neighborhoods_lc.includes(word.toLowerCase())) {

      // if this word has never been seen, start counting!
      if (hood_counts[word.toLowerCase()] === undefined) {
        hood_counts[word.toLowerCase()] = {};
      }

      if (hood_counts[word.toLowerCase()][filename] === undefined) {
        hood_counts[word.toLowerCase()][filename] = 1;
      } else {
        hood_counts[word.toLowerCase()][filename] += 1;
      }
    } else {
      // do nothing. we don't care if it's not a neighborhood word.
    }
  })
}
