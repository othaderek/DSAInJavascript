// Merge Sort

// Create a helper function that merges sorted arrays in sorted order called merge
// Create mergeSort function that recursively slices array size down until it is 1 or 0 length
// and uses the merge function to merge the arrays in sorted order until we have one sorted array.


// Merge sort can be pretty 'mind bendy' so I'm gonna walk through what it is 
// on a high level and how I've chosen to implement it here.

// Merge Sort is an efficient sorting algorithm that uses divide and conquer.
// The way it works is it splits up an array into smaller arrays that are then
// compared. The array is broken all the way down to arrays of length 1 or 0 and then
// compared and merged.

// I'm goin to break each line down one by one.

// First thing we want to do is break this up into two functions.
// This is the merge function and it takes 2 arrays.
// It compares elements from each array and adds the lowest value into the sorted
// array until each element is in the sortedArray and the last line returns that array

const merge = (arr1, arr2) => {
    let sortedArray = []; //Where the sorted array values go
    let i = 0; // i is the pointer on the first array and j the second
    let j = 0;
    //This lopp iterates through both arrays and always puts the smallest value being compared in the sortedArray
    while (i < arr1.length && j < arr2.length){ 
        if (arr1[i] < arr2[j]){
            sortedArray.push(arr1[i])
            console.log(sortedArray);
            i++
        } else {
            sortedArray.push(arr2[j])
            console.log(sortedArray);
            j++
        }
    }
    // The next two while loops add whatever is left over into the sortedArray
    while (i < arr1.length){
        sortedArray.push(arr1[i]);
        i++
    }

    while (j < arr2.length){
        sortedArray.push(arr2[j])
        j++
    }
    // We return the sortedArray
    return sortedArray
}

// This is the merge sort function that calls mergeSort
// recursively and merges the sorted arrays
const mergeSort = (array) => {
    // Base case. Returns arrays of size 0 or 1
    if (array.length <= 1) return array;
    // We get the half length and create two slices
    let halfLength = Math.ceil(array.length/2);
    // This represents the first half, or left
    let leftArray = mergeSort(array.slice(0, halfLength));
    // and second half or right
    let rightArray = mergeSort(array.slice(halfLength));
    // we pass whatever the mergeSort function returns into our merge method
    return merge(leftArray, rightArray)
}

mergeSort([1,5,34,2,9,-3,100])