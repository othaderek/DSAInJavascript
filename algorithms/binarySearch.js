// Binary Search
/*
This function accepts a sorted array and a value.
Given an array and value, use binary search to find the value inside of the array and
return it's index

Steps: 
Create a function
Create a left pointer at the start of he array, a right pointer at the end of the array,
and a middle pointer.

If the middle value is too small, move the right pointer into the middle position and
reset the middle position to the new middle between left and right pointers
If the middle value is too large, more the left pointer in the the middle position and
reset the middle position to the new middle between left and right pointers.

Time Complexity -> Worst Case: O(log n) Best Case: O(1)
Space Complexity -> O(1)

*/

const binarySearch = (sortedArray, n) => {
    let left = 0
    let right = sortedArray.length - 1
    let middle = Math.floor((left + right)/2)
    while (sortedArray[middle] !== n && left <= right){
        if (n < sortedArray[middle]) right = middle - 1;
        else left = middle + 1;
        middle = Math.floor((left + right)/2)
    }
    console.log((sortedArray[middle] === n ? middle : -1));
    return sortedArray[middle] === n ? middle : -1;
}

binarySearch([1,2,3,4,5,6], 5)
binarySearch([-13,-10,-1,0,1,2,3,4,5,6], -10)
binarySearch([0,1,2,3,4,5,6], 0)
binarySearch([0,1,2,3,4,5,6], "r")
