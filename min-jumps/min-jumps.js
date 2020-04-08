'use strict';

const minJumps = (arr, counter = 0) => {
  counter++;
  if (arr[0] >= arr.length - 1) return counter;

  const subArrayLength = arr[0];
  let subArray = arr.slice(1, subArrayLength + 1);
  const scoreArray = subArray.map((i, index) => {
    return i - (subArrayLength - index + 1);
  });

  const highestScore = Math.max(...scoreArray);
  const indexOfHighest = scoreArray.indexOf(highestScore);
  return minJumps(arr.slice(indexOfHighest + 1), counter);
};

module.exports = minJumps;

//scoring: subarray value - (subarray length - subarray index + 1)
