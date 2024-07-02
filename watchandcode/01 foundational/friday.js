/* Input: array of numbers
 * Summary: For every number, mark when we see a 2, and if a 1 happens after, return false
 */
function areOnesBeforeTwos(numbers) {
    let twoSeen = false;
    // loop over each number
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === 2) {
            // mark that we've seen a 2
            twoSeen = true;
        }
        if (twoSeen && numbers[i] === 1) {
            // one is seen after two has been seen
            return false;
        }
    }
    // all 1s are before 2s
    return true;

}

/* Input: array of numbers
 * Summary
 */
function moveOnesBeforeTwos(numbers) {
    let newArrayNumbers = [];
    let numOnes = 0;
    let numTwos = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === 1) {
            numOnes++;
            numbers[i] = null;
        }
        if (numbers[i] === 2) {
            numTwos++;
            numbers[i] = null;
        }
    }

    for (let i = 0; i < numOnes; i++) {
        newArrayNumbers[i] = 1;
    }
    for (let i = 0; i < numTwos; i++) {
        newArrayNumbers[newArrayNumbers.length] = 2;
    }
    for (let i = 0; i < numbers.length; i++) { // check this
        if (numbers[i] !== null) {
            newArrayNumbers[newArrayNumbers.length] = numbers[i];
        }
    }
    return newArrayNumbers;

}


/* Input: array of numbers
 * Summary
 */
function moveOnesBeforeTwos2(numbers) {
    let locationOfTwo = 0;
    let twoSeen = false;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === 2) {
            locationOfTwo = i;
            twoSeen = true;
        } 
        if (twoSeen && numbers[i] === 1) {
            numbers[locationOfTwo] = 1;
            numbers[i] = 2;
            locationOfTwo = i;
        }
    }
    return numbers;
}


console.log(areOnesBeforeTwos([1,2,1])); // false
console.log(areOnesBeforeTwos([1,1,2])); // true
console.log(areOnesBeforeTwos([1,1,3,4,2])); // true
console.log(areOnesBeforeTwos([1,1,3,4,2,5,1])); // false
console.log(moveOnesBeforeTwos([2,1,1])); // 1, 1, 2
console.log(moveOnesBeforeTwos([1, 2,1,1,3,1])); // 1,1,1,1,2,3
console.log(moveOnesBeforeTwos([4,3,1, 2,1,1,3,1,5])); // 1,1,1,1,2,4,3,3,5
console.log(moveOnesBeforeTwos2([2,1,1])); // 1, 1, 2
console.log(moveOnesBeforeTwos2([1, 2,1,1,3,1])); // 1,1,1,1,3,2
console.log(moveOnesBeforeTwos2([4,3,1, 2,1,1,3,1,5])); // 4, 3, 1,1,1,1,3,2,5