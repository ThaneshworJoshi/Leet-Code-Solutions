// Implement strStr().

// Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

// Example 1:

// Input: haystack = "hello", needle = "ll"
// Output: 2

// Example 2:

// Input: haystack = "aaaaa", needle = "bba"
// Output: -1

function strStr(haystack, needle) {
  return haystack.indexOf(needle);
}

let needleIndex = strStr("bananaand", "an");
console.log(needleIndex);
