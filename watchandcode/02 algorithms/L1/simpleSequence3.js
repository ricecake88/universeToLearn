/* 
 * Summary: calculate the nth number by summing the last three numbers in sequence
 * Complexity:
 *  Time: O(n) 
 *  Space: O(n)
 */
function sequence(n) {
    let sequence = [0,2,3];

    // if nth number in sequence was already calculated, return value
    if (sequence[n-1]) {
        return sequence[n-1];
    }

    for (i = 3; i < n; i++) {
        sequence[i] = sequence[i - 1] + sequence[i - 2] + sequence[i - 3];
    }
    return sequence[n - 1];
}

/* 
 * Summary: calculate the nth number by summing the last three numbers in sequence
 * Complexity:
 *  Time: O(n) 
 *  Space: O(1)
 */
function simpleSequence3(n) {

    // we know the first three numbers in the sequence, just return
    if (n === 1) {
        return 0;
    }
    if (n === 2) {
        return 2;
    }
    if (n === 3) {
        return 3;
    }

    let first = 0;
    let second = 2;
    let third = 3;
    let nextInSequence = 0;

    // sum and shift the previous three numbers to
    // calculate the next number in the squence
    for (let i = 3; i < n; i++) {
        nextInSequence = first + second + third;
        first = second;
        second = third;
        third = nextInSequence;
    }
    return nextInSequence;
}

console.log(sequence(1));
console.log(sequence(2));
console.log(sequence(3));
console.log(sequence(4));
console.log(sequence(5));
console.log(sequence(6));
console.log(sequence(7));

console.log(simpleSequence3(1));
console.log(simpleSequence3(2));
console.log(simpleSequence3(3));
console.log(simpleSequence3(4));
console.log(simpleSequence3(5));
console.log(simpleSequence3(6));
console.log(simpleSequence3(7));
console.log(simpleSequence3(8));