import {AdjacencyMatrixGraph} from "../../data-structures/graphs/AdjacencyMatrixGraph.js";

/**
 *@summary Class encapsulating Dijkstra's algorithm for searching weighted graphs.
 * @classdesc
 * @memberof graphs
 */
class Dijkstra extends AdjacencyMatrixGraph {
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
        const distances = Array(this.adjacencyMatrix.length).fill(Number.MAX_SAFE_INTEGER);

        distances[source] = 0;
        for (let i = 0; i < this.adjacencyMatrix.length; i++) {
            let u = this._findMinDistance(distances, visited);
            visited[u] = true;

            // Update all the neighboring vertex distances
            for (let v = 0; v < this.adjacencyMatrix.length; v++) {
                if (!visited[v] && this.adjacencyMatrix[u][v] !== 0
                        && (distances[u] + this.adjacencyMatrix[u][v] < distances[v])) {
                    distances[v] = distances[u] + this.adjacencyMatrix[u][v];
                }
            }
        }

        return distances;
    }

    _findMinDistance(distances, visited) {
        let minDistance = Number.MAX_SAFE_INTEGER;
        let minDistanceVertex = -1;
        for (let i = 0; i < distances.length; i++) {
            if (!visited[i] && distances[i] < minDistance) {
                minDistance = distances[i];
                minDistanceVertex = i;
            }
        }
        return minDistanceVertex;
    }
}

export {
    Dijkstra
}
