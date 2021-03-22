/**
 * Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in a non-descending order without moving the trees. People can be very tall!
*
* Example
*
* For a = [-1, 150, 190, 170, -1, -1, 160, 180], the output should be
* sortByHeight(a) = [-1, 150, 160, 170, -1, -1, 180, 190].
*
*
 */

const sortByHeight = (a) => {
    // add all non -1 value in a new array
    // sort that array
    // replace all of the values that are not -1 in a with the newly sorted values
    let newArr = [];
    for (let i = 0; i < a.length; i++){
        if (a[i] != -1) newArr.push(a[i]);
    }

    newArr.sort((a,b) => {
        return a-b
    })

    let j = 0;
    for (let i = 0; i < a.length; i++){
        if (a[i] != -1){
            a[i] = newArr[j];
            j++;
        } 
    }
    return a;

}

let result = sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]) // [-1, 150, 160, 170, -1, -1, 180, 190]
console.log(result);