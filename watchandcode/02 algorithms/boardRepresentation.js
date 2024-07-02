/* Input: An object that contains a value representing a row, col position
 * Summary:
 */
function positionColor1(position) {
    if ((position.row - 1)% 2 === 0 && (position.col - 1) % 2 === 0) {
        return 1;
    }
    else if ((position.row - 1) % 2 === 0 && (position.col - 1) % 2 === 1) {
        return 0;
    }
    else if ((position.row - 1) % 2 === 1 && (position.col - 1) % 2 === 0) {
        return 0;
    }
    return 1;
    
}