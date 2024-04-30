"use strict";

import { assert } from "chai";
import {asserHeadAndTail, assertIterator, assertArrays} from "../../TestHelpers.js";
import {DoublyLinkedList} from "../../../index.js";

export default function test() {
    describe('DoublyLinkedList Tests', () => {
        it('create an empty list', () => {
            const list = new DoublyLinkedList();
            assert.equal(list.isEmpty(), true);
        });

        it('one element list', () => {
            const list = new DoublyLinkedList();
            list.append(1);
            asserHeadAndTail(list, 1, 1);
        });

        it('add', () => {
            const list = new DoublyLinkedList();
            list.append(1);
            list.append(2);
            list.append(3);
            list.append(4);
            list.append(5);

            asserHeadAndTail(list, 1, 5);
            assertArrays([1, 2, 3, 4, 5], list.toArray());
        });
    });
}

describe('SinglyLinkedList', () => {
    test();
});

