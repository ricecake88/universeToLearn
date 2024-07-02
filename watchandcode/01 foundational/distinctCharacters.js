// input array of strings
// Summary: Loop over each character of each string, and increment counter when seen, might have unnecessary code
//          still way too long O(n^2)
function distinctCharactersSeen(strArr) {
    let seenObj = {};
    let distinctCounter = 0;
    // go through each string
    for (let indexStrArr in strArr) {
        // loop through each char in string
        for (let indexStr in strArr[indexStrArr]) {

            // character does not exist, add to obj and initialize
            if (!seenObj[strArr[indexStrArr][indexStr]]) {
                seenObj[strArr[indexStrArr][indexStr]] = 1;
            } else {
                // seen again, increment counter
                seenObj[strArr[indexStrArr][indexStr]]++;
            }
        }
    }

    // count the number of keys
    for (let i in seenObj) {
        distinctCounter++;
    }
    return distinctCounter;
}

console.log(distinctCharactersSeen(["fog", "dog", "jog"]));

function sharedCharacterCountJS(strArr) {
    let sharedChars = strArr && strArr.length && new Set(strArr[0].split(""));
    strArr.forEach((str) => {
        let found = false;
        for (let char of sharedChars) {
            if (str.includes(char)) {
                found = true;
            }
            if (!found) {
                sharedChars.delete(char);
            }
        }
    })
    return sharedChars.size;
}

// input array of strings
// Summary: -- didn't have time
function sharedCharacterCount(strArr) {
    
    let sharedCharSoFar = {};
    let sharedCharNumLength = 0;
    if (strArr.length > 0) {
        for (let indexChar = 0; indexChar < strArr[0].length; indexChar++) {
            sharedCharSoFar[strArr[0][indexChar]] = 1;
        }
    }
    // go through every string
    for (let indexStrArr = 1; indexStrArr < strArr.length; indexStrArr++) {
        // go through each character in sharedCharSoFar
        for (let char in sharedCharSoFar) {
            // if char is not set to null
            if (sharedCharSoFar[char]) {
                let found = false;                
                for (let indexChar = 0; indexChar < strArr[indexStrArr].length; indexChar++) {
                    // char is found in the string!
                    if (strArr[indexStrArr][indexChar] === char) {
                        found = true;
                    }
                }
                // not found, set the value for the char to null
                if (!found) {
                    sharedCharSoFar[char] = null;
                }
            }
        }
    }

    // count all the non nulls to get number of shared chars
    for (let char in sharedCharSoFar) {
        if (sharedCharSoFar[char]) {
            sharedCharNumLength++;
        }
    }
    return sharedCharNumLength;
}

console.log(sharedCharacterCount([]));
console.log(sharedCharacterCount(["foog", "dog", "logbasdf"]));
console.log(sharedCharacterCountJS(["foog", "dog", "logbasdf"]));
console.log(sharedCharacterCount(["abcdefghijklmnopqrstuvw", "xyzabc", ""]));