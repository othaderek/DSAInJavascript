/**
 * 
 * Given an array and k, find the k largest elements in the array.
 * 
 * Input: arr = [12, 5, 787, 1, 23], K = 2
 * Output: 787, 23
 */

const kLargestElement = (arr, k) => {
    // merge sort
    // return last k elements in array
    let sorted = mergeSort(arr);
    let kLargest = [];
    for (let i = arr.length-1; k > 0; k--){
        kLargest.push(sorted.pop());
    }
    return kLargest;
}

const merge = (arr1, arr2) => {
    // this is the method where comparisons happen
    // 3 while loops
    let i = 0;
    let j = 0;
    let result = [];
    while (i < arr1.length & j < arr2.length){
        if (arr1[i] < arr2[j]){
            result.push(arr1[i])
            i++
        } else {
            result.push(arr2[j])
            j++
        }
    }

    while (i < arr1.length){
        result.push(arr1[i]);
        i++;
    }

    while (j < arr2.length){
        result.push(arr2[j]);
        j++
    }
    return result;
}

const mergeSort = (arr) => {
    // We want to halve an array at its mid point until the array size is <= 1
    // We do a left merge sort and right merge sort and call the function recursively
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0,mid));
    let right = mergeSort(arr.slice(mid));

    return merge(left, right);
}

let res = kLargestElement([12, 5, 787, 1, 23], 2)
let res1 = kLargestElement([12, 5, 787, 1, 23], 3)
let res2 = kLargestElement([1122, 555, 787, 1, 23, -1, -100], 3)
console.log(res);
console.log(res1);
console.log(res2);