/* Input: an integer
* Summary: Check if number is divisible by 2  */
function even(num) {
    return num % 2 === 0
}

/* Input: an array of integers
 *
 * Summary: Check every number until we run into a number that isn't even */
function allEven(nums) {
    for (let i = 0; i < nums.length; i++) {
        if (!even(nums[i])) {
            // uh oh, there is an odd number
            return false;
        };
    }
    // all good, all numbers are even
    return true;
}

function allEven2(nums) {
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        if (even(nums[i])) {
            count++;
        }
    }

    if (count === nums.length) {
        return true;
    } else {
        return false;
    }
}

console.log(allEven2([2,4,6,7]));
console.log(allEven2([2,4,6]));
console.log(even(2));
console.log(even(3));