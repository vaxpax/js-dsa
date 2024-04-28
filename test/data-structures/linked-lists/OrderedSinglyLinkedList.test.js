"use strict";

import { assert } from "chai";
import { OrderedSinglyLinkedList } from "../../../index.js";
import { NotSupportedError } from "../../../utils/Errors.js";

export default function test() {
    describe('OrderedSinglyLinkedList Tests', () => {
        it('create an empty list', () => {
            const list = new OrderedSinglyLinkedList();
            assert.equal(list.isEmpty(), true);
        });

        it('one element list', () => {
            const list = new OrderedSinglyLinkedList();
            list.add(1);
            assert.equal(list.head.data, 1);
            assert.equal(list.tail.data, 1);

            list.remove();
            assert.equal(list.isEmpty(), true);
        });

        it('not supported methods: addFirst, set', () => {
            const list = new OrderedSinglyLinkedList();
            assert.equal(list.isEmpty(), true);
            try {
                list.addFirst(1);
            } catch (error) {
                assert.equal(error instanceof NotSupportedError, true);
            }
            try {
                list.set(10, 100);
            } catch (error) {
                assert.equal(error instanceof NotSupportedError, true);
            }
        });

    });

    return this;
}

// describe('SinglyLinkedList', () => {
//     test();
// });

