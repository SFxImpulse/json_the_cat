const request = require("request");

const retrieveBreedDescription = (breedName, callback) => {
  request("https://api.thecatapi.com/v1/breeds/", (err, response, body) => {
    if (err) {
      console.log("There was an error:");
    }
    let breedChecker = false;
    const bodyObj = JSON.parse(body);
    for (let breed of bodyObj) {
      if (breedName === breed.name) {
        breedChecker = true;
        callback(null, breed.description);
      }
    }
    if (breedChecker === false) {
      callback("That's not a breed...", null);
    }
  });
};

module.exports = { retrieveBreedDescription };