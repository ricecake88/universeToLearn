/* input: two integers
 * summary: use addition and subtraction to exchange the two values
 * complexity:
 *     time: O(1)
 *     space: O(1)
 */

// sum the two integers
a = a + b;

// exchange the two values
// subtract b from sum to get value of a
b = a - b;
// subtract b (old a) from sum  to get value of b
a = a - b;
