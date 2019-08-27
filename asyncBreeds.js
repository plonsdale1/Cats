const fs = require('fs');


const breedDetailsFromFile = function(breed, callback) {
  console.log('breedDetailsFromFile: Calling readFile...');
  const filename = `./data/${breed}.txt`;
  fs.readFile(filename, 'utf8', (error, data) => {
    // ISSUE: Returning from inner callback function, not our main function.
    console.log('Callback: I have the data!')
    if (!error) callback(data); 
  });
  // ISSUE: Attempting to return data out here will also not work.
  //        Currently not returning anything from here, so this function returns undefined.
}

// we try to get the return value

module.exports = breedDetailsFromFile;