const args = process.argv.slice(2);
const request = require("request");

const retrieveBreedDescription = () => {
  request("https://api.thecatapi.com/v1/breeds/", (err, response, body) => {
    if (err) {
      console.log("There was an error:");
    }
    let breedChecker = false;
    const bodyObj = JSON.parse(body);
    for (let breed of bodyObj) {
      if (args[0] === breed.name) {
        console.log(breed.name);
        console.log(breed.description);
        breedChecker = true;
      }
    }
    if (breedChecker === false) {
      console.log("That's not a breed");
    }
  });
};

retrieveBreedDescription(args);