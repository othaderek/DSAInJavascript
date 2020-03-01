# Problem Solving Patterns
Here is a list of problem solving patterns that can be used for algorithmic
problem solving during coding interviews.

## Frequency Counter
This pattern can be used to count the frequency of elements. Here is an example of how to implement it in Javascript.


```
const frequencyCounter = (array) => {
    let elementMap = {};

    for (let element of array){
        frequencyCounter[element] = (frequencyCounter[element] || 0) + 1;
    }

    return elementMap;

}

frequencyCounter([1,4,5,5,2,1]); // => {'1': 2, '4': 1, '5': 2, '2': 1}
```
Here is how it works.

First we create an empty object call elementMap, this is going to keep track of how many of each element we encounter.

Next we need to create a loop that will iterate through the array that has been passed into the frequency counter function that we have created. We can use 'for of' which in javascript gives us the element in the array we are iterating through. 

We then, for every iteration, plug the element in the array into the frequency counter if it evaluates as true (if the element is already in the object map) it will return the value of the key in the object and then add one to it, otherwise it will add the key to the elementMap and add one to it.

Once we reach the end of the array we return the element map, which will return the values we iterated through in each key of the object and the values of those keys will hold the frequency that the element was counted.

## Multiple Pointers

## Sliding Window

## Divide and Conquer