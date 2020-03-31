
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

      DFSRecursive(start){
          const result = [];
          const visited = {};
          const adjacencyList = this.adjacencyList;
          (function dfs(vertex){
            if (!vertex) return null;
            visited[vertex] = true;
            result.push(vertex);
            adjacencyList[vertex].forEach( neighbor => {
                if(!visited[neighbor]){
                    return dfs(neighbor);
                }
            });
        })(start);
      }
}

let g = new Graph();

g.addVertex('A')
g.addVertex('B')
g.addVertex('C')
g.addVertex('D')
g.addVertex('E')
g.addVertex('F')

g.addEdge('A','B')
g.addEdge('A','C')
g.addEdge('B','D')
g.addEdge('C','E')
g.addEdge('D','E')
g.addEdge('D','F')
g.addEdge('E','F')
g.DFSRecursive("A")



