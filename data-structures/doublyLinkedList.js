class Node{
    constructor(value){
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(value){
        let newNode = new Node(value)
        if (this.head === null){
            this.head = newNode;
            this.tail = newNode;
            this.length++
            return this
        }
        let previous = this.tail
        this.tail = newNode
        previous.next = newNode
        newNode.prev = previous
        this.length++
        return this
    }

    pop(){
        if (!this.head) return false
        if (this.length === 1){
            let node = this.head
            this.head = null
            this.tail = null
            this.length--
            return node
        }
        let popped = this.tail
        this.tail = this.tail.prev
        this.tail.next = null
        this.length--
        return popped
    }

    shift(){
        if (!this.head) return false
        let shifted = this.head
        if (this.length === 1){
            this.head = null
            this.tail = null
        } else {
            this.head = shifted.next
            this.head.prev = null
        }
        this.length--
        return shifted
    }
}

let dLL = new DoublyLinkedList()
console.log(dLL.push(1));
console.log(dLL.push(2));
console.log(dLL.push(3));
console.log(dLL.shift());
console.log(dLL);

