const { retrieveBreedDescription } = require("./breedFetcher");

const breedName = process.argv[2];

retrieveBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log("Error fetch details:", error);
  } else {
    console.log(desc);
  }
});