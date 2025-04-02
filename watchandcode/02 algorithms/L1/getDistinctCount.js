/* input: array of sorted numbers
 * summary: count every change in value going from left to right in a list of numbers, which indicates
 *       the total count of distinct numbers in a sorted list
 * complexity:
 *  time: O(n)
 *  space: O(1)
 */
function getDistinctCount(sortedNumbers) {
    let distinctCount = 0;

    // go through each number in the sorted list
    for (let i = 0; i < sortedNumbers.length; i++) {

        // increase counter when the next value differs from the current
        // indicating a new distinct number because of the sorted list
        if (sortedNumbers[i] !== sortedNumbers[i + 1]) {
            distinctCount = distinctCount + 1;
        }
    }

    return distinctCount;
}

console.log(getDistinctCount([]));
console.log(getDistinctCount([1]));
console.log(getDistinctCount([1, 1]));
console.log(getDistinctCount([1, 1, 2, 3, 4, 4]));
console.log(getDistinctCount([4, 4, 3, 2, 1, 1]));