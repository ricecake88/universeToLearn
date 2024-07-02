// Write and submit a function, changeToEven, that takes an array of integers as input. It should change that array in the following way:

// If an element was originally even, it should not be changed
// If an element was NOT originally even, it should be changed to the next highest even number.

// Finally, it should return that array.

// changeToEven([1, 2, 3, 4, 5, 6]) should change the input array to [2, 2, 4, 4, 6, 6].
/* Input: array of nums
 * Summary: Modify in place; for every odd number, add 1 to make even */
function changeToEven(nums) {
    // loop through array of nums
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 !== 0) {
            // num is odd, add one to make next higher even
            nums[i] = nums[i] + 1;
        }
    }
    return nums;
}

console.log(changeToEven([1, 2, 3, 4, 5, 6]));
console.log(changeToEven([]));
console.log(changeToEven([0,88888]));
console.log(changeToEven([-11, -3, -4, -2, -1, 0,88888]));