/* Input: number
 * Summary: For each matchup with an even number of players and 
*       a possible odd player advancing to the next round with the matchup winners, 
*       increment the number of rounds until only one player remains 
*/
function numberOfRounds(totalPlayers) {
    let rounds = 0;
    let remainingPlayers = totalPlayers;
    // If there is at minimum 2 players, go through group of matchups until only 1 player remains
    // each loop is a round
    while (remainingPlayers > 1) {
        if (remainingPlayers % 2 === 0) {
            // even # of players, number of players advance are determined by dividing by 2
            remainingPlayers = remainingPlayers / 2;
        } else {
            // odd # of players, make number of players even then divide by 2 
            // and add odd player to determine total remaining players in next round
            remainingPlayers = (remainingPlayers - 1) / 2 + 1;
        }
        rounds++;
    }
    return rounds;
}
console.log(numberOfRounds(0));
console.log(numberOfRounds(1));
console.log(numberOfRounds(2));
console.log(numberOfRounds(3));
console.log(numberOfRounds(15));