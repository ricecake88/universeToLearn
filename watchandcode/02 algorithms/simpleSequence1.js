/* input: number
 * summary: starting at one, add every number in the sequence including the last number in the sequence
 * complexity:
 *  time: O(n)
 *  space: O(1)
 */
function simpleSequence1(lastNumberInSequence) {
    let sum = 0;

    // starting with 1, sum ascending numbers together including the last number in sequence
    for (let i = 1; i <= lastNumberInSequence; i++) {
        sum = sum + i;
    }
    return sum;
}
console.log(simpleSequence(0));
console.log(simpleSequence(1));
console.log(simpleSequence(2));
console.log(simpleSequence(3));
console.log(simpleSequence(4));