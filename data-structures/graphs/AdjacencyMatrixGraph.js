"use strict";

/**@namespace graphs*/

import {ArrayQueue} from "../queues/ArrayQueue.js";

/**
 *@summary Class encapsulating Graph represented with Adjacency Matrix.
 * @classdesc
 * @memberof graphs
 */
class AdjacencyMatrixGraph {
    /**
     *
     * @param verticesNumber - number of vertices in Graph. Default value is 0
     */
    constructor(verticesNumber = 0) {
        this.adjacencyMatrix = [];
        for (let i = 0; i < verticesNumber; i++) {
            this.adjacencyMatrix[i] = new Array(verticesNumber);
            this.adjacencyMatrix[i].fill(0);
        }
    }

    /**
     * Adding vertex to the Graph
     */
    addVertex() {
        this.adjacencyMatrix.push(new Array(this.adjacencyMatrix.length).fill(0))
        for(let i = 0; i < this.adjacencyMatrix.length; i++) {
            this.adjacencyMatrix[i].push(0);
        }
    }

    /**
     * Remove vertex from the Graph
     * @param i - index of vertex to be removed
     */
    removeVertex(i) {
        for (let j = 0; j < this.adjacencyMatrix.length; j++) {
            this.adjacencyMatrix[j].splice(i, 1);
        }
        this.adjacencyMatrix.splice(i, 1)
    }

    /**
     * Adding edge between vertices on index i and j
     * @param i - index of first Vertex
     * @param j - index of second Vertex
     */
    addEdge(i, j) {
        this.adjacencyMatrix[i][j] = 1;
        this.adjacencyMatrix[j][i] = 1;
    }

    /**
     * Remove edge between vertex on index i and index j
     * @param i
     * @param j
     */
    removeEdge(i, j) {
        this.adjacencyMatrix[i][j] = 0;
        this.adjacencyMatrix[j][i] = 0;
    }

    bfs(start) {
        let answer = [];
        this._bfs(start, answer);
        return answer;
    }

    _bfs(start, answer) {
        const visited = Array(this.adjacencyMatrix.length).fill(false);
        const q = new ArrayQueue();
        q.add(start);

        let current;
        while (q.elements.length >0) {
            current = q.poll();
            answer.push(current)
            visited[current] = true;
            for (let i = 0; i < this.adjacencyMatrix[current].length; i++) {
                if (this.adjacencyMatrix[current][i] === 1 && !visited[i]) {
                    q.add(i);
                }
            }
        }
    }

    dfs(start) {
        let answer = [];
        const visited = new Array(this.adjacencyMatrix.length).fill(false);
        this._dfs(start, visited, answer);
        return answer;
    }

    _dfs(start, visited, answer) {
        answer.push(start);
        visited[start] = true;
        for (let i = 0; i < this.adjacencyMatrix.length; i++) {
            if (this.adjacencyMatrix[start][i] === 1 && !visited[i]) {
                this._dfs(i, visited, answer);
            }
        }
    }

    _print() {
        console.log(this.adjacencyMatrix);
    }
}

export {
    AdjacencyMatrixGraph
}
