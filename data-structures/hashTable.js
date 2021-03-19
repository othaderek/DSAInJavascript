const hashStringToInt = (s, tableSize) => {
    // create hash function with primes
    // loop through string and get char code and multiply by prime
    // 
    let hash = 17;
    for (let i = 0; i < s.length; i++){
        hash = (13 * hash * s.charCodeAt(i)) % tableSize;
        console.log(hash);
    }
    return hash;
}


class HashTable{

    table = new Array(1999) // Should be a large prime because it elps spread out keys

    getItem = key => {
        const idx = hashStringToInt(key, this.table.length)
        return this.table[idx];
    }

    setItem = (key, value) => {
        const idx = hashStringToInt(key, this.table.length);
        if (this.table[idx]){
            this.table.push([key, value]);
        } else {
            this.table[idx] = [[key, value]]
        }
        console.log(idx);
        this.table[idx] = value;
    }
}

let hash = new HashTable();

hash.setItem("firstName", "Otha");
hash.setItem("lastName", "Hernandez");
console.log(hash.getItem("firstName"))
console.log(hash.getItem("lastName"))
console.log(hash.table);