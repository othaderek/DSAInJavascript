class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class Queue{
    constructor(){
        this.first = null
        this.last = null
        this.size = 0
    }

    enqueue(value){
        let newNode = new Node(value)
        console.log(newNode);
        
        if (!this.first){
            this.first = newNode
            this.last = newNode
        } else{
            this.last.next = newNode
            this.last = newNode  
        }
        this.size++
        return this
    }

    dequeue(){

    }
}

let queue = new Queue()

queue.enqueue(1)
queue.enqueue(2)
console.log(queue.enqueue(3));
