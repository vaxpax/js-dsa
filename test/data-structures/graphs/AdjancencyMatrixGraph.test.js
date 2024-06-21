"use strict";

import {assert} from "chai";
import {assertMatrices, assertArrays} from "../../TestHelpers.js";

import {AdjacencyMatrixGraph, Trie} from "../../../index.js";

export default function test() {
    describe('AdjacencyMatrixGraph Tests', () => {
        it('empty graph', () => {
            const graph = new AdjacencyMatrixGraph();
            let matrixCompare = [];
            assert(matrixCompare, graph.adjacencyMatrix);

            graph.addVertex();
            matrixCompare = [
                [0]
            ];
            assertMatrices(matrixCompare, graph.adjacencyMatrix);


        });
        it('add, remove', () => {
            const graph = new AdjacencyMatrixGraph(5);
            let matrixCompare = [
                                        [0, 0, 0, 0, 0],
                                        [0, 0, 0, 0, 0],
                                        [0, 0, 0, 0, 0],
                                        [0, 0, 0, 0, 0],
                                        [0, 0, 0, 0, 0]
                                    ];
            assertMatrices(graph.adjacencyMatrix, matrixCompare);

            graph.addEdge(2,3);
            matrixCompare = [
                [ 0, 0, 0, 0, 0 ],
                [ 0, 0, 0, 0, 0 ],
                [ 0, 0, 0, 1, 0 ],
                [ 0, 0, 1, 0, 0 ],
                [ 0, 0, 0, 0, 0 ]
            ];
            assertMatrices(graph.adjacencyMatrix, matrixCompare);

            graph.addVertex();
            matrixCompare = [
                [ 0, 0, 0, 0, 0, 0 ],
                [ 0, 0, 0, 0, 0, 0 ],
                [ 0, 0, 0, 1, 0, 0 ],
                [ 0, 0, 1, 0, 0, 0 ],
                [ 0, 0, 0, 0, 0, 0 ],
                [ 0, 0, 0, 0, 0, 0 ]
            ];
            assertMatrices(graph.adjacencyMatrix, matrixCompare);

            graph.removeVertex(3);
            matrixCompare = [
                [ 0, 0, 0, 0, 0 ],
                [ 0, 0, 0, 0, 0 ],
                [ 0, 0, 0, 0, 0 ],
                [ 0, 0, 0, 0, 0 ],
                [ 0, 0, 0, 0, 0 ]
            ];
            assertMatrices(graph.adjacencyMatrix, matrixCompare);

            graph.addEdge(2, 3);
            graph.removeEdge(2, 3)
            matrixCompare = [
                [ 0, 0, 0, 0, 0 ],
                [ 0, 0, 0, 0, 0 ],
                [ 0, 0, 0, 0, 0 ],
                [ 0, 0, 0, 0, 0 ],
                [ 0, 0, 0, 0, 0 ]
            ];
            assertMatrices(graph.adjacencyMatrix, matrixCompare);
        });
        it('BFS, DFS', () => {
            const graph = new AdjacencyMatrixGraph(5);
            graph.addEdge(0, 1);
            graph.addEdge(0, 2);
            graph.addEdge(0, 3);
            graph.addEdge(0, 4);
            let result = graph.bfs(0);
            assertArrays(result, [0, 1, 2, 3, 4]);

            result = graph.dfs(0);
            assertArrays(result, [0, 1, 2, 3, 4]);
        });
    });
}

// describe('Trie', () => {
//     test();
// });
