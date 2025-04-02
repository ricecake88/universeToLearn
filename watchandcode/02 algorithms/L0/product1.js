/* input: an integer
 * summary:  multiply all numbers in sequence from 1 to n
 * complexity:
 *  time: O(n)
 *  space: O(1)
 */
function product1(number) {
    // initialize product
    let productSoFar = 1;

    // multiple integers from 1 to number
    for (let i = 1; i <= number; i++) {
        productSoFar = productSoFar * i;
    }
    return productSoFar;
}
console.log(product1(0));
console.log(product1(1));
console.log(product1(2));
console.log(product1(3));
console.log(product1(4));
console.log(product1(5));