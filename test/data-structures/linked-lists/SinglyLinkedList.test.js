"use strict";

import { assert } from "chai";
import { asserHeadAndTail, assertIterator, assertArrays } from "../../TestHelpers.js";
import { SinglyLinkedList } from "../../../index.js";

export default function test() {
    describe('SinglyLinkedList Tests', () => {
        it('create an empty list', () => {
            const list = new SinglyLinkedList();
            assert.equal(list.isEmpty(), true);
        });

        it('one element list', () => {
            const list = new SinglyLinkedList();
            list.append(1);
            asserHeadAndTail(list, 1, 1);

            list.remove();
            assert.equal(list.isEmpty(), true);

            list.addFirst(1);
            asserHeadAndTail(list, 1, 1);
        });

        it('addAll and iterator', () => {
            const list = new SinglyLinkedList();
            const array = [99, 4, 6, 7, 55];
            list.appendAll(array);
            asserHeadAndTail(list, array[0], array[4]);
            assertIterator(list, array);
            list.clear();
            assert.equal(list.isEmpty(), true);
        });

        it('add, addFirst, isEmpty, contains ', () => {
            const list = new SinglyLinkedList();
            assert.equal(list.isEmpty(), true);

            list.append(5);
            assert.equal(list.isEmpty(), false);

            list.addFirst(7)
            list.append(6);
            assert.equal(list.indexOf(7), 0);
            assert.equal(list.indexOf(5), 1);
            assert.equal(list.indexOf(6), 2);

            asserHeadAndTail(list, 7, 6);

            assert.equal(list.contains(7), true);
            assert.equal(list.contains(-1), false);
        });

        it('remove, removeLast ', () => {
            const list = new SinglyLinkedList();
            const array = [99, 4, 6, 7, 55];
            list.appendAll(array);

            list.remove();
            assertIterator(list, [4, 6, 7, 55]);
            list.removeLast();
            assertIterator(list, [4, 6, 7]);
            list.clear();
            assert.equal(list.isEmpty(), true);

            list.remove();
            list.removeLast();
            assert.equal(list.isEmpty(), true);
        });

        it('removeData', () => {
            const list = new SinglyLinkedList();
            const array = [99, 4, 6, 7, 55];
            list.appendAll(array);

            list.removeData(99);
            assertIterator(list, [4, 6, 7, 55]);
            asserHeadAndTail(list, 4, 55);

            list.removeData(55);
            assertIterator(list, [4, 6, 7]);
            asserHeadAndTail(list,4, 7);

            list.removeData(6);
            assertIterator(list, [4, 7]);
            asserHeadAndTail(list,4, 7);

        });

        it('set', () => {
            const list = new SinglyLinkedList();
            const array = [99, 4, 6, 7, 55];
            list.appendAll(array);

            list.set(0, 12);
            assertIterator(list, [12, 4, 6, 7, 55])

            list.set(4, 444);
            assertIterator(list, [12, 4, 6, 7, 444])

            list.set(1, 5);
            list.set(2, 7);
            list.set(3, 300);
            assertIterator(list, [12, 5, 7, 300, 444])
        });

        it('indexOf, lastIndexOf', () => {
            const list = new SinglyLinkedList();
            const array = [99, 7, 4, 6, 7, 55, 99, 3, 6, 44, 99, 1, 2];
            list.appendAll(array);
            assert.equal(list.indexOf(99), 0);
            assert.equal(list.lastIndexOf(99), 10);
            assert.equal(list.indexOf(1), 11);
            assert.equal(list.lastIndexOf(1), 11);
            assert.equal(list.indexOf(2), 12);
        });

        it('toArray', () => {
            const list = new SinglyLinkedList();
            const array = [55, 99, 3, 6, 5];
            list.appendAll(array);
            assertArrays(array, list.toArray());

        });

        it('10000 items ', () => {
            const list = new SinglyLinkedList();
            let array = [];
            for (let index = 0; index < 10000; index++) {
                array[index] = Math.random();
                list.append(array[index]);
            }
            assertIterator(list, array);
            asserHeadAndTail(list, array[0], array[9999]);
        });
    });
}

// describe('SinglyLinkedList', () => {
//     test();
// });

