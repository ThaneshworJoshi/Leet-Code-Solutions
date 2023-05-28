/**
 * Write a function to find the longest common prefix string amongst an array of strings.
 * If there is no common prefix, return an empty string "".
 */

/**
 * Example 1:

    Input: ["flower","flow","flight"]
    Output: "fl"

    Example 2:

    Input: ["dog","racecar","car"]
    Output: ""
    Explanation: There is no common prefix among the input strings.

 */

function longestCommonPrefix(strs) {
  const sortedStr = strs.sort((a, b) => a.length - b.length);
  console.log(sortedStr);

  let firstStr = sortedStr[0];
  let commonPrefix = "";
  let isSame = true;

  for (let i = 0; i < firstStr.length; i++) {
    for (let j = 0; j < sortedStr.length; j++) {
      if (firstStr[i] !== sortedStr[j][i]) {
        isSame = false;
      }
    }
    if (isSame) {
      commonPrefix += firstStr[i];
    }
  }

  console.log(commonPrefix);
}

longestCommonPrefix(["flower1111", "flow3", "flight22"]);
