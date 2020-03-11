// Singly Linked List

// A Singly Linked List is a data structure that is made up of nodes that are linked. 
// The nodes hold a value, often times a number, string or any type of data,
// and they hold a next value. The next value is a reference to the next node

// The SLL has a head, tail, and a length. The head is the first node in the SLL,
// the tail is the last node, and the length is the amount of nodes in the SLL.
class Node{

    constructor(value){
        this.value = value;
        this.next = null;
    }

}

class SinglyLinkedList{

    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    // Push is a method that adds a node to the end of the SLL instance.
    // First we must create an instance of a node, then we must check
    // to see if there is a head, if there is no head set the node to be
    // the head and the tail of the SLL instance and increment the length of the list
    // If there is a head, we set the next value of the current tail
    // to the newly created node, set the newly created node to be the tail
    // and increment the length of the list.
    push(value){
        let node = new Node(value)
        if (!this.head){
            this.head = node;
            this.tail = node;
        } else{
            this.tail.next = node;
            this.tail = node;
        }
        this.length++
        return this
    }
    // Base case we check if there is a head and if there isn't return undefined
    // With pop we have to traverse the linked list until node.next is null
    // then we take the previous node and set that as the tail, set the previous nodes
    // next to null. The we decrement the SLL.
    // Last thing we want to do is check if the linked list length is equal to zero
    // If it is we set the head and the tail to null
    // Very last thing we do is return current
    pop(){
        if (!this.head) return undefined;
        let current = this.head;
        let newTail = current;
        while (current.next){
            newTail = current
            current = current.next
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if (this.length === 0){
            this.tail = null;
            this.head = null;
        }
        return current;
    }
    // With shift we are removing from the beginning of the SLL
    // We have the same basecase from before
    // We set the head of the SLL to a variable and then set the head.next value
    // to this.head, next we decrement and then return the shifted value
    // Additionally, if we get a length of zero we can set the tail to null
    shift(){
        if (!this.head) return undefined;
        let shifted = this.head;
        this.head = shifted.next
        this.length-- 
        if (this.length === 0){
            this.tail = null;
        }
        return shifted;
    }
    // With unshift we create a new node, set the current head to be the next value of 
    // the newly created node and then set the newly created node as the head of SLL.
    // Remember our base case. if there is no head that means there is no tail and 
    // we set them both to the newNode.
    unshift(value){
        let newNode = new Node(value);
        if (!this.head){
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++
        return this
    }
    // Get is a method that takes and index and returns the node at that index
    // Base case is checking to see if index is less than zero or greater than length
    get(index){
        if (index < 0 || index >= this.length) return null
        let counter = 0;
        let current = this.head
        while (counter != index){
            current = current.next
            counter++
        }
        return current
    }
    // Here we use our get method to find the specific index we want to set
    // We grab the node and change its value and return true otherwise false
    set(value, index){
        let foundNode = this.get(index);
        if (foundNode){
            foundNode.value = value
            return true
        }
        return false

    }
    // With insert, given a value and index, we want to add the value to the index provided. 
    // This will involve us checking the linked list length as a base case and returning false
    // additionally we will return false if the given index is less than zero
    // After this we want to check is equal to the length of the linked list length
    // if it is we will use the push method which just adds the value to the end
    // If the given index is equal to zero then we will use unshift which adds the value to the start
    // If its none of those cases then we create a node and use the get method to get the node before
    // the index provided. Doing this is important because we want to set that node's next value to equal
    // the newly created node. But before we over right the previous node's next value we must set it's next
    // value to the new node's next value. After we do this we can overwrite its next value to be that of
    //  the new node. Lastly, we increment up one on the linked list's length and return true.
    insert(value, index){
        if (index < 0 || index > this.length) return false;
        if (index === this.length) return this.push(value);
        if (index === 0) return this.unshift(value);
        let newNode = new Node(value);
        let previous = this.get(index - 1)
        newNode.next = previous.next
        previous.next = newNode
        this.length++
        return true
    }

    remove(index){
        if (index < 0 || index > this.length) return undefined;
        if (index === this.length - 1) this.pop();
        if (index === 0) this.shift();
        let beforeNode = this.get(index - 1)
        let removed = this.get(index)
        beforeNode.next = removed.next;
        this.length--
        return removed
    }

    print(){
        let arr = []
        let current = this.head
        
        while (current){
            arr.push(current.value)
            current = current.next
        }
        return arr
    }

    reverse(){

    }

}

let sLL = new SinglyLinkedList()
console.log(sLL.push(1));
console.log(sLL.push(2));
console.log(sLL.push(3));
console.log(sLL.push(4));
console.log(sLL.set(1,1));
console.log(sLL.insert(100, 1));
console.log(sLL.get(2));
console.log(sLL);
console.log(sLL.remove(2));
console.log(sLL.print());





