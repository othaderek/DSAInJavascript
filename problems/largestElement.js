/*
Given an array find the largest element in the array.

Inputs: [1, 8, 7, 56, 90]
Outputs: 90

*/

// O(n)
const largestElement = (arr) => {
    // sort array and return last element in array.
    let largest = null;
    for (let i = 0; i < arr.length; i++){
        if (largest == null){
            largest = arr[i]
        } else {
            if (arr[i] > largest){
                largest = arr[i];
            }
        }
    }
    return largest;
}

console.log(largestElement([1, 8, 7, 56, 90])); // 90
console.log(largestElement([1, 8, 10000, 56, 90])); // 10000