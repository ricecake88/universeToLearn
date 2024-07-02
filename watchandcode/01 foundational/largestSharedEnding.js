function largestSharedEnding(arrStr) {
    let ending = "";

    // if array of strings is not empty
    let currStrIndex = 0;
    let nextStrIndex = 1;
    if (arrStr.length) {
        console.log(endsWith(arrStr[currStrIndex], arrStr[nextStrIndex]));
        if (endsWith(arrStr[currStrIndex], arrStr[nextStrIndex])) {
            ending = arrStr[currStrIndex];
        }
        if (!endsWith(arrStr[currStrIndex], ending)) {
            console.log("here");
            let indexNStr1 = arrStr[currStrIndex].length;
            let indexNStr2 = arrStr[nextStrIndex].length;
            while (arrStr[currStrIndex][indexNStr1] === arrStr[nextStrIndex][indexNStr2]) {
                ending = createNewEnding(ending);
                indexNStr1--;
                indexNStr2--;
            }
            // if no match
            if (!ending) {
                return ending;
            }
        }
        
        while (nextStrIndex < arrStr.length - 1) {
             // if it does not then we will need to check if there is a matching from the end
             console.log(endsWith(arrStr[currStrIndex], ending));
            if (!endsWith(arrStr[currStrIndex], ending)) {
                //console.log("here");
                let indexNStr1 = arrStr[currStrIndex].length;
                let indexNStr2 = arrStr[nextStrIndex].length;
                while (arrStr[currStrIndex][indexNStr1] === arrStr[nextStrIndex][indexNStr2]) {
                    ending = createNewEnding(ending);
                    indexNStr1--;
                    indexNStr2--;
                }
                // if no match
                if (!ending) {
                    return ending;
                }
            }
            nextStrIndex++;
            currStrIndex++;
        }
    }
    return ending;
}

function createNewEnding(ending) {
    let newEnding = ending;
    for (let i = 0; i < ending.length; i++) {
        newEnding[i] = ending[i];
    }
    console.log(newEnding);
    return newEnding;
}

function endsWith(str, ending) {
    console.log(str);
    console.log(ending);
    let i = str.length - ending.length;
    console.log(i);
    let j = 0;
    while (str[i] === ending[j]) {
        console.log(str[i]);
        console.log(ending[i]);
        if (i === str.length) {
            return true;
        }
        i++;
        j++;
    }
    
    return false;
}

let test = ["crazybuck", "chuck", "pick"];
console.log(largestSharedEnding(test));