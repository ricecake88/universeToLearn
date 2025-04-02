/* input: array of grades
 * summary: sum all the grades together and divide by the number of grades to find average
 * complexity:
 *  space: O(1)
 *  time: O(n)
 */
function getAverage(grades) {
    let totalSum = 0;

    // add every grade to the current total sum
    for (let i = 0; i < grades.length; i++) {
        totalSum = totalSum + grades[i];
    }

    // return the average
    return totalSum / grades.length;
}

console.log(getAverage([0,1,2,4,5,89,100]));
console.log(getAverage([0,100]));
console.log(getAverage([100,100,100,100]));