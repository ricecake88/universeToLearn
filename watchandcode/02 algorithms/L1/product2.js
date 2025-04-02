/* input: a positive number
 * summary: determine if x equals to the factorial of x number and below.
 * complexity:
 *  space: O(1)
 *  time: O(x) for small values, O(log x) for larger values
 */
function product2(x) {
    let product = 1;

    // start iterating from 1 since 0! is 1 and up to and including x
    for (let i = 1; i <= x; i++) {
        product = i * product;
        // success, product is exactly x
        if (product === x) {
            return true;
        }
        // product is already larger than x, stop calculating as there is no match
        if (product > x) {
            return false;
        }

    }
    return false;
}
console.log(product2(1)); // 1
console.log(product2(2)); // 2
console.log(product2(3)); // 3
console.log(product2(16)); // 4
console.log(product2(120)); //5
console.log(product2(40)); // 5
console.log(product2(479001600)); // 12