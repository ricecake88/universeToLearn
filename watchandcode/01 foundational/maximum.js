/* Input: array of numbers
 * Summary: check if each number is larger than the current greatest number,
*        and set as new greatest number if it is; undefined when empty array */
function getMax(numbers) {
    // initialize to first number
    let maxSoFar = numbers[0];
    // loop through each number
    for (let i = 1; i < numbers.length; i++) {
        // check if number greater than max
        if (numbers[i] > maxSoFar) {
            // if greater, set current number to max
            maxSoFar = numbers[i];
        }
    }
    return maxSoFar;
}
console.log(getMax([15, 3, 2, 4])); // first number is the largest
console.log(getMax([1, 5, 2, 3, 4])); // second number is the largest
console.log(getMax([1, 5, 2, 3, 12])); // last number is the largest
console.log(getMax([]));
console.log(getMax([0]));