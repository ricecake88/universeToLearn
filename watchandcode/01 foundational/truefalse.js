
/* inputs are both boolean
 *
 * Summary: Can watch TV if is a holiday or not a weekday, otherwise we cannot */
function canWatchTV(isHoliday, isWeekday) {

    // holidays or non-weekdays
    if (isHoliday || !isWeekday) {
        return true;
    }
    return false;

}

/* inputs are both boolean
 *
 * Summary: Return true when both decisions are the same, false when they are different */
function doTheyAgree(partner1decision, partner2decision) {
    return partner1decision === partner2decision;
}

/* inputs are both string from a set of values
 * weekday - "monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday".
 * month - "january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december".
 * 
 * Summary: Store is closed on Mondays as well as the month of July, otherwise it is open */
function isOpen(weekday, month) {
    // closed on Mondays and month of July
    if (weekday === 'Monday' || month === 'July') {
        return false;
    }
    // otherwise open
    return true;
}

// console.log(canWatchTV(true, true));
// console.log(canWatchTV(true, false));
// console.log(canWatchTV(false, false));
// console.log(canWatchTV(false, true));

// console.log(doTheyAgree(true, true));
// console.log(doTheyAgree(true, false));
// console.log(doTheyAgree(false, false));
// console.log(doTheyAgree(false, true));

console.log(isOpen('Tuesday', 'August'));
console.log(isOpen('Monday', 'September'));
console.log(isOpen('Sunday', 'July'));
console.log(isOpen('Sunday', 'May'));
console.log(isOpen('Monday', 'July'));