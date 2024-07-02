/* Input: string
 * Summary: Go through every character of string and initialize related count to one or increment */
function characterCounts(strInput) {
    // initialize empty object
    let characterCountObj = {};
    // loop through every character of the string
    for (let i = 0; i < strInput.length; i++) {
        if (characterCountObj[strInput[i]]) {
            // exists, increment char count
            characterCountObj[strInput[i]]++;
        } else {
            // does not exist yet, init char count to 1
            characterCountObj[strInput[i]] = 1;
        }
    }
    return characterCountObj;
}

console.log(characterCounts(""));
console.log(characterCounts("hello how are you"));