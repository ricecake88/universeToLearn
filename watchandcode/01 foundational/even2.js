/* Input: array of numbers
 * Summary: Check every number and increment counter when even */
function evenCount(nums) {
    // initialize counter
    let evenCounter = 0;
    // check every number
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 === 0) {
            // number is even, increment counter
            evenCounter++;
        }
    }
    return evenCounter;
}

/* Input: number
 * Summary: Starting with 2, create a num length sequential ascending list of even numbers 
 *          where the value is the index position offset by 1 and multipled by 2*/
function firstEvens(num) {
    let arrayOfEvens = [];
    for (let i = 0; i < num; i++) {
        // shift index by one and multiply by 2 to initialize first element to 2
        // set subsequent values as a multiple of 2
       arrayOfEvens[i] = (i+1)*2;
    }
    return arrayOfEvens;
}

console.log(evenCount([]));
console.log(evenCount([1,3,5,7]));
console.log(evenCount([2,3,5,7,2,4]));
console.log(firstEvens(0));
console.log(firstEvens(1));
console.log(firstEvens(3));
console.log(firstEvens(10));