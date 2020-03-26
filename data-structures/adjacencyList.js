
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
}

let g = new Graph();

g.addVertex('name');
g.addVertex('age');
g.addVertex('life');
g.addEdge('name', 'life');
console.log(g);

