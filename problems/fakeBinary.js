/*
 Description: Given a string of digits, you should replace any digit below 5 with '0'
 and any digit 5 and above with '1'. Return the resulting string.
 
 Input: "123456789"
 OUtput: "000011111"
 
 Steps:
 1. Convert string of numbers to array of ints [x]
 2. Loop over the int array
 3. In my loop have an if else statement that checks if number is lt 5 or gte 5;
 4. Convert each int to 0 or 1
 5. Join array to string and return result


*/

function fakeBin(x){
    // Convert string of numbers to array of ints
    let arrOfNumChars = x.split("");
    let parsed;
    for (let i = 0; i < arrOfNumChars.length; i++){
        parsed = parseInt(arrOfNumChars[i]);
        if (parsed < 5){
            arrOfNumChars[i] = "0";
        } else {
            arrOfNumChars[i] = "1";
        }
    }
    return arrOfNumChars.join("");
}
console.log(fakeBin("123456789"));