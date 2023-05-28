// Problem
// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Note that an empty string is also considered valid.

// Example 1:

// Input: "()"
// Output: true
// Example 2:

// Input: "()[]{}"
// Output: true
// Example 3:

// Input: "(]"
// Output: false
// Example 4:

// Input: "([)]"
// Output: false
// Example 5:

// Input: "{[]}"
// Output: true

function findMatchingParentheses(parentheses) {
  if (parentheses === "}") {
    return "{";
  } else if (parentheses === "]") {
    return "[";
  } else if (parentheses === ")") {
    return "(";
  }
  return '';
}

function isValidParentheses1(str) {
  if (str === "") {
    return true;
  }

  let opening = "({[";
  let closing = ")}]";

  const stack = [];

  for (let i = 0; i < str.length; i++) {
    if ((i === 0 && closing.includes(str[i])) || str.length % 2 !== 0) {
      return false;
    }

    if (opening.includes(str[i])) {
      stack.push(str[i]);
    } else {
        let openingParantheses = findMatchingParentheses(str[i]);
        let pop = stack.pop();
      if(pop === openingParantheses){
        continue;
      }else {
        return false;
      }      
    }
  }

  return true;
}




function isValidParentheses(str) {
    let stack = [];
    let length = str.length;
    let map = {
        '(' : ')',
        '{' : '}',
        '[' : ']',
    }

    for(let i = 0; i < length; i++) {
        if(stack.length > 0 && map[stack[stack.length -1]] === str[i]){
            stack.pop()
        }else{
            stack.push(str[i])
        }
    }

    return stack.length === 0 ? true : false;
  }
  
console.log(isValidParentheses("()"));
console.log(isValidParentheses('[([]())]'));
console.log(isValidParentheses('{[]}'));
console.log(isValidParentheses('()}'));
console.log(isValidParentheses(''));
