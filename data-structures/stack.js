class Node{
    constructor(value){
        this.value = value;
        this.next = null
    }
}

class Stack{
    constructor(){
        this.first = null
        this.last = null
        this.size = 0
    }

    push(value){
        let newNode = new Node(value)
        if (!this.first){
            this.first = newNode
            this.last = newNode
        } else {
            newNode.next = this.first
            this.first = newNode
        }
        return ++this.size
    }

    pop(){

    }
}

let stack = new Stack()

console.log(stack.push(1));
console.log(stack.push(2));
console.log(stack.push(3));
console.log(stack);




