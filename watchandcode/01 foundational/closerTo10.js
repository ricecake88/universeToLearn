// Write a function that takes 2 numbers as input and returns the number that's closer to 10. If they're equally close you should return the smaller number.

// For example:

// closerTo10(1, 12) should return 12
/* Input: Two numbers
 * Summary: Return the number that has the smallest absolute difference against 10
 *          or the smaller number when the absolute differences are the same
 */
function closerTo10(numberOne, numberTwo) {
    let differenceOne = 10 - numberOne;
    let differenceTwo = 10 - numberTwo;
    if (differenceOne < 0) {
        // negative, make positive
        differenceOne = -differenceOne;
    }
    if (differenceTwo < 0) {
        // negative, make positive
        differenceTwo = -differenceTwo;
    }
    if (differenceOne === differenceTwo) {
        // both numbers are the same distance from 10
        if (numberOne < numberTwo) {
            // numberOne is smaller
            return numberOne;
        }
        // numberTwo is smaller
        return numberTwo;
    }
    if (differenceOne < differenceTwo) {
        // numberOne is closer to 10
        return numberOne;
    }
    // numberTwo is closer to 10
    return numberTwo;
}

console.log(closerTo10(1, 12)); // 12
console.log(closerTo10(-1, 0)); // 0
console.log(closerTo10(8, 12)); // 8
console.log(closerTo10(-8, -12)); // -8
console.log(closerTo10(5, 5)); // 5
console.log(closerTo10(-5, 5)); // 5
console.log(closerTo10(0, 20)); // 0
console.log(closerTo10(-10, 30)); // -10
console.log(closerTo10(0, 0)); // 0