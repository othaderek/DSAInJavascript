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

}

let sLL = new SinglyLinkedList()
console.log(sLL.push(1));
console.log(sLL.push(2));
console.log(sLL.push(3));
console.log(sLL.pop());
console.log(sLL.tail);
