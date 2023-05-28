// Problem

// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

// Example:

// Input: [-2,1,-3,4,-1,2,1,-5,4],
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.

// Method 1
function maxSubArray(arr) {
  let max = arr[0];

  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = i; j < arr.length; j++) {
      sum = sum + arr[j];

      if (sum > max) {
        max = sum;
      }
    }
  }
  return max;
}

// Method 2
function maxSubArray2(arr) {
  let len = arr.length;
  let max = Number.MIN_SAFE_INTEGER;
  let before = 0;
  let now = 0;

  for (let i = 0; i < len; i++) {
    now = Math.max(before + arr[i], arr[i]);
    max = Math.max(now, max);

    before = now;
  }

  return max;
}

let result = maxSubArray2([-2, 1, -3, 4, -1, 2, 1, -5, 4]);

console.log(result);
