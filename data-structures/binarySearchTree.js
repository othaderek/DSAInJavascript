class Node{
    constructor(value){
        this.value = value
        this.right = null
        this.left = null
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null
    }

    insert(value){
        let newNode = new Node(value)
        if (!this.root){
            this.root = newNode
            return this
        }
        let currentNode = this.root
        while (true){
            if (value === currentNode.value) return undefined;
            if (value < currentNode.value){
                if (currentNode.left === null){
                    currentNode.left = newNode
                    return this
                }
                currentNode = currentNode.left
            } else {
                if (currentNode.right === null){
                    currentNode.right = newNode
                    return this
                }
                currentNode = currentNode.right
            }
        }
    }
}

let bst = new BinarySearchTree()

console.log(bst.insert(10));
console.log(bst.insert(3));
console.log(bst.insert(39));
console.log(bst.insert(9));