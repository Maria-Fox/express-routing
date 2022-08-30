// we are testing with Jest- we have package.json so we do not need additional configuration- ENSURE JEST IS INSTALLED

const { stringToNums, findMean, findMedian, findMode } = require("./functions");

// test via grouped functions thru describe callbacks passing in expected outcomess

describe("find mean of given integers", function () {
  // code to test group of functions here
  let sampleIntegers = [2, 4, 6, 8];

  test("returns the mean of given integers", function () {
    expect(findMean(sampleIntegers)).toEqual(5);
    expect(findMean(sampleIntegers)).not.toEqual("5");
    expect(findMean(sampleIntegers)).not.toEqual(20);
  });
});

describe("return median of given integers", function () {
  let evensampleNumbers = [1, 2, 3, 2];
  let oddSampleNumbers = [7, 8, 6];

  test("return median of given integers", function () {
    expect(findMedian(evensampleNumbers)).toEqual(2);
    expect(findMedian(oddSampleNumbers)).toEqual(7);
  });
});

describe("find mode of given integers.", function () {
  let sampleIntegers = [2, 4, 6, 8, 8, 8];

  test("return most common integers from given nums", function () {
    expect(findMode(sampleIntegers)).toEqual(8);
    expect(findMode(sampleIntegers)).not.toEqual("8");
    expect(findMode(sampleIntegers)).not.toEqual(40);
  });
});
