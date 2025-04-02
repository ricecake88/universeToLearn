/* Summary: Reversing the array by swapping values from front with back until we reach the middle
 * Complexity:
 *   Time: O(n)
 *   Space: O(1) 
 */
function flip(elements) {
    let iterations = 0;

    // find if there is a middle value that does not need to be flipped
    // to calculate number of iterations needed to reverse the array
    if (elements.length % 2 === 0) {
        iterations = elements.length / 2;
    } else {
        iterations = (elements.length - 1) / 2;
    }

    let backIdx = elements.length - 1;
    // swap front with back going from outward in
    for (let i = 0; i < iterations; i++) {
        let tmp = elements[i];
        elements[i] = elements[backIdx];
        elements[backIdx] = tmp;
        backIdx--;
    }

    return elements;
}

console.log(flip([1,2]));
console.log(flip([]));
console.log(flip([-1, -2, -3]));
console.log(flip([0]));
console.log(flip([2, 3, 4, 5, 6]));
console.log(flip([2, 3, 5, 6]));