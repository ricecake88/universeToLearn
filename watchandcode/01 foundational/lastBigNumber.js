/* Input: array of numbers, assume one will always be bigger than 10
 * Summary: Check each number from the end towards the beginning
 *          and return number when greater than 10 */
function lastBigNumber(numbers) {
    // check each number starting from the back of the array
    for (let i = numbers.length - 1; i >= 0; i--) {
        if (numbers[i] > 10) {
            // number is greater than 10, return
            return numbers[i];
        }
    }
}
console.log(lastBigNumber([3, 12, 11, 4, -15, 12]));