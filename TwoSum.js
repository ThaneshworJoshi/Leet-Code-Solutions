// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Example:

// Given nums = [2, 7, 11, 15], target = 9,
// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

function twoSum1(nums, target) {
  let len = nums.length;

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; i++) {
        if(nums[i] + nums[j] === target){
            return [j, i];
        }
    }

  }

  return [-1, -1];
}

function twoSum2(nums, target) {
  const hash = {};
  const len = nums.length;

  for (let i = 0; i < len; i++) {
    if (nums[i] in hash) {
      return [hash[nums[i]], i];
    }
    hash[target - nums[i]] = i;
  }

  return [-1, -1];
}

let result = twoSum1([2, 7, 11, 15], 9);

console.log(result);
