// GCD
// 4 , 6 = 2
// 6 , 3 = 3

// Method 1
const  GCD = (a, b) => {
    
    while(a !== b){
        if(a > b){
            a -= b
            
        }else {
            b -= a;
        }
    }
    
    return a;
}

// Method 2
const  GCD1 = (a, b) => {
    let gcd = b;
    
    while(b!==0){
        gcd = b;
        b = a % b;
        a = gcd
    }
    return gcd;
    
}

let result = GCD1(22,11)
console.log(result)