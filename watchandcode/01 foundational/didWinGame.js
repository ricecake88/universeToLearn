/* Input: array of booleans representing outcome of coin flips; true = Heads, false = Tails
 * Summary: For every result check the current result and the next two results are all true
 */
function didWinGame(coinFlipResults) {
    // loop over every result
    for (let i = 0; i < coinFlipResults.length; i++) {
        // check if the current result and the next two results are heads
        if (coinFlipResults[i] && coinFlipResults[i + 1] && coinFlipResults[i + 2]) {
            // heads was rolled three times in a row
            return true;
        }
    }
    // heads was not rolled three times
    return false;
}

console.log(didWinGame([true, false, true, true]));
console.log(didWinGame([]));
console.log(didWinGame([true, true, false, true, true, true]));
console.log(didWinGame([true, true]));