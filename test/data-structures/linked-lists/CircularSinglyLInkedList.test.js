"use strict";

import { assert } from "chai";
import { assertHeadAndLast, assertArrays } from "../../TestHelpers.js";
import { CircularSinglyLinkedList} from "../../../index.js";

export default function test() {
    describe('CircularSinglyLinkedList Tests', () => {
        it('create an empty list', () => {
            const list = new CircularSinglyLinkedList();
            assert.equal(list.isEmpty(), true);
        });
        it('one element list', () => {
            const list = new CircularSinglyLinkedList();
            list.append(1);
            assertHeadAndLast(list, 1, 1);
            assert.equal(list.isCircular(), true);
        });
        it('two element list', () => {
            const list = new CircularSinglyLinkedList();
            list.append(1);
            list.append(2);
            assertHeadAndLast(list, 1, 2);
            assert.equal(list.isCircular(), true);
        });
        it('appendAll', () => {
            const list = new CircularSinglyLinkedList();
            const array = [1, 2, 3, 4, 5];
            list.appendAll(array);
            assert.equal(list.isCircular(), true);
            assertArrays(array, list.toArray());
        });
        it('removeAt', () => {
            const list = new CircularSinglyLinkedList();
            let array = [1, 2, 3, 4, 5, 6, 7];
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
            array = [100, 200]
            array.pop();
            assertArrays(array, list.toArray());
            assert.equal(list.isCircular(), true);
            assertHeadAndLast(list, 100, 100);
        });
        it('removeData', () => {
            const list = new CircularSinglyLinkedList();
            let array = [1, 2, 3, 4, 5, 6, 7];
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

            array = [100, 200];
            list.appendAll([100, 200]);
            list.removeData(100);
            array.splice(0, 1);
            assertArrays(array, list.toArray());
            assert.equal(list.isCircular(), true);
            assertHeadAndLast(list, array[0], array[0]);

            list.clear();
            array = [100, 200];
            list.appendAll([100, 200]);
            array.pop()
            list.removeData(200);
            assertArrays(array, list.toArray());
            assert.equal(list.isCircular(), true);
            assertHeadAndLast(list, array[0], array[0]);
        });
        it('removeRange', () => {
            const list = new CircularSinglyLinkedList();

            // from middle of the list
            list.clear();
            let array = [1, 2, 3, 4, 5];
            list.appendAll(array);
            list.removeRange(1, 3);
            array.splice(1, 3)
            assertArrays(array, list.toArray());
            assertHeadAndLast(list, array[0], array[array.length-1]);

            // head included but not last, + direction
            list.clear();
            array = [1, 2, 3, 4, 5];
            list.appendAll(array);
            list.removeRange(0, 2);
            array.splice(0, 2);
            assertArrays(array, list.toArray());
            assertHeadAndLast(list, array[0], array[array.length-1]);

            // remove exact lenght of list
            list.clear();
            array = [1, 2, 3, 4, 5];
            list.appendAll(array);
            list.removeRange(0, 5);
            array.splice(0, 5)
            assertArrays(array, list.toArray());
            assert.equal(list.isEmpty(), true);

            // remove bigger than length of list
            list.clear();
            array = [1, 2, 3, 4, 5];
            list.appendAll(array);
            list.removeRange(0, 8);
            array.splice(0, 8)
            assertArrays(array, list.toArray());
            assert.equal(list.isEmpty(), true);

            // remove starting fom last element - without hed
            list.clear();
            array = [1, 2, 3, 4, 5];
            list.appendAll(array);
            list.removeRange(4, 1);
            array.splice(4, 1)
            assertArrays(array, list.toArray());
            assertHeadAndLast(list, array[0], array[array.length-1]);

            // remove starting fom last element include head
            list.clear();
            array = [1, 2, 3, 4, 5];
            list.appendAll(array);
            list.removeRange(4, 3);
            array.splice(4, 3)
            assertArrays([3,4], list.toArray());
            assertHeadAndLast(list, 3, 4);

        });
        it('indexOf', () => {
            const list = new CircularSinglyLinkedList();
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
            const list = new CircularSinglyLinkedList();
            const array = [1, 2, 3, 4, 4, 5];
            list.appendAll(array);
            assert.equal(list.lastIndexOf(1), 0);
            assert.equal(list.lastIndexOf(5), 5);
            assert.equal(list.lastIndexOf(3), 2);
            assert.equal(list.lastIndexOf(4), 4);
        });

        it('contains', () => {
            const list = new CircularSinglyLinkedList();
            const array = [1, 2, 3, 4, 5];
            list.appendAll(array);
            assert.equal(list.contains(4), true);
            assert.equal(list.contains(400), false);
        });

        it('set', () => {
            const list = new CircularSinglyLinkedList();
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

 describe('CircularSinglyLinkedList', () => {
     test();
 });