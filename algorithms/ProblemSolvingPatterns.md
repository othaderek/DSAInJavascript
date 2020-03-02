# Problem Solving Patterns
Here is a list of problem solving patterns that can be used for algorithmic
problem solving during coding interviews.

## Frequency Counter
This pattern can be used to count the frequency of elements. Here is an example of how to implement it in Javascript.


```
const frequencyCounter = (array) => {
    let elementMap = {};

    for (let element of array){
        frequencyCounter[element] = (frequencyCounter[element] || 0) + 1;
    }

    return elementMap;

}

frequencyCounter([1,4,5,5,2,1]); // => {'1': 2, '4': 1, '5': 2, '2': 1}
```
Here is how it works.

First we create an empty object call elementMap, this is going to keep track of how many of each element we encounter.

Next we need to create a loop that will iterate through the array that has been passed into the frequency counter function that we have created. We can use 'for of' which in javascript gives us the element in the array we are iterating through. 

We then, for every iteration, plug the element in the array into the frequency counter if it evaluates as true (if the element is already in the object map) it will return the value of the key in the object and then add one to it, otherwise it will add the key to the elementMap and add one to it.

Once we reach the end of the array we return the element map, which will return the values we iterated through in each key of the object and the values of those keys will hold the frequency that the element was counted.

## Multiple Pointers
This pattern involves having 2 pointers, generally a 'left' and a 'right' pointer that iterate through an array and perhaps compare, or combine the values at the left and right pointer position, and depending on some or of logic, increment or decrement one or the other pointer until some sort of condition is met.

Here is an example we can give with a problem called 'Two Sum'

Given a sorted array, and a target number, return the indeces of the two numbers such that they add up to the given target.

```
const twoSum = (array, target) => {
    let left = 0;
    let right = array.length - 1;

    while (left < right){
        let sum = array[left] + array[right]
        if (sum === target){
            return [array[left], array[right]]
        } else if (sum > target){
            right--
        } else {
            left++
        }
    }
}

twoSum([1,2,3,4,5], 5) // => [0,3]
```
Here we set a left pointer to the 0 index and a right pointer to the array.length - 1 index, this will always be the last index in an array for any given array. 
Next we create a while loop that runs until left is greater than right or the sum matches the target. We accomplish this by setting the sum of the current iteration to the sum variable and use a control strucutre to check if the sum matches the target, if the sum doesn't match the target then we check the next condition which checks if the sum is greater than the target, if it is greater than the target then decrement the right pointer, else increment the left pointer.


## Sliding Window

The sliding window pattern is pretty much what it sounds like. A small window is formed over a portion of some data and this window can slide over the data to capture different portions of it. 

Here is an example

Given an array and a subarray length, return the maximum subarray sum.

```
const maxSubarraySum = (array, num) => {
    if (array.length < num) return null;

    let maxSum = 0;
    let tempSum = 0;

    for (let i = 0; i < num; i++){
        maxSum += array[i]
    }
    tempSum = maxSum;
    for (let i = num; i < array.length; i++){
        tempSum = tempSum - array[i - num] + array[i];
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}
```
First we check to see if the num passed in as an argument that represent the sub-array length is greater than the array length. If it is, we return null.

Next we create two variables, a maxSum and tempSum. The tempSum variable is going to hold the value of the maxSum so that we can mutate it by doing some operation on it and then compare it to the original maxSum value, but we will get to that later.

After setting the variables to zero, we create a for loop that sums every number in that sub-array and save it to maxSum.

We set tempSum to maxSum and start our next for loop.
This for loop sets the first iteration (i) to num, num represent the sub-array length. 
tempSum = array[i - num] + array[i] will in essence subtract the previous first element in the sub-array and add the new last element of the sub-array and compare the maxSum with the newly evaluated temp sum. It will then set the new maxSum to which ever value is greater and when we finish looping it will return the max sub-array sum!

## Divide and Conquer

Divide and Conquer is the process of taking a problem, breaking the problem up into smaller parts that are easier to solve and then putting the solutions for each problem together.

A pretty good example of using the divide and conquer methodology is implementing Binary Search.

```
const binarySearch = (sortedArray, n) => {
    let left = 0
    let right = sortedArray.length - 1
    let middle = Math.floor((left + right)/2)
    
    while (sortedArray[middle] !== n && left <= right){

        if (n < sortedArray[middle]) right = middle - 1;

        else left = middle + 1;

        middle = Math.floor((left + right)/2)
    }
    return sortedArray[middle] === n ? middle : -1;
}
```


Here is a link to repo with my implementation of Binary Search in Javascript.
[Binary Search](https://github.com/othaderek/DSAInJavascript/blob/master/algorithms/binarySearch.js "Binary Search")