// Bubble Sort
// {add description}

// Time Complexity: O(n^2)

const bubbleSort = (array) => {
    let notSwapped;
    for (let i = array.length; i > 0; i--){
        notSwapped = true;
        for (let j = 0; j < i - 1; j++){
            if (array[j] > array[j+1]){
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] =  temp;
                notSwapped = false;
                
            }
            console.log(array);
        }
        if(notSwapped) break;
    }
}

bubbleSort([4,2,3,12,9,6])


