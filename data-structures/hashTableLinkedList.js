class Node {

    constructor(key, val){
      this.key = key;
      this.value = val;
      this.next = null;
    }
  
}
  
class LinkedList {
  
    constructor(){
      this.head = null;
      this.tail = null;
      this.size = 0;
    }
  
    push = (key, value) => {
      let newNode = new Node(key, value);
  
      if (!this.head){
        this.head = newNode;
        this.tail = newNode;
        this.size++;
        return this;
      }
      this.tail.next = newNode;
      this.tail = newNode;
      this.size++
      return this;
    }
    // Insert
    // Delete
    // Traverse
    // 
}

const stringToHash = (s, tableLength) => {
    hash = 17
    for (let i = 0; i < s.length; i++){
        hash = (13 * hash * s.charCodeAt(i)) % tableLength;
    }
    return hash;
}
  
  
class HashTable {
    table = new Array(1999);
    numItems = 0;
    loadFactor = this.numItems / this.table.length;
  
    populateTable = () => {
      for (let i = 0; i < this.table.length; i++){
          let ll = new LinkedList();
          this.table[i] = ll;
      }
    }
  
    setItem = (key, value) => {
    // console.log(stringToHash(key, this.table.length));
    // produce hash index
    // get ll at hash index and push new node onto lls
    let idx = stringToHash(key, this.table.length);
    this.table[idx].push(key, value);
    }
  
    getItem = (key, value) => {
        // produce hash
        // get index and ll at index, traverse to find node with this key value pair
    }
  
}
  
let h1 = new HashTable();
h1.populateTable();
h1.setItem("firstName", "Otha");
h1.setItem("lastName", "Hernandez");
console.log(h1.table);