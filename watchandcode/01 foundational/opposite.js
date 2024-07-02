/* Input: array of booleans
 * Summary:  Modify in place; for every boolean, flip each boolean value to opposite value by negating it*/
function opposite(booleans) {
    // loop through every boolean value
    for (let i = 0; i < booleans.length; i++) {
        // flip the boolean by negating the value
        booleans[i] = !booleans[i];
    }
    return booleans;
}

console.log(opposite([]));
console.log(opposite([true, true, false]));