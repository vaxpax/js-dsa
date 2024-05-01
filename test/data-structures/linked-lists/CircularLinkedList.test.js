"use strict";

import { assert } from "chai";
import {assertHeadAndLast, assertIterator, assertArrays} from "../../TestHelpers.js";
import {CircularLinkedList, defaultCompare, order} from "../../../index.js";
import {NotSupportedError} from "../../../utils/Errors.js";


export default function test() {
    describe('CircularLinkedList Tests', () => {
        it('create an empty list', () => {
            const list = new CircularLinkedList();
            assert.equal(list.isEmpty(), true);
        });

        it('one element list', () => {
            const list = new CircularLinkedList();
            list.append(1);
            assertHeadAndLast(list, 1, 1);
            assert.equal(list.isCircular(), true);
        });

        it('two element list', () => {
            const list = new CircularLinkedList();
            list.append(1);
            list.append(2);
            assertHeadAndLast(list, 1, 2);
            assert.equal(list.isCircular(), true);
        });

        it('appendAll', () => {
            const list = new CircularLinkedList();
            const array = [1, 2, 3, 4, 5];
            list.appendAll(array);
            assert.equal(list.isCircular(), true);
            assertArrays(array, list.toArray());
        });

        it('removeAt', () => {
            const list = new CircularLinkedList();
            const array = [1, 2, 3, 4, 5, 6, 7];
            list.appendAll(array);

            list.removeAt(6);
            array.pop()
            assertArrays(array, list.toArray());
            assert.equal(list.isCircular(), true);
            assertHeadAndLast(list, 1, 6);

            list.removeAt(0);
            array.shift();
            assertArrays(array, list.toArray());
            assert.equal(list.isCircular(), true);
            assertHeadAndLast(list, 2, 6);

            list.removeAt(array.indexOf(4));
            array.splice(array.indexOf(4), 1);
            assertArrays(array, list.toArray());
            assert.equal(list.isCircular(), true);
            assertHeadAndLast(list, 2, 6);

            list.clear();
            assert.equal(list.isEmpty(), true);
            list.append(300);
            list.removeAt(0);
            assert.equal(list.isEmpty(), true);

            list.appendAll([100, 200]);
            list.removeAt(0);
            assertArrays([200], list.toArray());
            assert.equal(list.isCircular(), true);
            assertHeadAndLast(list, 200, 200);

            list.clear();
            list.appendAll([100, 200]);
            list.removeAt(1);
            assertArrays([100], list.toArray());
            assert.equal(list.isCircular(), true);
            assertHeadAndLast(list, 100, 100);
        });

        it('removeData', () => {
            const list = new CircularLinkedList();
            const array = [1, 2, 3, 4, 5, 6, 7];
            list.appendAll(array);

            list.removeData(7);
            array.pop()
            assertArrays(array, list.toArray());
            assert.equal(list.isCircular(), true);
            assertHeadAndLast(list, 1, 6);

            list.removeData(1);
            array.shift();
            assertArrays(array, list.toArray());
            assert.equal(list.isCircular(), true);
            assertHeadAndLast(list, 2, 6);

            list.removeData(4);
            array.splice(array.indexOf(4), 1);
            assertArrays(array, list.toArray());
            assert.equal(list.isCircular(), true);
            assertHeadAndLast(list, 2, 6);

            list.clear();
            assert.equal(list.isEmpty(), true);
            list.append(300);
            list.removeData(300);
            assert.equal(list.isEmpty(), true);

            list.appendAll([100, 200]);
            list.removeData(100);
            assertArrays([200], list.toArray());
            assert.equal(list.isCircular(), true);
            assertHeadAndLast(list, 200, 200);

            list.clear();
            list.appendAll([100, 200]);
            list.removeData(200);
            assertArrays([100], list.toArray());
            assert.equal(list.isCircular(), true);
            assertHeadAndLast(list, 100, 100);
        });

        it('indexOf', () => {
            const list = new CircularLinkedList();
            const array = [1, 2, 3, 4, 5];
            list.appendAll(array);
            assert.equal(list.indexOf(1), 0);
            assert.equal(list.indexOf(5), 4);
            assert.equal(list.indexOf(3), 2);

            list.clear();
            list.append(10);
            assert.equal(list.indexOf(10), 0);
            list.append(20);
            assert.equal(list.indexOf(10), 0);
            assert.equal(list.indexOf(20), 1);
            assert.equal(list.indexOf(30), -1);
        });

        it('lastIndexOf', () => {
            const list = new CircularLinkedList();
            const array = [1, 2, 3, 4, 4, 5];
            list.appendAll(array);
            assert.equal(list.lastIndexOf(1), 0);
            assert.equal(list.lastIndexOf(5), 5);
            assert.equal(list.lastIndexOf(3), 2);
            assert.equal(list.lastIndexOf(4), 4);
        });

        it('contains', () => {
            const list = new CircularLinkedList();
            const array = [1, 2, 3, 4, 5];
            list.appendAll(array);
            assert.equal(list.contains(4), true);
            assert.equal(list.contains(400), false);
        });

        it('set', () => {
            const list = new CircularLinkedList();
            const array = [1, 2, 3, 4, 5];
            list.appendAll(array);

            list.set(0, 100);
            array[0] = 100;
            list.set(2, 300);
            array[2] = 300;
            list.set(4, 500)
            array[4] = 500;
            assertArrays(array, list.toArray());
        });

    });
}

describe('SinglyLinkedList', () => {
    test();
});

