/* Summary: shift numbers to the right from the back of a list to the front of the list
 *  until the number to be inserted is greater than the previous number
 * Complexity:
 *  Space: O(1)
 *  Time: O(z) where z = n - i, n is the greatest possible of times we would iterate
 *      through, but most of the time, it would only be until we reach i, when x > n[i - 1],
 *      hence n - i;
 */ 
function insert(x, numbers) {

    // set index to the back of list
    let i = numbers.length;

    console.log(i);
    let count = 0;
    // shift each number in list to the right while
    // number to be inserted is smaller than previous number
    while (x < numbers[i - 1]) {
        numbers[i] = numbers[i - 1];
        count++;
        i--;
    }

    console.log(i);
    console.log(count);
    // number is greater than value to its left,
    // insert at current position
    numbers[i] = x;
    return numbers;
}

console.log(insert(0, [1,2,3,4,5]));
console.log(insert(6, [1,2,3,4,5]));
console.log(insert(-5, [1,2,3,4,5]));
console.log(insert(-5, [-6,-5,0,4]));
console.log(insert(5, []));