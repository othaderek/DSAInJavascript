/**
 * Sort a given string in ascending order
 * Input: s = "hello"
 * Output: "olleh"
 */

const sortString = (str) => {
    // split up string into arr
    let arr = mergeSort(str.split(""));
    return arr.join("");
}

const mergeSort = (arr) => {
    // add left and right to merge
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length/2);
    let arr1 = mergeSort(arr.slice(0, mid));
    let arr2 = mergeSort(arr.slice(mid));
    return merge(arr1, arr2);
}

const merge = (arr1, arr2) => {
    // We compare character codes and add to new array.
    // while i < arr1.length, j < arr2.length
    // while i < arr1.length
    // while j< arr2.length
    // return merged array
    let i = 0;
    let j = 0;
    let merged = [];
    while (i < arr1.length && j < arr2.length){
        if (arr1[i].charCodeAt() < arr2[j].charCodeAt()){
            merged.push(arr1[i]);
            i++;
        } else {
            merged.push(arr2[j]);
            j++;
        }
    }
    while (i < arr1.length){
        merged.push(arr1[i]);
        i++;
    }
    while (j < arr2.length){
        merged.push(arr2[j]);
        j++;
    }
    return merged;
}

console.log(sortString("hello")); // "olleh"
console.log(sortString("")); // "olleh"