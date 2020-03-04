// Merge Sort

// Create a helper function that merges sorted arrays in sorted order called merge
// Create mergeSort function that recursively slices array size down until it is 1 or 0 length
// and uses the merge function to merge the arrays in sorted order until we have one sorted array.

const merge = (arr1, arr2) => {
    console.log('merging');
    
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

