/* input: 2 params; array of integers, an integer
 * summary: move last number # of places to the left, shifting the numbers to the right,
 *      then replacing the number with the last number at the targeted position
 *      the below assumes placesToLeft will always be between 0 and the length of number array
 * time complexity:
 *	time: O(placesToLeft)
 *	space: O(1)
 */

function moveLast(numbers, placesToLeft) {

    // save off last number
    let lastElement = numbers[numbers.length - 1];
    // calculate target position
    let indexToInsert = numbers.length - 1 - placesToLeft;

    // shift numbers to the right from the back of the list
    // up until but not including the indexToInsert
    for (let i = numbers.length - 1; i > indexToInsert; i--) {
        // replace current number with previous number
        numbers[i] = numbers[i - 1];
    }
    // now set the target position to the last number
    numbers[indexToInsert] = lastElement;

    // return modified list of numbers
    return numbers;

}

console.log(moveLast([1, 2, 3, 4], 2)); F
console.log(moveLast([1], 1));
console.log(moveLast([0], 2));
console.log(moveLast([5, 10], 2));
console.log(moveLast([1, 2, 3, 4], 3));
console.log(moveLast([1, 2, -3, 4], 3));
console.log(moveLast([1, 2, 3, 4], 0));