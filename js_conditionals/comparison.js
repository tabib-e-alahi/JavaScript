/*
    COMPARISON

 -> greater than '>'   
 -> less than '<'
 -> greaer than or equal to '>='   
 -> less than or equal to '<='
 -> equal to '==' 
 -> not equal to '!='
 
 -----------------

 -> and: &&
 -> or : ||

*/

console.log(5 > 3) // true
console.log(5 < 3) // false
console.log(5 != 3) // true

console.log(5 == 5) // true
//But here's a twist
console.log(5 == '5') // what should it print true or false?
/*
    This comparisor should print false ans number 5 and string '5' is not same thing.
    But it will print true. Problem is in the double equal "==".
    "==" checks only the value but not the value types. Here the "==" checks that
    5 and '5', both are 5  so print true, but do not check that one is number type and another one is string type. So what should we do?

    --> For that we need to use triple equal "===", this check type also. Means give identical comparison.

 */
console.log(5 === '5') // false

// same for "!=" and "!=="
console.log(10 != '10') // will give false, but should give true as number 10 and string type 10 is not same

console.log(10 !== '10') // will give true