// Singly Linked List

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

    push(value){
        let node = new Node(value)
        if (!this.head){
            this.head = node
            this.tail = this.head
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
        return this
    }

}

let node1 = new Node(1)
let node2 = new Node(2)