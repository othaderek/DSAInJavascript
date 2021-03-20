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
// whats a hash table?
// A hash table is essentially an array that stores key value pairs
// The index we store our hash data in is a hashed representation of our key
// so we have a hash function that converts our key into a hash of some sort and
// the hash is an index within the table and we store our data there
// therefore we have to use the same hash function used to create the hash key
// and use it to find the key value pair 
// What if there are key collisions? How do we handle them?
// Well we can use a linked list or 2d array to store the key value pair
// so if there is a key collision we can eithe push the kv pair into a 2d array
// or push it into a linked list

// hash tables are good for quick lookups O(1) time, this of course depends on
// the size of the 

const hashToString = (str, tableLength) => {
hash = 17;
for (let s in str){
  hash = (13 * hash * str.charCodeAt(s)) % tableLength;
}
return hash;
}

class HashTable{

constructor(){
  this.table = new Array(199);
}

populateTable = () => {
  for (let i = 0; i < this.table.length; i++){
    this.table[i] = new LinkedList();
  }
}

// hash function

// set item
setItem = (key, value) => {
  let index = hashToString(key, this.table.length);
  // console.log(this.table[index])
  this.table[index].push(key, value);
  return this;
}
// get item
getItem = (key) => {
  let index = hashToString(key, this.table.length);
  let ll = this.table[index];
  // Check size, if greater than one and traverse to find the specific data you're looking for.
  return ll;
}
}

let h1 = new HashTable();
h1.populateTable();
h1.setItem("firstName", "Otha");
h1.setItem("firstName", "Leah");
h1.setItem("lastName", "Borrie");
h1.getItem("firstName")
h1.getItem("lastName")
h1.setItem("person", {"firstName": "Otha", "lastName": "Hernandez"})
h1.setItem("person", {"firstName": "Leah", "lastName": "Borrie"})
h1.getItem("person")