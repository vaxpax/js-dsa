"use strict";

import {PriorityQueue, PriorityQueueType} from "../../../index.js";
import {assert} from "chai";


export default function test() {
    describe("PriorityQueue Test", () => {
        it('create an empty deque', () => {
            const heap = new PriorityQueue();
            assert.equal(heap.isEmpty(), true);
            assert.equal(heap.pop(), null);
        });
        it('build heap from array, push, pop, peek', () => {
            const heap = new PriorityQueue(PriorityQueueType.MAX,
                [1, 2, 3, 4, 7, 8, 9, 10, 14, 16]);
            assert.equal(heap.isEmpty(), false);
            assert.equal(heap.pop(), 16);
            assert.equal(heap.pop(), 14);

            heap.push(50);
            assert.equal(heap.pop(), 50);
            assert.equal(heap.peek(), 10);
        });
        it('swap', () => {
            const heap = new PriorityQueue(PriorityQueueType.MAX,
                [1, 2, 3, 4, 7, 8, 9, 10, 14, 16, 16]);
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
        it('findIndex, contains', () => {
            const heap = new PriorityQueue(PriorityQueueType.MAX,
                [1, 2, 3, 4, 7, 8, 9, 10, 14, 16]);
            assert.equal(heap.findIndex(500), -1);
            assert.equal(heap.findIndex(16), 0);
            assert.equal(heap.findIndex(14), 1);
            assert.equal(heap.contains(500), false);
            assert.equal(heap.contains(16), true);
        });
        it('build heap from array, push, pop, peek', () => {
            const heap = new PriorityQueue(PriorityQueueType.MIN,
                [16, 14, 10, 9, 8, 7, 4, 3, 2, 1]);
            assert.equal(heap.isEmpty(), false);
            assert.equal(heap.pop(), 1);
            assert.equal(heap.pop(), 2);

            heap.push(0);
            assert.equal(heap.pop(), 0);
            assert.equal(heap.peek(), 3);
        });
        it('swap', () => {
            const heap = new PriorityQueue(PriorityQueueType.MIN,
                [16, 14, 10, 9, 8, 7, 4, 3, 2, 1, 1]);
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

// describe('PriorityQueue', () => {
//     test();
// });
