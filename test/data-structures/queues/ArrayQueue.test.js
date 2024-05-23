"use strict";

import {ArrayQueue} from "../../../index.js";
import {assert} from "chai";
import {assertArrays} from "../../TestHelpers.js";

export default function test() {
    describe("ArrayQueue Test", () => {
        it('create an empty queue', () => {
            const queue = new ArrayQueue();
            assert.equal(queue.isEmpty(), true);
        });
        it('addFirst, addLast, clear', () => {
            const queue = new ArrayQueue();
            queue.add(1);
            queue.add(2);
            queue.add(3);
            assert.equal(queue.isEmpty(), false);
            assertArrays([1,2,3], queue.elements);

            queue.clear();
            assert.equal(queue.isEmpty(), true);
        });
        it('insert, peek', () => {
            const queue = new ArrayQueue();
            queue.add(1);
            queue.add(2);
            queue.add(4);
            queue.insert(3, 2);
            assertArrays([1,2,3,4], queue.elements);

            assert.equal(1, queue.peek());
            assertArrays([1,2,3,4], queue.elements);

            queue.clear();
            assert.equal(null, queue.peek());
        });
        it('poll', () => {
            const queue = new ArrayQueue();
            queue.add(1);
            queue.add(2);
            queue.add(3);
            assert.equal(1, queue.poll());
            assertArrays([2,3], queue.elements);

            queue.clear();
            assert.equal(null, queue.poll());
        });
    });
}


// describe('ArrayQueue', () => {
//     test();
// });
