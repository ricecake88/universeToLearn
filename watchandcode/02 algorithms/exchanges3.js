/* input: a non empty array  (valid)
 * summary: store previous value in current index, with the first index being assigned to the original last value
 * complexity:
 *  time: O(n)
 *  space: O(1) (modifying values in place)
 */
function exchanges3(values) {
    // store the value of the last index
    let last = values[values.length - 1];

    // going back to front, store the value from the previous index
    for (let i = values.length - 1; i > 0; i--) {
        values[i] = values[i - 1];
    }

    // assign first index  to original value at last index
    values[0] = last;
    return values;

}
console.log(exchanges3([0,1,2,3,4]));
console.log(exchanges3([1,3,5,2,5]));
console.log(exchanges3(['hello', 'goodbye', 'yucky']));
console.log(exchanges3([0,4]));
console.log(exchanges3([1]));