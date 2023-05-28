// Problem

// Given a string s consists of upper/lower-case alphabets and empty space characters ' ', return the length of last word in the string.

// If the last word does not exist, return 0.

// Note: A word is defined as a character sequence consists of non-space characters only.

function getLengthOfLastWord1(str) {
  let lastWord = "";
  let len = 0;

  if (!str) {
    return len;
  }

  for (let i = str.length - 1; i > -1; i--) {
    if (str[i] === " ") {
      return len;
    }
    len++;
  }
}

//Method 2
function getLengthOfLastWord2(str) {
  let words = str.split(" ");

  return words[words.length - 1].length;
}

//Method 3
function getLengthOfLastWord3(str) {
  let words = str.split(" ");

  return words[words.length - 1].length;
}

let result = getLengthOfLastWord2("non-space characters only23");
console.log(result);
