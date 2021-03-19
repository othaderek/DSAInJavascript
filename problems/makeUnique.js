

const makeUnique = (str) => {
    // make downcase
    // count all occurences of the characters in a hashmap
    // remove character if there is more than one occurence in hashmap
    let charMap = {};

    for (let s of str){
        !charMap[s] ? charMap[s] = 1 : charMap[s] += 1;
    }

    for (let i in str){
        if (charMap[str[i]] > 1){
            str = str.replace(str[i], "");
            charMap[i] -= 1;
        }
    }
    return str;
}

console.log(makeUnique("aardvark")); // => ardvk
