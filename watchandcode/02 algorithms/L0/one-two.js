/* Input: array of numbers
 * Summary: For every pair of numbers, check if 2 follows 1 or 1 follows 2
 */
function oneNextToTwo(numbers) {

    // go through every number
    for (let i = 0; i < numbers.length; i++) {

        // check pair of numbers (current and next)
        if (numbers[i] === 1 && numbers[i+1] === 2 ||
            numbers[i] === 2 && numbers[i+1] === 1) {
                // 2 follows 1 or 1 follows 2                
                return true;
            }
    }
    // none found
    return false;
}

console.log(oneNextToTwo([1, 0, 2, 2, 0, 1]));
console.log(oneNextToTwo([1, 2]));
console.log(oneNextToTwo([1, 0, 2, 2, 0, 1]));
console.log(oneNextToTwo([2, 1, 0]));
console.log(oneNextToTwo([1, 0, 2]));