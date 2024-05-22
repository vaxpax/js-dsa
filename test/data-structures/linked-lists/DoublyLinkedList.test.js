"use strict";

import { assert } from "chai";
import { asserHeadAndTail, assertArrays } from "../../TestHelpers.js";
import { DoublyLinkedList } from "../../../index.js";

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

        it('append', () => {
            const list = new DoublyLinkedList();
            list.append(1);
            list.append(2);
            list.append(3);
            list.append(4);
            list.append(5);
            asserHeadAndTail(list, 1, 5);
            assertArrays([1, 2, 3, 4, 5], list.toArray());
        });

        it('appendAll', () => {
            const list = new DoublyLinkedList();
            const array = [1, 5, 25, 125, 625];
            list.appendAll(array);
            asserHeadAndTail(list, 1, 625);
            assertArrays([1, 5, 25, 125, 625], list.toArray());
        });

        it('addFirst', () => {
            const list = new DoublyLinkedList();
            const array = [1, 5, 25, 125, 625];
            list.appendAll(array);
            list.addFirst(300);
            asserHeadAndTail(list, 300, 625);
            assertArrays([300, 1, 5, 25, 125, 625], list.toArray());
        });

        it('clear', () => {
            const list = new DoublyLinkedList();
            const array = [1, 5, 25, 125, 625];
            list.appendAll(array);
            list.clear();
            assert.equal(list.isEmpty(), true);
        });

        it('contain', () => {
            const list = new DoublyLinkedList();
            const array = [1, 5, 25, 125, 625];
            list.appendAll(array);
            assert.equal(list.contains(5), true);
            assert.equal(list.contains(7), false);
        });

        it('indexOf', () => {
            const list = new DoublyLinkedList();
            const array = [1, 5, 25, 125, 625];
            list.appendAll(array);
            assert.equal(list.indexOf(25), 2);
            assert.equal(list.indexOf(1), 0);
            assert.equal(list.indexOf(625), 4);
            assert.equal(list.indexOf(30), -1);
        });

        it('lastIndexOf', () => {
            const list = new DoublyLinkedList();
            const array = [1, 5, 5, 25, 5, 7, 5, 5, 125, 625];
            list.appendAll(array);
            assert.equal(list.lastIndexOf(5), 7);
        });

        it('remove', () => {
            const list = new DoublyLinkedList();
            const array = [1, 5, 25, 125, 625];
            list.appendAll(array);
            list.remove();
            assertArrays([5, 25, 125, 625], list.toArray());
            assertArrays([625, 125, 25, 5], list.toArrayFromTail());
        });

        it('removeLast', () => {
            const list = new DoublyLinkedList();
            const array = [1, 5, 25, 125, 625];
            list.appendAll(array);
            list.removeLast();
            assertArrays([1, 5, 25, 125], list.toArray());
            assertArrays([125, 25, 5, 1], list.toArrayFromTail());
        });

        it('removeData', () => {
            const list = new DoublyLinkedList();
            const array = [1, 2, 3, 4, 5, 6, 7];
            list.appendAll(array);

            asserHeadAndTail(list, 1, 7);
            assertArrays(array, list.toArray());
            assertArrays([7, 6, 5, 4, 3, 2, 1], list.toArrayFromTail());

            list.removeData(7);
            array.pop();
            assertArrays(array, list.toArray());
            assertArrays([6, 5, 4, 3, 2, 1], list.toArrayFromTail());

            list.removeData(1);
            array.shift();
            assertArrays(array, list.toArray());
            assertArrays([6, 5, 4, 3, 2], list.toArrayFromTail());

            list.removeData(4);
            array.splice(array.indexOf(4), 1);
            assertArrays(array, list.toArray());
            assertArrays([6, 5, 3, 2], list.toArrayFromTail());
        });

        it('set', () => {
            const list = new DoublyLinkedList();
            const array = [1, 5, 25, 125, 625];
            list.appendAll(array);
            list.set(2, 1000);
            array[2] = 1000
            assertArrays(array, list.toArray());
        });

        it('insert', () => {
            const list = new DoublyLinkedList();
            list.insert(2, 0);
            assertArrays([2], list.toArray());
            list.insert(0, 0);
            assertArrays([0, 2], list.toArray());
            list.insert(1, 1);
            assertArrays([0, 1, 2], list.toArray());
            list.insert(3, 10);
            assertArrays([0, 1, 2, 3], list.toArray());
        });

        it('toArray, toArrayFromTail', () => {
            const list = new DoublyLinkedList();
            const array = [1, 5, 25, 125, 625]
            list.appendAll(array);
            assertArrays(array, list.toArray());
            assertArrays([625, 125, 25, 5, 1], list.toArrayFromTail());
        });

        it('iterator', () => {
            const list = new DoublyLinkedList();
            const array = [1, 5, 25, 125, 625]
            list.appendAll(array);

            asserHeadAndTail(list, 1, 625);
            let counter = 0;
            for(let item of list) {
                assert.equal(item, array[counter]);
                counter++;
            }
        });

    });
}

// describe('SinglyLinkedList', () => {
//     test();
// });

