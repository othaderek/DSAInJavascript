// Swap function used to swap two values in an array.   

const swap = (array, index1, index2) => {
    return [array[index1], array[index2]] = [array[index2], array[index1]]
}


console.log(swap([1,2,3,4,5], 1, 2)); 