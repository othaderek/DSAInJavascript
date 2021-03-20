/*
Binary Search Tree
A Binary Search Tree is a tree data structure with the following characteristics
Like other trees, it has a root, branches, and leaves
The root is the starting node or parent of all of the other nodes
The left subtree (nodes to the left of the root node) only contain values less
than the root node. Conversely, nodes in the right subtree (nodes to the right of root node)
Only contiain nodes with values greater than the root node.
This works this way as you work your way down the tree.
For any given node, its left value will always be lesser and right value will
always be greater.

Similar to Doubly Linked Lists you have a Left, Right, and value, as opposed to a
next, previous and value in the Node.

Breadth First Search vs Depth First Search
When to use BFS
When space complexity isn't an issue

When to use DFS
In Order: When you want the nodes in order
Pre Order: To export a tree strucutre so that it is easily reconstructed
or copied.

*/


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
    // Time Complexity: O(log n)
    insert(value){
        let newNode = new Node(value)
        if (this.root === null){
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
    
    // Time Complexity: O(log n)
    find(value){
        if (!this.root) return false;
        let currentNode = this.root
        let found = false;
        while(currentNode && !found){
            console.log(currentNode);
            if (value < currentNode.value){
                currentNode = currentNode.left
            } else if (value > currentNode.value) {
                currentNode = currentNode.right
            } else{
                found = true
            }
        }
        return found;
    }

    BFS(){
        let data = [];
        let queue = [];
        let node = this.root;
        // Enqueue
        queue.push(this.root);
        while(queue.length){
            // Dequeue
            node = queue.shift()
            data.push(node.value);
            if (node.left) queue.push(node.left);      console.log(current)
            if (node.right) queue.push(node.right);
        }
        return data;
    }

    DFSPreOrder(){
        let data = [];
        let current = this.root;
        const traverse = (node) => {
            data.push(node);
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
        }
        traverse(current);
        return data;
    }

    DFSPostOrder(){
        let data = [];
        let current = this.root;
        const traverse = (node) => {
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
            data.push(node);
        }
        traverse(current);
        return data;
    }

    DFSInOrder(){
        let data = [];
        let current = this.root;
        const traverse = (node) => {
            if (node.left) traverse(node.left);
            data.push(node);
            if (node.right) traverse(node.right);
        }
        traverse(current);
        return data;
    }
}

let bst = new BinarySearchTree()

bst.insert(10);
bst.insert(6);
bst.insert(3);
bst.insert(15);
bst.insert(20);
bst.insert(8);
console.log("Found: ", bst.find(5));
console.log(bst.BFS()); //  => [ 10, 6, 15, 3, 20, 5 ]
console.log(bst.DFSPreOrder()); 
console.log(bst.DFSPostOrder()); 
console.log(bst.DFSInOrder()); 

