"use strict";

import { assert } from "chai";
import {asserHeadAndTail, assertIterator, assertArrays} from "../../TestHelpers.js";
import {OrderedDoublyLinkedList, defaultCompare, order, OrderedSinglyLinkedList} from "../../../index.js";
import {NotSupportedError} from "../../../utils/Errors.js";


export default function test() {
    describe('OrderedDoublyLinkedList Tests', () => {
        it('create an empty list', () => {
            const list = new OrderedDoublyLinkedList();
            assert.equal(list.isEmpty(), true);
        });

        it('one element list', () => {
            const list = new OrderedDoublyLinkedList();
            list.append(1);
            asserHeadAndTail(list, 1, 1);
        });

        it('append', () => {
            let list = new OrderedDoublyLinkedList();
            list.append(1);
            list.append(3);
            list.append(2);
            list.append(5);
            list.append(4);
            asserHeadAndTail(list, 1, 5);
            assertArrays([1, 2, 3, 4, 5], list.toArray());


            function compare(str1, str2) {
                return str1.localeCompare(str2);
            }
            let array = ['Zrikavac',  'Vanja', 'Pisac',  'Kuca',  'Brana', 'Auto'];
            list = new OrderedDoublyLinkedList(compare, order.DESC);
            list.append(array[5]);
            list.append(array[3]);
            list.append(array[2]);
            list.append(array[4]);
            list.append(array[1]);
            list.append(array[0]);
            asserHeadAndTail(list, array[0], array[5]);
            assertArrays(array, list.toArray());
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
}

// describe('SinglyLinkedList', () => {
//     test();
// });

