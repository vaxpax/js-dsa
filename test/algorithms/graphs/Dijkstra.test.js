import {assert} from "chai";
import {Dijkstra, GCD} from "../../../index.js";
import {assertArrays} from "../../TestHelpers.js";

export default function test() {
    describe("Dijkstra Test", () => {
        const result = [0, 3, 1, 2, 4, 4, 3];
        it('search example 1', () => {
            const matrix = [
                [0, 0, 1, 2, 0, 0, 0],
                [0, 0, 2, 0, 0, 3, 0 ],
                [1, 2, 0, 1, 3, 0, 0 ],
                [2, 0, 1, 0, 0, 0, 1],
                [0, 0, 3, 0, 0, 2, 0],
                [0, 3, 0, 0, 2, 0, 1],
                [0, 0, 0, 1, 0, 1, 0]
            ];
            const dijkstra = new Dijkstra();
            dijkstra.setAdjacencyMatrix(matrix);
            const distances = dijkstra.search(0);
            assertArrays(result, distances);
        });

        it('search example 2', () => {
            const result = [0, 4, 12, 19, 21, 11, 9, 8, 14];
            const matrix =  [
                [ 0, 4, 0, 0, 0, 0, 0, 8, 0 ],
                [ 4, 0, 8, 0, 0, 0, 0, 11, 0 ],
                [ 0, 8, 0, 7, 0, 4, 0, 0, 2 ],
                [ 0, 0, 7, 0, 9, 14, 0, 0, 0],
                [ 0, 0, 0, 9, 0, 10, 0, 0, 0 ],
                [ 0, 0, 4, 14, 10, 0, 2, 0, 0],
                [ 0, 0, 0, 0, 0, 2, 0, 1, 6 ],
                [ 8, 11, 0, 0, 0, 0, 1, 0, 7 ],
                [ 0, 0, 2, 0, 0, 0, 6, 7, 0 ]
            ];
            const dijkstra = new Dijkstra();
            dijkstra.setAdjacencyMatrix(matrix);
            const distances = dijkstra.search(0);
            assertArrays(result, distances);
        });
    });
}

// describe('Prime', () => {
//     test();
// });
