"use strict";

import {Stack} from "../../../index.js";
import {assert} from "chai";
import {assertArrays} from "../../TestHelpers.js";

export default function test() {
    describe('Stack Tests', () => {
        it('create an empty stack', () => {
            const stack = new Stack();
            assert.equal(stack.isEmpty(), true);
        });
        it('push, clear', () => {
            const stack = new Stack();
            stack.push(1);
            stack.push(2);
            stack.push(3);
            assert.equal(stack.isEmpty(), false);
            assertArrays([1,2,3], stack.elements);

            stack.clear();
            assert.equal(stack.isEmpty(), true);
        });
        it('insert, peek', () => {
            const stack = new Stack();
            stack.push(1);
            stack.push(2);
            stack.push(4);
            stack.insert(3, 2);
            assertArrays([1,2,3,4], stack.elements);

            assert.equal(4, stack.peek());
            assertArrays([1,2,3,4], stack.elements);

            stack.clear();
            assert.equal(null, stack.peek());
        });
        it('pop', () => {
            const stack = new Stack();
            stack.push(1);
            stack.push(2);
            stack.push(3);
            assert.equal(3, stack.pop());
            assertArrays([1,2], stack.elements);

            stack.clear();
            assert.equal(null, stack.pop());
        });
    });
}

// describe('Stack', () => {
//     test();
// });
