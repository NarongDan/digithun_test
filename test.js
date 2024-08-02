// functions.js

const Max = (arr) => {
  if (arr.length === 0) {
    throw new Error("This is not Array");
  }

  if (arr.length === 1) {
    return arr[0];
  }

  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
};

const secondMax = (arr) => {
  let max = arr[0];
  let secondMax = arr[1];

  // find which one is the max
  if (secondMax > max) {
    [max, secondMax] = [secondMax, max];
  }

  // loop

  for (let i = 2; i < arr.length; i++) {
    // if the new one is higher than the current max, shift the max to second, and replace the max one

    if (arr[i] > max) {
      secondMax = max;
      max = arr[i];
    } else if (arr[i] > secondMax && arr[i] !== max) {
      secondMax = arr[i];
    }
  }

  if (max === secondMax) {
    return max;
  }

  return secondMax;
};

const findHighSum = (arr, k) => {
  if (arr.length < k) {
    throw new Error("Array length should > or = K");
  }

  let max = 0;
  for (let i = 0; i < k; i++) {
    max += arr[i];
  }

  for (let i = 1; i <= arr.length - k; i++) {
    let sum = 0;
    for (let j = 0; j < k; j++) {
      sum += arr[i + j];
    }
    max = Math.max(max, sum);
  }

  return max;
};

module.exports = { Max, secondMax, findHighSum };
