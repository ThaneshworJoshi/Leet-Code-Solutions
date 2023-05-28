// Problem

// Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

// Example:

// Input: 121
// Output: true

// Input: -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.



// Solution 1

/**
 * @param {number} num
 * @return {boolean}
 */

function isPalindrome1(num) {
    let tempNum = num + '';
    let numLength = tempNum.length;
    let isPal = true;

    for(let i = 0; i < numLength / 2; i++){
        if(tempNum[i] === tempNum[numLength - i-1]){
            console.log(tempNum[i] , '----', tempNum[numLength -i-1])
            
        }else {
            isPal = false;
        }
    }
    return isPal;
}


// Solution 2

function isPalindrome2(num) {
    let rev = num.toString().split('').reverse().join('');
    if (num == rev) {
        return true;
    }
    console.log(rev, num)
    return false;
}

// Solution 3
function isPalindrome3(num) {

    if(num < 0) {
        return false;
    }

    let tempNum = num;
    let rev = 0;

    while(tempNum !== 0) {
        rev = ( rev * 10) + (tempNum % 10);
        console.log(rev)
        tempNum  = Math.floor(tempNum / 10);
    }
    
    return rev === num

}


const result = isPalindrome3(121121)


console.log(result)
