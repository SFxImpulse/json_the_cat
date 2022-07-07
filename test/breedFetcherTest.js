const { retrieveBreedDescription } = require("../breedFetcher");
const { assert } = require("chai");

describe("fetchBreedDescription", () => {
  it("returns a string description for a valid breed, via callback.", (done) => {
    retrieveBreedDescription("Siberian", (err, desc) => {
      assert.equal(err, null);
      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";
      assert.equal(expectedDesc, desc.trim());
      done();
    });
  });
  it("returns an error when an invalid, non-existant breed is passed in.", (done) => {
    retrieveBreedDescription("Siberia", (err, desc) => {
      assert.equal(err, "That's not a breed...");
      const expectedDesc = null;
      assert.equal(expectedDesc, desc);
      done();
    });
  });
});