"use strict";

import { assert } from "chai";
import { asserHeadAndTail, assertArrays } from "../../TestHelpers.js";
import { OrderedDoublyLinkedList, NotSupportedError, defaultCompare, Order } from "../../../index.js";

export default function test() {
    describe('OrderedDoublyLinkedList Tests', () => {
        it('create an empty list', () => {
            const list = new OrderedDoublyLinkedList();
            assert.equal(list.isEmpty(), true);
        });

        it('one element list', () => {
            const list = new OrderedDoublyLinkedList();
            list.insert(1);
            asserHeadAndTail(list, 1, 1);
        });

        it('insert', () => {
            let list = new OrderedDoublyLinkedList();
            list.insert(1);
            list.insert(3);
            list.insert(2);
            list.insert(5);
            list.insert(4);
            asserHeadAndTail(list, 1, 5);
            assertArrays([1, 2, 3, 4, 5], list.toArray());


            function compare(str1, str2) {
                return str1.localeCompare(str2);
            }
            let array = ['Zrikavac',  'Vanja', 'Pisac',  'Kuca',  'Brana', 'Auto'];
            list = new OrderedDoublyLinkedList(compare, Order.DESC);
            list.insert(array[5]);
            list.insert(array[3]);
            list.insert(array[2]);
            list.insert(array[4]);
            list.insert(array[1]);
            list.insert(array[0]);
            asserHeadAndTail(list, array[0], array[5]);
            assertArrays(array, list.toArray());
        });

        it(' append', () => {
            const list = new OrderedDoublyLinkedList();
            assert.equal(list.isEmpty(), true);
            let array = [1, 2, 3, 4];
            list.insertAll(array);
            array[4] = 4
            assert.equal(list.append(array[4]), true);
            assert.equal(list.append(array[0]), false);

            asserHeadAndTail(list, 1, 4);
            assertArrays(array, list.toArray());

        });

        it(' DESC append', () => {
            const list = new OrderedDoublyLinkedList(defaultCompare, Order.DESC);
            assert.equal(list.isEmpty(), true);
            let array = [1, 2, 3, 4];
            list.insertAll(array);
            array[4] = 4
            assert.equal(list.append(array[0]), true);
            assert.equal(list.append(array[4]), false);

            asserHeadAndTail(list, 4, 1);
            assertArrays([4, 3, 2, 1, 1], list.toArray());

        });

        it('insertAll', () => {
            const list = new OrderedDoublyLinkedList();
            let array = [3, 5, 7, 9, 1]
            list.insertAll(array);
            asserHeadAndTail(list, 1, 9);
            assertArrays(array.sort(), list.toArray());
        });

        it('not supported methods: addFirst, appendAll, set', () => {
            const list = new OrderedDoublyLinkedList();
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
            try {
                list.appendAll([10, 100]);
            } catch (error) {
                assert.equal(error instanceof NotSupportedError, true);
            }
        });
    });
}

// describe('SinglyLinkedList', () => {
//     test();
// });

