//Write a JavaScript program that takes an array with mixed data type and calculates the sum of all numbers.

// Test Data :
// ([2, "11", 3, "a2", false, 5, 7, 1]) -> 18
// ([2, 3, 0, 5, 7, 8, true, false]) -> 25


// Expected Output:
// Original array: 2, 11, 3, a2, false, 5, 7, 1
// Sum all numbers of the said array: 18
// Original array: 2, 3, 0, 5, 7, 8, true, false
// Sum all numbers of the said array: 25

function sumOfNumbers(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number') {
            sum += arr[i];
        }
    }
    return sum;
}

// Example usage:
const mixedArray = ['apple', 10, 'orange', 5, true, 8, 'banana'];
const result = sumOfNumbers(mixedArray);
console.log(result); // Output: 23

const arr_mix = [2, "11", 3, "a2", false, 5, 7, 1];
console.log('Original array:', arr_mix)
console.log('Sum all numbers of the said array', sumOfNumbers(arr_mix)) //output is 18

const arr_mix2 = [2, 3, 0, 5, 7, 8, true, false];
console.log('Original array:', arr_mix2)
console.log('Sum all numbers of the said array', sumOfNumbers(arr_mix2)) //output is 25