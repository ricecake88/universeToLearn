/* Input: array of numbers
 */
function superNumber(numbers) {
    // create object with count
    let numberCounts = {};
    let uniqueNumbers = [];
    let superNumber = null;
    // count up the number of times a number appears
    // and create a list of unique numbers
    for (let i = 0; i < numbers.length; i++) {
        if (numberCounts(numbers[i])) {
            numberCounts[numbers[i]]++;
        } else {
            numberCounts[numbers[i]] = 1;
            uniqueNumbers[i] = numbers[i];
        }
    }

   // loop through these unique numbers
   for (let i = 0; i < uniqueNumbers; i++) {
        let sum = 0;
        let numToCompare = uniqueNumbers[i];
        for (let number in numberCounts) {
            // add the number of times that number appeared originally * the actual number to the sum
            sum = sum + numberCounts[number] * number;
        }
        // remove itself from the sum
        sum = sum - numToCompare;
        // after tallying all the rest of the numbers, compare the number
        // in the uniqueArray with the rest of the numbers
        if (numToCompare > sum && numToCompare > superNumber) {
            superNumber = numToCompare;
        } else {
            sum = 0;
        }
   }
   // return number if found
   return superNumber;
}