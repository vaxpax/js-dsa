"use strict";

import {MaxHeap} from "../../../index.js";
import {assert} from "chai";


export default function test() {
    describe("MaxHeap Test", () => {
        it('create an empty deque', () => {
            const heap = new MaxHeap();
            assert.equal(heap.isEmpty(), true);
            assert.equal(heap.pop(), null);
        });
        it('build heap from array, push, pop, peek', () => {
            const heap = new MaxHeap([1, 2, 3, 4, 7, 8, 9, 10, 14, 16]);
            assert.equal(heap.isEmpty(), false);
            assert.equal(heap.pop(), 16);
            assert.equal(heap.pop(), 14);

            heap.push(50);
            assert.equal(heap.pop(), 50);
            assert.equal(heap.peek(), 10);
        });
        it('swap', () => {
            const heap = new MaxHeap([1, 2, 3, 4, 7, 8, 9, 10, 14, 16, 16]);
            assert.equal(heap.pop(), 16);
            heap.swap(14, 15);
            assert.equal(heap.peek(), 16);
            heap.swap(77, 87);
            assert.equal(heap.peek(), 16);
            heap.swap(16, 20);
            assert.equal(heap.peek(), 20);
            heap.swap(1, 30);
            assert.equal(heap.peek(), 30);
            heap.swap(7, 40);
            assert.equal(heap.peek(), 40);
        });
    });
}

// describe('MaxHeap', () => {
//     test();
// });
