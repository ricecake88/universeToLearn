/* input: array of numbers
 * summary: numbers are in ascending order unless a number is greater than the next number
 * complexity:
 *  time: O(n)
 *  space: O(1)
 */
function isAscending(integers) {
    // for every number up to second to last
    for (let i = 0; i < integers.length - 1; i++) {
        // compare pair (current and next) of numbers
        if (integers[i] > integers[i + 1]) {
            // numbers are not ascending; number is greater than the next number
            return false;
        }
    }
    // numbers are in ascending order
    return true;
}

console.log(isAscending([-1, 0, 5, 6, -1]));
console.log(isAscending([1, 2, 3, 4, 5]));
console.log(isAscending([-5, 10, -12]));
console.log(isAscending([-1, 0, 5, 6, -1]));
console.log(isAscending([-1]));
console.log(isAscending([1, 100, 10000]));
console.log(isAscending([1, 1, 1]));