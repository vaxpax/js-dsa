"use strict";

import {ArrayDeque} from "../../../index.js";
import {assert} from "chai";
import {assertArrays} from "../../TestHelpers.js";

export default function test() {
    describe("ArrayDeque Test", () => {
        it('create an empty deque', () => {
            const deque = new ArrayDeque();
            assert.equal(deque.isEmpty(), true);
            assert.equal(deque.peekFirst(), null);
            assert.equal(deque.peekLast(), null);
            assert.equal(deque.pollLast(), null);
            assert.equal(deque.pollLast(), null);
        });
        it('addFirst, addLast, clear', () => {
            const deque = new ArrayDeque();
            deque.addLast(3);
            assert.equal(deque.isEmpty(), false);
            assertArrays([3], deque.elements);
            deque.addFirst(2);
            assertArrays([2,3], deque.elements);
            deque.addFirst(1);
            assertArrays([1,2,3], deque.elements);
            deque.addLast(4);
            assertArrays([1,2,3,4], deque.elements);
            deque.clear();
            assert.equal(deque.isEmpty(), true);
        });
        it('insert, peek', () => {
            const deque = new ArrayDeque();
            deque.addLast(1);
            deque.addLast(2);
            deque.addLast(4);
            deque.insert(3, 2);
            assertArrays([1,2,3,4], deque.elements);

            assert.equal(1, deque.peekFirst());
            assert.equal(4, deque.peekLast());
            assertArrays([1,2,3,4], deque.elements);

            deque.clear();
            assert.equal(null, deque.peekFirst());
            assert.equal(null, deque.peekLast());
        });
        it('pollFirst, pollLast', () => {
            const deque = new ArrayDeque();
            deque.addLast(1);
            deque.addLast(2);
            deque.addLast(3);
            assert.equal(1, deque.pollFirst());
            assertArrays([2,3], deque.elements);
            assert.equal(3, deque.pollLast());
            assertArrays([2], deque.elements);
            deque.clear();
            assert.equal(null, deque.pollFirst());
            assert.equal(null, deque.pollLast());
        });

    });
}

// describe('ArrayDeque', () => {
//     test();
// });
