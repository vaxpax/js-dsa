"use strict";

import { assert } from "chai";
import { SinglyLinkedList } from "../../../index.js";

export default function test() {
    describe('SinglyLinkedList Tests', () => {
        it('create an empty list', () => {
            const list = new SinglyLinkedList();
            assert.equal(list.isEmpty(), true);
        });

        it('one element list', () => {
            const list = new SinglyLinkedList();
            list.add(1);
            assert.equal(list.head.data, 1);
            assert.equal(list.tail.data, 1);

            list.remove();
            assert.equal(list.isEmpty(), true);

            list.addFirst(1);
            assert.equal(list.head.data, 1);
            assert.equal(list.tail.data, 1);
        });

    });

    return this;
}

// describe('SinglyLinkedList', () => {
//     test();
// });

