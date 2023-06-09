// Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You may assume no duplicates in the array.

// Example 1:

// Input: [1,3,5,6], 5
// Output: 2

// Example 2:

// Input: [1,3,5,6], 2
// Output: 1

// Example 3:

// Input: [1,3,5,6], 7
// Output: 4

// Example 4:

// Input: [1,3,5,6], 0
// Output: 0

function searchInsert(nums, target) {
  const numsLength = nums.length;
  let left = 0;
  let right = numsLength - 1;
  let mid = 0;

  if (!numsLength) {
    return 0;
  }

  while (left <= right) {
    mid = Math.floor((left + right) / 2);

    if (nums[mid] > target) {
      right = mid - 1;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      return mid;
    }
  }

  return nums[mid] > target ? mid : mid + 1;
}

const result = searchInsert([1, 2, 3, 4], 1);
console.log(result);
