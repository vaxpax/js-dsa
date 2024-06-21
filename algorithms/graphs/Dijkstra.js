import {AdjacencyMatrixGraph} from "../../data-structures/graphs/AdjacencyMatrixGraph.js";

/**
 *@summary Class encapsulating Dijkstra's algorithm for searching weighted graphs.
 * @classdesc
 * @memberof graphs
 */
class  Dijkstra extends AdjacencyMatrixGraph {
    /**
     * @class Creates a new Dijkstra class.
     * @param verticesNumber - number of vertices in Graph. Default value is 0
     */
    constructor(verticesNumber = 0) {
        super(verticesNumber);
    }

    /**
     * Setting adjacency matrix
     * @param adjacencyMatrix - matrix to be set
     */
    setAdjacencyMatrix(adjacencyMatrix) {
        this.adjacencyMatrix = adjacencyMatrix;
    }

    /**
     * Run Dijkstra's algorithm on graph
     * @param source - vertex to start search from
     * @returns {any[]}  array of distances
     */
    search(source) {
        const visited = Array(this.adjacencyMatrix.length).fill(false);
        const distance = Array(this.adjacencyMatrix.length).fill(Number.MAX_SAFE_INTEGER);

        distance[source] = 0;
        for (let i = 0; i < this.adjacencyMatrix.length; i++) {
            let u = this.findMinDistance(distance, visited);
            visited[u] = true;

            // Update all the neighbouring vertex distances
            for (let v = 0; v < this.adjacencyMatrix.length; v++) {
                if (!visited[v] && this.adjacencyMatrix[u][v] !== 0
                        && (distance[u] + this.adjacencyMatrix[u][v] < distance[v])) {
                    distance[v] = distance[u] + this.adjacencyMatrix[u][v];
                }
            }
        }

        return distance;
    }

    /**
     * Method to find minimum distance
     * @param distance - array of distances
     * @param visited - array of visited vertices
     * @returns {number} minimal distance
     */
    findMinDistance(distance, visited) {
        let minDistance = Number.MAX_SAFE_INTEGER;
        let minDistanceVertex = -1;
        for (let i = 0; i < distance.length; i++) {
            if (!visited[i] && distance[i] < minDistance) {
                minDistance = distance[i];
                minDistanceVertex = i;
            }
        }
        return minDistanceVertex;
    }
}

export {
    Dijkstra
}
