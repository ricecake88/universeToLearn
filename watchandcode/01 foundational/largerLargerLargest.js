// For this assessment, you should submit 3 separate functions.

// The first function, large, should take a number as input and return a boolean value indicating whether or not that number is larger than 10.

// large(9) should return false.

// The second function, larger, should take two numbers as input, and it should return the largest argument.

// larger(3, 10) should return 10.
// larger(12, 12) should return 12.

// The third function, largest, should take three numbers as input, and it should return the largest argument.

// largest(12, 14, 10) should return 14.

// Note: you should not use a for loop for any of these functions.

// Determines if a number is large by comparing it to 10
function large(number) {
    // number is less or equal to 10
    if (number <= 10) {
        return false;
    }

    // implicit; number is greater than 10
    return true;
}

// compare and return the larger out of two numbers, otherwise return the first number
function larger(num1, num2) {

    // if num1 is greater or the same as than num2, return num1
    if (num1 >= num2) {
        return num1;
    } 

    // implicit num2 is greater if logic falls here
    return num2;
}


// compare three numbers and return the largest of the three numbers 
// otherwise if they are all the same, return the first number
function largest(num1, num2, num3) {

    if (num1 >= num2 && num1 >= num3) {  
        // num1 is greater or equal to the other two nums
        return num1;
    } else if (num2 >= num3) {
        // implicit num2 > num1; num2 is greater or equal to num3
        return num2;
    } 

    // implicit, all above statements fail, num3 is the greatest
    return num3; 
}

function alreadyInString(character, uniquesArr) {
    for (let i = 0; i < uniquesArr.length; i++) {
        if (uniquesArr[i] === character) {
            return true;
        }
    }
    return false;
}

// very slow possible O(n^2) 
function distinctCharacterCount(input) {
    // initialize the distinct characters 
    const uniques = [];

    for (let i = 0; i < input.length; i++) {
        if (!alreadyInString(input[i], uniques)) {
            uniques[uniques.length] = input[i];
        }
    }
    return uniques.length;
}

function distinctCharacterCount2(input) {
    // for each input, keep track of how many times it appears when one goes through it in an object
    const charactersSeen = {};
    let dstinctNum = 0;

    for (let i = 0; i < input.length; i++) {
        if (charactersSeen[input[i]]) {
            // seen before, so increment
            charactersSeen[input[i]]++;
        } else {
            // haven't seen before, so initialize
            charactersSeen[input[i]] = 1;
            dstinctNum++;
        }
    };

    return dstinctNum;

}

function sharedCharacterCount(string1, string2) {

}

console.log(largest(1,2,3));// => 3
console.log(largest(1,3,2));// => 3
console.log(largest(3,2,1));// => 3
console.log(largest(1,2,2)); // => 2
console.log(largest(1,1,3)); // => 3
console.log(largest(2,3,2)); // => 3
console.log(largest(2,2,2)); // => 2