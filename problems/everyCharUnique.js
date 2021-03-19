const everyCharUnique = (str) => {
    let charsMap = {};
    // store chars in object
    // if charMap[str[i]] >= 1 return false
    for (let i = 0; i < str.length; i++){
        if (charsMap[str[i]] && charsMap[str[i]] >= 1){
            return false;
        } else {
            charsMap[str[i]] = 1;
        }
    }
    return true;
}

console.log(everyCharUnique('abcd'), 'true');
console.log(everyCharUnique('abccd'), 'false');
console.log(everyCharUnique('bhjjb'), 'false');
console.log(everyCharUnique('mdjq'), 'true');