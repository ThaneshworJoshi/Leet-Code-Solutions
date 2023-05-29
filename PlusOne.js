// Problem

// Given a non-empty array of digits representing a non-negative integer, plus one to the integer.

// The digits are stored such that the most significant digit is at the head of the list, and each element in the array contain a single digit.

// You may assume the integer does not contain any leading zero, except the number 0 itself.

/**
 *
 * @param {numbers[]} digits
 * @returns {number[]}
 */
function plusOne(digits) {
  const digitLength = digits.length;
  const newArr = [];
  let carry = 1;

  for (let i = digitLength - 1; i >= 0; i--) {
    if (digits[i] == 9) {
      newArr.unshift(0);
      carry = 1;
    } else {
      newArr.unshift(digits[i] + carry);
      carry = 0;
    }
  }

  return newArr;
}

// const result = plusOne([1, 3, 5, 1]);
// const result = plusOne([1, 3, 5, 9]);
const result = plusOne([1, 9, 9, 0]);

console.log(result);
