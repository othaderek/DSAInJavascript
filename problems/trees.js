/*
* Node: value, left, right
* Tree: root
* Breadth first search uses a queue to store tree nodes
* 
*
* this.root == 5, val == 1
* this.root.left == 3
* If we set current then at a point current will be null 
*                5
*              4   6
*            3       7
*      Add nodes to queue (fifo)
*     queue = [store the nodes]
*     result = [5, 4, 6, 3, 7]
 */

class Tree {
  constructor(){
    this.root = null;
  }

  insert = (val) => {
    // First check if root is null, if it is set new node to root, return this;
    // check if val < root.node, if it is check if root.left is null, if it is set
    // if it isnt traverse down
    let newNode = new Node(val);
    if (this.root == null){
      this.root = newNode;
      return this;
    }
    let current = this.root;
    while (true){
      if (val < current.value){
        if (current.left == null){
          current.left = newNode;
          return this;
        } else {
          current = current.left;
        }
      } else {
        if (current.right == null){
          current.right = newNode;
          return this;
        } else {
          current = current.right;
        }
      }
    }
    return this;
  }

  breadthFirstSearch = () => {
    // create a queue and loop as long as there is something in the queue;
    // create a variable to store visited nodes
    // place root node in queue and being loop
    // dequeue (or shift) and check if there is a left or right (or children)
    // add value or node to visited array
    // if there is a left add it to queue, if right add to queue
    // then continue the loop
    let queue = [];
    let visited = [];
    let current;
    queue.push(this.root);
    while (queue.length){
      current = queue.shift();
      visited.push(current.value);
      if (current.left != null){
        queue.push(current.left)
      }
      if (current.right != null){
        queue.push(current.right);
      }
    }
    return visited;
  }

  dfsPreOrder = () => {
    let data = [];
    const traverse = (node) => {
      console.log(node.value)
      data.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(this.root)
    return data;
  }

  dfsPostOrder = () => {
    let data = [];
    const traverse = (node) => {
      console.log(node.value)
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.value);
    }
    traverse(this.root)
    return data;
  }

  dfsInOrder = () => {
    let data = [];
    const traverse = (node) => {
      console.log(node.value)
      if (node.left) traverse(node.left);
      data.push(node.value);
      if (node.right) traverse(node.right);
    }
    traverse(this.root)
    return data;
  }


}

class Node{
  constructor(val){
    this.value = val;
    this.right = null;
    this.left = null;
  }
}

let t1 = new Tree();
t1.insert(5);
t1.insert(4);
t1.insert(3);
t1.insert(6);
t1.insert(7);
t1.insert(100)

t1.root.right.right

// t1.breadthFirstSearch(); // [5, 4, 6, 3, 7, 100]
t1.dfsPreOrder();