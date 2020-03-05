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

const merge = (arr1, arr2) => {
    let sortedArray = [];
    let i = 0;
    let j = 0;
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

    while (i < arr1.length){
        sortedArray.push(arr1[i]);
        i++
    }

    while (j < arr2.length){
        sortedArray.push(arr2[j])
        j++
    }

    return sortedArray
}

const mergeSort = (array) => {

    if (array.length <= 1) return array;

    let halfLength = Math.ceil(array.length/2);
    let leftArray = mergeSort(array.slice(0, halfLength));
    let rightArray = mergeSort(array.slice(halfLength));
    return merge(leftArray, rightArray)
}

mergeSort([1,5,34,2,9,-3,100])
