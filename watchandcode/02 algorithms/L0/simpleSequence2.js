/* input: an integer
 * summary: Sum odd numbers starting at 1 up to n times
 * complexity:
 *  time: O(n)
 *  space: O(1)
 */
function simpleSequence4(n) {
    let sumSoFar = 0;
    let numberToAdd = 1;

    // for up to n times, sum the next odd number
    for (let count = 0; count < n; count++) {
        // calculate the sum
        sumSoFar = sumSoFar + numberToAdd;

        // get the next odd number in sequence
        numberToAdd = numberToAdd + 2;
    }

    // return the sum
    return sumSoFar;
}

function simpleSequence3(n) {
    let sumSoFar = 0;
    let count = 0;
    let numberToAdd = 1;

    while(count < n) {
        sumSoFar = sumSoFar + numberToAdd;
        numberToAdd = numberToAdd + 2;
        count++;
    }

    // return the sum
    return sumSoFar;
}



console.log(simpleSequence2(1));
console.log(simpleSequence2(2));
console.log(simpleSequence2(3));
console.log(simpleSequence2(4));
console.log(simpleSequence2(5));
console.log(simpleSequence2(6));

console.log(simpleSequence3(1));
console.log(simpleSequence3(2));
console.log(simpleSequence3(3));
console.log(simpleSequence3(4));
console.log(simpleSequence3(5));
console.log(simpleSequence3(6));

console.log(simpleSequence4(1));
console.log(simpleSequence4(2));
console.log(simpleSequence4(3));
console.log(simpleSequence4(4));
console.log(simpleSequence4(5));
console.log(simpleSequence4(6));