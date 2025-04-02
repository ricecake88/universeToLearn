/* input: array of sorted numbers
 * summary: number is unique if it only occurs once, meaning a different number comes both before and after it (and therefore only seen once in the sequence)
 * time complexity
 *  time: O(n)
 *  space: O(1)
 */
function getUniqueCount(sortedNumbers) {
    let uniqueCount = 0;
    let numberOfTimesSeen = 0;

    // for every number
    for (let i = 0; i < sortedNumbers.length; i++) {
        numberOfTimesSeen++;

        if (sortedNumbers[i] !== sortedNumbers[i + 1]) {
            // the last instance of a number is the only time we've seen it
            if (numberOfTimesSeen === 1) {
                uniqueCount++;
            }
            numberOfTimesSeen = 0;
        }
    }
    return uniqueCount;
}

// console.log(getUniqueCount([]));
// console.log(getUniqueCount([1,1]));
// console.log(getUniqueCount([1,2,2,3]));
// console.log(getUniqueCount([1,1,2,2,3,3]));
// console.log(getUniqueCount([1,2,3]));
// console.log(getUniqueCount([1,2,3,3]));
// console.log(getUniqueCount([1,1,2,3]));
// console.log(getUniqueCount([1,1,1,1]));

console.log(getUniqueCount([]));
console.log(getUniqueCount([1, 1]));
console.log(getUniqueCount([1, 2, 2, 3]));
console.log(getUniqueCount([1, 1, 2, 2, 3, 3]));
console.log(getUniqueCount([1, 2, 3]));
console.log(getUniqueCount([1, 2, 3, 3]));
console.log(getUniqueCount([1, 1, 2, 3]));
console.log(getUniqueCount([1, 1, 1, 1]));
console.log(getUniqueCount([2, 2, 2, 3]));
