/*
* Summary: Sum y groups of x making sure
*           y remains positive but account for sum
*           by saving off polarity if negative
* Complexity:
*   Time: O(y)
*   Space: O(1)
*/
function simulatedStar(x, y) {
    let total = 0;
    let yIsNegative = false;

    // save off the polarity as y is also used for
    // summing multiples of x and therefore can't be negative
    if (y < 0) {
        yIsNegative = true;
        y = -y;
    }

    // sum y groups of x
    for (let i = 0; i < y; i++) {
        total += x;
    }

    // if y is negative apply to result
    if (yIsNegative) {
        return -total;
    }

    return total;
}

console.log(simulatedStar(0, 0)); // 0
console.log(simulatedStar(0, 1)); // 0
console.log(simulatedStar(1, 0)); // 0
console.log(simulatedStar(1, 1)); // 1
console.log(simulatedStar(3, 5)); // 15
console.log(simulatedStar(-1, -1)); // 1
console.log(simulatedStar(-2, -2)); // 4
console.log(simulatedStar(-5, 4)); // -20
console.log(simulatedStar(5, -4)); // -20
console.log(simulatedStar(100, 100)); // 10000