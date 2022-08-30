// the query comes in as a string- we need to convert the values/ nums into integers

const GlobalError = require("./globalError");

function stringToNums(stringNumbers) {
  let result = [];

  for (let i = 0; i <= stringNumbers.length - 1; i++) {
    let number = Number(stringNumbers[i]);
    // console.log(number);

    if (Number.isNaN(number)) {
      return new Error(
        "You have submitted something other than an integer. Please resubmit using integers only."
      );
    }
    result.push(number);
  }
  return result;
}

function findMean(nums) {
  let mean = 0;
  console.log(mean);
  if (nums.length == 0) {
    return 0;
  } else {
    for (let i = 0; i < nums.length; i++) {
      mean = mean + nums[i];
      console.log(mean);
    }
    console.log(mean / nums.length);
    return mean / nums.length;
  }
  return mean / nums.length;
}

function findMedian(nums) {
  let sortedNums = nums.sort();
  let median = 0;

  let midNum = Math.floor(sortedNums.length / 2);

  if (midNum % 2 === 0) {
    return (nums[midNum] + nums[midNum - 1]) / 2;
  } else {
    return (median = nums[midNum]);
  }
}

function findMode(nums) {
  const counts = {};
  let maxCount = 0;
  let maxKey;

  for (let i = 0; i < nums.length; i++) {
    const key = nums[i];
    // assigning count to key - adding 1 if it already exists
    const count = (counts[key] = (counts[key] || 0) + 1);

    if (count > maxCount) {
      maxCount = count;
      maxKey = key;
    }
  }
  // Return the highest keys we've seen
  return maxKey;
}

// exports
module.exports = {
  stringToNums: stringToNums,
  findMean: findMean,
  findMedian: findMedian,
  findMode: findMode,
};
