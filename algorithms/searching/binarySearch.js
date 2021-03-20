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

Time Complexity -> O(log(n))
Space Complexity -> O(1)

*/

const binarySearch = (sortedArray, n) => {
    // First index
    let left = 0
    // Last index
    let right = sortedArray.length - 1
    // The middle will always be the first plus last index divided by two, rounded down
    // This will return an index
    let middle = Math.floor((left + right)/2)
    // While the element in the middle index is not equal to the number we are looking for
    // AND the left index is less than or equal to right index
    while (sortedArray[middle] !== n && left <= right){
        // If n is less than the element in the middle index slot, we move the right pointer
        // to be one index to the left of the cirrent middle index value
        console.log(sortedArray[middle]);
        if (n < sortedArray[middle]) right = middle - 1;
        // otherwise we change the left pointer to be one index to right of the middle index
        else left = middle + 1;
        // At the end of the loop we set a new middle based on the control structure above
        middle = Math.floor((left + right)/2)
        
    }
    // When the while loop breaks it will run this ternary
    // If the middle element in the sorted array is equal to n, return middle (index)
    // else return -1
    // console.log((sortedArray[middle] === n ? middle : -1));
    return sortedArray[middle] === n ? middle : -1;
}

// clearer implementation
const binarySearch = (arr, t) => {
    let l = 0;
    let r = arr.length-1;
    let m;
    let step = 0
    while (l <= r){
      step++
      m = Math.floor((l+r)/2);
      console.log(`Step:${step} l: ${l}, r:${r}, m:${m}`)
      if (arr[m] === target) return m;
      if (t < arr[m]){
        r = m - 1;
      } else{
        l = m + 1;
      }
    }
    if (arr[m] === t){
      return m;
    } else {
      return "Not Found"
    }
  }

binarySearch([1,2,3,4,5,6,8,10], 10)
binarySearch([-13,-10,-1,0,1,2,3,4,5,6], -10)
binarySearch([0,1,2,3,4,5,6], 0)
binarySearch([0,1,2,3,4,5,6], "r")
