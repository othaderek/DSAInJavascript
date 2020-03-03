// Merge Sort

// Create a helper function that merges sorted arrays in sorted order
const merge = (arr1, arr2) => {
    let sortedArray = [];
    let i = 0;
    let j = 0;
    while (sortedArray.length != arr1.length + arr2.length){
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

    return sortedArray
}


merge([1,3,6,7,8],[0,5,8,13,20,22]);
merge([11,13,16,7,118],[-5,0,8,12,100,222]);

