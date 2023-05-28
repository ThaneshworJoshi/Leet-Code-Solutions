//Given a 32-bit signed integer, reverse digits of an integer.

// Example 1:

// Input: 123
// Output: 321


// Example 2:

// Input: -123
// Output: -321

// Example 3:

// Input: 120
// Output: 21


function reverseInterger(number) {
    const INT_MAX = 2147483647;
    const INT_MIN = - INT_MAX - 1;

    let rev = 0;
    let tempNum = number;

    while(tempNum !== 0){

        rev = (rev * 10) + tempNum % 10;
        
        tempNum = tempNum > 0 ?  Math.floor(tempNum / 10) : Math.ceil(tempNum / 10);

        if(rev > INT_MAX || rev < INT_MIN) {
            return 0;
        }
    }

    return rev;

}

console.log(reverseInterger(0123))

