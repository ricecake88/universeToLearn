/* input: array of numbers
 * expected output: running sum up to the current index
 * summary:
 * complexity:
 *  time: O(n)
 *  space: O(n)
 */
 function runningSum(numbers) {
    let runningSumArray = [];
    let runningSum = 0;

    // for every number
    for (let i = 0; i < numbers.length; i++) {
        // update running sum with current number
        runningSum = runningSum + numbers[i];

        // append the running sum to the result array
        runningSumArray[i] = runningSum;
    }

    return runningSumArray;
 }

 // numbers = [-1, 0, 2]
 // numbers.length -> 3
 // i = 0; 0 < 3 yes
 // 0 + -1 -> running Sum -1

 // runningSumArray[0] = -1

 // i = 1; 1 < 3 yes
 // -1 + numbers[1] (0) -> running sum -1
 
 // runningSumArray[1] = -1

 // i = 2; 2 < 3 yes
 // -1 + 2 -> 1 running Sum

 // runningSumArray[2] = 1

 // expected Output [-1, -1 , 1] --> [-1, -1, 1]

 function runningSum(numbers) {
    // for every number
    for (let i = 1; i < numbers.length; i++) {
        // change number by adding previous sum with current number
        numbers[i] = numbers[i - 1] + numbers[i];
    }

    return numbers;
 }

 // input [-1, 0, 2]
 // expected output [-1, -1, 1]
 // running output [-1, -1, 1]
 // temp = 0
 // numbers[0] = -1
 // numbers[1] = -1

 // temp = 2
 // numbers[2] = 1

 function runningSum(numbers) {
    let runningSum = 0;

    // for every number
    for (let i = 0; i < numbers.length; i++) {
        // update running sum with current number
        runningSum = runningSum + numbers[i];

        // append the running sum to the result array
        numbers[i] = runningSum;
    }

    return numbers;
 }