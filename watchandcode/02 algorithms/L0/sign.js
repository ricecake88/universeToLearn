/* Input: two numbers
 * Summary: Check if either number is zero, whether both numbers are negative or both positive,
 *          and if one of them is positive and the other is negative.
 */
function productSign(firstNumber, secondNumber) {
    if (firstNumber === 0 || secondNumber === 0) {
        // either number is 0
        return 'zero';
    } else if (firstNumber < 0 && secondNumber < 0 || firstNumber > 0 && secondNumber > 0) {
        // both numbers are positive or both numbers are negative
        return 'positive';
    } else if (firstNumber < 0 && secondNumber > 0 || firstNumber > 0 && secondNumber < 0) {
        // one number is negative and the other is positive
        return 'negative';
    }
}

console.log(productSign(0, 1)); // zero
console.log(productSign(1, 0)); // zero
console.log(productSign(0,0)); // zero
console.log(productSign(1,1)); // positive
console.log(productSign(-1,-1)); // positive
console.log(productSign(-1, 1)); // negative
console.log(productSign(1,-1)); //negative
console.log(-5*-5); // 25