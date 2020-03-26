
// Undirected Graph
class Graph {
    constructor(){
        this.adjacencyList = {}
    }

    addVertex(vertex){
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    addEdge(vertexOne, vertexTwo){
        this.adjacencyList[vertexOne].push(vertexTwo);
        this.adjacencyList[vertexTwo].push(vertexOne);
    }

    removeEdge(vertexOne, vertexTwo){
        let indexToRemoveOne = this.adjacencyList[vertexOne].indexOf(vertexTwo);
        this.adjacencyList[vertexOne].splice(indexToRemoveOne);
        let indexToRemoveTwo = this.adjacencyList[vertexTwo].indexOf(vertexOne);
        this.adjacencyList[vertexTwo].splice(indexToRemoveTwo);
        
    }

    removeVertex(vertex) {
        for(let edge of this.adjacencyList[vertex]) this.removeEdge(vertex, edge);
        delete this.adjacencyList[vertex]
      }
}

let g = new Graph();

g.addVertex('name');
g.addVertex('age');
g.addVertex('life');
g.addVertex('cat');
g.addEdge('name', 'life');
g.addEdge('name', 'age');
g.addEdge('name', 'cat');
console.log(g);
console.log(g.removeVertex('name'));
 
console.log(g.adjacencyList);



