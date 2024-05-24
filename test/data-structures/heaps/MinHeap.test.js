"use strict";

import {MinHeap} from "../../../index.js";
import {assert} from "chai";


export default function test() {
    describe("MinHeap Test", () => {
        it('create an empty deque', () => {
            const heap = new MinHeap();
            assert.equal(heap.isEmpty(), true);
            assert.equal(heap.pop(), null);
        });
        it('build heap from array, push, pop, peek', () => {
            const heap = new MinHeap([16, 14, 10, 9, 8, 7, 4, 3, 2, 1]);
            assert.equal(heap.isEmpty(), false);
            assert.equal(heap.pop(), 1);
            assert.equal(heap.pop(), 2);

            heap.push(0);
            assert.equal(heap.pop(), 0);
            assert.equal(heap.peek(), 3);
        });
        it('swap', () => {
            const heap = new MinHeap([16, 14, 10, 9, 8, 7, 4, 3, 2, 1, 1]);
            assert.equal(heap.pop(), 1);
            heap.swap(2, 5);
            assert.equal(heap.peek(), 1);
            heap.swap(77, 87);
            assert.equal(heap.peek(), 1);
            heap.swap(1, 0);
            assert.equal(heap.peek(), 0);
        });
    });
}

// describe('MinHeap', () => {
//     test();
// });
