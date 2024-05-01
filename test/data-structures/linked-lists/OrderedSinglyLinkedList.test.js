"use strict";

import { assert } from "chai";
import { asserHeadAndTail, assertIterator, assertArrays } from "../../TestHelpers.js";
import {OrderedSinglyLinkedList, defaultCompare, order} from "../../../index.js";
import { NotSupportedError } from "../../../utils/Errors.js";

export default function test() {
    describe('OrderedSinglyLinkedList Tests', () => {
        it('create an empty list', () => {
            const list = new OrderedSinglyLinkedList();
            assert.equal(list.isEmpty(), true);
        });

        it('one element list', () => {
            const list = new OrderedSinglyLinkedList();
            list.insert(1);
            assert.equal(list.head.data, 1);
            assert.equal(list.tail.data, 1);

            list.remove();
            assert.equal(list.isEmpty(), true);
        });

        it('ASC insertAll and iterator ', () => {
            const list = new OrderedSinglyLinkedList();
            let array = [99, 4, 6, 7, 55];
            list.insertAll(array);
            // order is not ASC
            array = [4, 6, 7, 55, 99];
            asserHeadAndTail(list, array[0], array[4]);
            assertIterator(list, array);
            list.clear();
            assert.equal(list.isEmpty(), true);
        });

        it('DESC insertAll and iterator ', () => {
            const list = new OrderedSinglyLinkedList(defaultCompare, order.DESC);
            let array = [99, 4, 6, 7, 55];
            list.insertAll(array);
            // order is not ASC
            array = [99, 55, 7, 6, 4];
            asserHeadAndTail(list, array[0], array[4]);
            assertIterator(list, array);
            list.clear();
            assert.equal(list.isEmpty(), true);
        });

        it(' isEmpty, contains ', () => {
            const list = new OrderedSinglyLinkedList(defaultCompare, order.DESC);
            assert.equal(list.isEmpty(), true);
            let array = [99, 4, 6, 7, 55];
            list.insertAll(array);

            assert.equal(list.isEmpty(), false);
            asserHeadAndTail(list, 99, 4);

            assert.equal(list.contains(7), true);
            assert.equal(list.contains(-1), false);
        });

        it(' append', () => {
            const list = new OrderedSinglyLinkedList();
            assert.equal(list.isEmpty(), true);
            let array = [1, 2, 3, 4];
            list.insertAll(array);
            array[4] = 5
            assert.equal(list.append(array[4]), true);
            assert.equal(list.append(array[0]), false);

            asserHeadAndTail(list, 1, 5);
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
            try {
                list.appendAll([10, 100]);
            } catch (error) {
                assert.equal(error instanceof NotSupportedError, true);
            }

        });

        it('remove, removeLast ', () => {
            const list = new OrderedSinglyLinkedList();
            const array = [99, 4, 6, 7, 55];
            list.insertAll(array);

            list.remove();
            assertIterator(list, [6, 7, 55, 99]);
            list.removeLast();
            assertIterator(list, [6, 7, 55]);
            list.clear();
            assert.equal(list.isEmpty(), true);

            list.remove();
            list.removeLast();
            assert.equal(list.isEmpty(), true);
        });

        it('removeData', () => {
            const list = new OrderedSinglyLinkedList(defaultCompare, order.DESC);
            const array = [99, 4, 6, 7, 55];
            list.insertAll(array);

            list.removeData(99);
            assertIterator(list, [55, 7, 6, 4]);
            asserHeadAndTail(list, 55, 4);

            list.removeData(4);
            assertIterator(list, [55, 7, 6]);
            asserHeadAndTail(list,55, 6);

            list.removeData(7);
            assertIterator(list, [55, 6]);
            asserHeadAndTail(list,55, 6);
        });

        it('indexOf, lastIndexOf', () => {
            const list = new OrderedSinglyLinkedList();
            let array = [99, 7, 4, 6, 7, 55, 99, 3, 6, 44, 99, 1, 2];
            list.insertAll(array);

            array = [1, 2, 3, 4, 6, 6, 7, 7, 44, 55, 99, 99, 99]
            assertArrays(array, list.toArray());

            assert.equal(list.indexOf(99), 10);
            assert.equal(list.lastIndexOf(99), 12);
            assert.equal(list.indexOf(1), 0);
            assert.equal(list.lastIndexOf(1), 0);
            assert.equal(list.indexOf(7), 6);
            assert.equal(list.lastIndexOf(7), 7);
        });

        it('DESC toArray', () => {
            const list = new OrderedSinglyLinkedList(defaultCompare, order.DESC);
            let array = [99, 7, 4, 6, 7, 55, 99, 3, 6, 44, 99, 1, 2];
            list.insertAll(array);
            array = [99, 99, 99, 55, 44, 7, 7, 6, 6, 4, 3, 2, 1];
            assertArrays(array, list.toArray());
        });

        it('DESC order with strings', () => {
            function compare (str1, str2) {
                return str1.localeCompare(str2);
            }

            const list = new OrderedSinglyLinkedList(compare, order.DESC);
            let array = ['Vanja', 'Petkovic', 'Vesna', 'Pas', 'Novine'];
            list.insertAll(array);
            array = [ 'Vesna', 'Vanja', 'Petkovic', 'Pas', 'Novine' ]
            assertArrays(array, list.toArray());
        });

        it('10000 items ', () => {
            const list = new OrderedSinglyLinkedList();
            let min, max, random;
            let array = [];
            for (let index = 0; index < 10000; index++) {
                random = Math.random();
                if (min === undefined && max === undefined) {
                    min = random;
                    max = random;
                } else {
                    if (random < min) {
                        min = random;
                    }

                    if (random > max) {
                        max = random;
                    }
                }
                array[index] = random;
                list.insert(array[index]);
            }

            let compareTo;
            for (let item of list) {
                if (compareTo === undefined) {
                    compareTo = item;
                } else {
                    assert.equal(item < compareTo, false);
                }
            }
            asserHeadAndTail(list, min, max);
        });

    });
}

describe('SinglyLinkedList', () => {
    test();
});

