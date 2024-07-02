/* Input: string
 * Summary: Keep track of the character that is seen the most so far
 *      and its count while counting up each character's appearance in a string;
 *      returns the last frequently seen character if more than one character
 *      appears the same most number of times
 */
function mostCommonCharacter(string) {
    // keep track of the mumber of times a unique character appears in string
    let countsPerCharacter = {};

    // declare variables used to keep track of most frequently seen character
    let mostFreqCharacterCount = 0;
    let mostFreqCharacter;

    // go through each character in string
    for (let i = 0; i < string.length; i++) {
        if (i === 0) {
            // initialize most frequently seen character to the first character
            mostFreqCharacter = string[0];
            mostFreqCharacterCount = 1;         
        }
        if (countsPerCharacter[string[i]]) {
            // character already counted, let's increment
            countsPerCharacter[string[i]]++;
        } else {
            // not yet counted, initialize
            countsPerCharacter[string[i]] = 1;
        }

        // current character seen more or same as previous most seen character
        if (countsPerCharacter[string[i]] >= mostFreqCharacterCount) {
            // assign most common character to current character
            mostFreqCharacter = string[i];
            mostFreqCharacterCount = countsPerCharacter[string[i]];
        }
    }

    // character that appears most frequent in string or undefined if empty string
    return mostFreqCharacter;
}

console.log(mostCommonCharacter('ababa')); // a
console.log(mostCommonCharacter('')); // undefined
console.log(mostCommonCharacter('hello how are you')); // o
console.log(mostCommonCharacter('abab')); // b
console.log(mostCommonCharacter('a')); // a