/* input: sorted array of integers
 * summary: average the middle two numbers when no clear middle (number of integers is even),
 *           otherwise return the middle number
 * complexity:
 *      time: O(1)
 *      space: O(1)
 */
function getMedian(sortedIntegers) {
    if (sortedIntegers.length % 2 === 0) {       
        // number of integers is even
        // no middle number; get middle two indexes of array
        let higherMiddleIndex = sortedIntegers.length / 2; 
        let lowerMiddleIndex = higherMiddleIndex - 1; 

        // return the average of the two middle numbers
        return (sortedIntegers[higherMiddleIndex] + sortedIntegers[lowerMiddleIndex]) / 2;
    } else {
        // number of integers is odd
        // shift to zero indexing and dividing into two even groups gives the middle index
        let index = (sortedIntegers.length - 1) / 2;

        // return the middle number
        return sortedIntegers[index];
    }
}

console.log(getMedian([-3,-2,1,4,6]));
console.log(getMedian([-5,-2,-2,5]));
console.log(getMedian([]));