
// Undirected Graph
class Graph {
    constructor(){
        this.adjacencyList = {}
    }

    addVertex(vertex){
        if (!this.adjacencyList[vertex] this.adjacencyList[vertex] = [];
    }
}

let g = new Graph();

g.addVertex('name');
g.addVertex('age');
g.addVertex('life');
console.log(g);

