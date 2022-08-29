// Express routing ecercise

const express = require("express");
const GlobalError = require("./globalError");
const { stringToNums, findMean, findMedian, findMode } = require("./functions");
const req = require("express/lib/request");

// initialize the server, naming it app
const app = express();

// use query string for ex: /mean?nums=1,3,5,7.
app.get("/mean", function (req, res, next) {
  // if no key/ value query was found return error
  if (!req.query.nums) {
    throw new GlobalError(
      "Please submit a query string with a key of 'nums'. Ex:/mean?nums=1,3,5,7.",
      400
    );
  }

  // grab query, comes in as string so we have to split the string values
  let reqQuery = req.query;
  let stringNumbers = reqQuery.nums.split(",");

  // returns nums array || error message #'s were not passed in
  let numsResp = stringToNums(stringNumbers);
  console.log(` nums resp = ${numsResp}`);

  // if value thrown into query is NaN
  if (numsResp instanceof Error) {
    throw new GlobalError(numsResp.message);
  }

  let meanValue = findMean(numsResp);
  let finalResult = { operation: "mean", value: meanValue };

  return res.json(finalResult);
});

// ex: /median?nums=1,3,5,7.
app.get("/median", function (req, res, next) {
  // arrange numbers in numerical order, find mid-point

  if (!req.query.nums) {
    throw new GlobalError(
      "Please submit a query string with a key of 'nums'. Ex:/median?nums=1,3,5,7.",
      400
    );
  }

  let stringNums = req.query.nums.split(",");
  let numsResp = stringToNums(stringNums);

  if (numsResp instanceof Error) {
    throw new GlobalError(numsResp.message);
  }

  let median = findMedian(numsResp);
  let finalResult = { operation: "median", value: median };

  return res.json(finalResult);
});

app.get("/mode", function (req, res, next) {
  //most common in nums

  if (!req.query.nums) {
    throw new GlobalError(
      "Please submit a query string with a key of 'nums'. Ex:/mode?nums=1,3,5,7.",
      400
    );
  }

  let stringNums = req.query.nums.split(",");
  let numsResp = stringToNums(stringNums);

  if (numsResp instanceof Error) {
    throw new GlobalError(numsResp.message);
  }

  let mode = findMode(numsResp);
  let finalResult = { operation: "mode", value: mode };

  return res.json(finalResult);
});

// general error handing- must pass in error and next

app.use(function (req, res, next) {
  const err = new ExpressError("Not Found", 404);
  console.log(`first error route hit ${err}`);

  // pass the error to the next error handler
  return next(err);
});

app.use(function (err, req, res, next) {
  let status = err.status || 500;
  let message = err.message;

  //must send a return value assign status + message you want passed in
  return res.status(status).json((obj = { status, message }));
});

// ensure the server is listening/setup is working. binds server to port

app.listen(5000, function () {
  console.log("Server is running on port 5000.");
});
