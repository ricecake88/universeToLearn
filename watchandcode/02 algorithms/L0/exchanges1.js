/*
* summary: store the first original value
* complexity:
*   space: O(1)
*   time: O(1)
*/

// save off a so it is not being overwritten
let oldA = a;

// exchange the values c to a, b to c, old value of a to b
a = c;
c = b;
b = oldA;