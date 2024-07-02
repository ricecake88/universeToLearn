// Input: Two arrays with integers
// Summary: Check length of both arrays, if they are same, continue
//      comparing both numbers until they differ, return false if first
//      number is greater, else return true. If they differ
//      return true if first array is longer than second
function greaterThan(inputArr1, inputArr2) {
    if (inputArr1.length > inputArr2.length) {
        // first number bigger than second number
        return true;
    } else if (inputArr1.length < inputArr2.length) {
        // first number smaller than second number
        return false;
    } else {
        // length is equal, let's compare the arrays now
        for (let i = 0; i < inputArr1.length; i++) {
            if (inputArr1[i] > inputArr2[i]) {
                // digit in first number larger than in second
                // at same position
                return true;
            } else if (inputArr1[i] < inputArr2[i]) {
                // digit in first number smaller than in second
                // at same position
                return false;
            }
        }
    }
    // they are the same number
    return false;
}
// Confidence: 80%

// Input: Two arrays with integers, and up to one decimal point character
// Summary: Check for position of decimal, if greater than the second array
//      return true, if the same then compare the numbers
function greaterThan2(inputArr1, inputArr2) {
    let decimalInInputArr1 = null;
    let decimalInInputArr2 = null;
    for (let i = 0; i < inputArr1.length; i++) {
        if (inputArr1[i] === '.') {
            decimalInputArr1 = i;
        }
    }
}