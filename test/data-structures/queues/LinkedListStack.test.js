"use strict";

import {LinkedListStack} from "../../../index.js";
import {assert} from "chai";
import {assertArrays} from "../../TestHelpers.js";

export default function test() {
    describe('LinkedListStack Tests', () => {
        it('create an empty stack', () => {
            const stack = new LinkedListStack();
            assert.equal(stack.isEmpty(), true);
        });
        it('push, clear', () => {
            const stack = new LinkedListStack();
            stack.push(1);
            stack.push(2);
            stack.push(3);
            assert.equal(stack.isEmpty(), false);
            assertArrays([1,2,3], stack.elements.toArray());

            stack.clear();
            assert.equal(stack.isEmpty(), true);
        });
        it('insert, peek', () => {
            const stack = new LinkedListStack();
            stack.push(1);
            stack.push(2);
            stack.push(4);
            stack.insert(3, 2);
            assertArrays([1,2,3,4], stack.elements.toArray());

            assert.equal(4, stack.peek());
            assertArrays([1,2,3,4], stack.elements.toArray());

            stack.clear();
            assert.equal(null, stack.peek());
        });
        it('pop', () => {
            const stack = new LinkedListStack();
            stack.push(1);
            stack.push(2);
            stack.push(3);
            assert.equal(3, stack.pop());
            assertArrays([1,2], stack.elements.toArray());

            stack.clear();
            assert.equal(null, stack.pop());
        });
    });
}

// describe('ArrayStack', () => {
//     test();
// });
