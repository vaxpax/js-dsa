"use strict";

import { assert } from "chai";
import { assertArrays } from "../../TestHelpers.js";
import { SplayTree } from "../../../index.js";

export default function test() {
    describe('SplayTree Tests', () => {
        it('create an empty tree', () => {
            const tree = new SplayTree();
            assert.equal(tree.isEmpty(), true);
        });
        it('insert one value and clear', () => {
            const tree = new SplayTree();
            tree.insert(5);
            assert.equal(tree.isEmpty(), false);
            assert.equal(tree.root.key, 5);
            tree.clear();
            assert.equal(tree.isEmpty(), true);
        });
        it('insert 3 keys', () => {
            const tree = new SplayTree();
            const array = [5, 3, 10];
            tree.insert(array[0]);
            tree.insert(array[1]);
            tree.insert(array[2]);
            assert.equal(tree.isEmpty(), false);
        });
        it('insertAll, toInOrderArray, toReverseOrderArray', () => {
            const tree = new SplayTree();
            const array = [4, 5, 2, 3, 6, 1];
            tree.insertAll(array);
            assert.equal(tree.isEmpty(), false);
            assert.equal(tree.root.key, 1);
            array.sort((a, b) => a - b);
            assertArrays(array, tree.toInOrderArray());
            assertArrays(array.reverse(), tree.toReverseOrderArray());
        });
        it('search', () => {
            const tree = new SplayTree();
            const array = [4, 5, 2, 3, 6, 1];
            tree.insertAll(array);
            assert.equal(4, tree.search(4).key)
            assert.equal(tree.root.key, 4);
            assert.equal(1, tree.search(1).key)
            assert.equal(tree.root.key, 1);
            assert.equal(3, tree.search(3).key)
            assert.equal(tree.root.key, 3);
        });
        it('min', () => {
            const tree = new SplayTree();
            const array = [4, 5, 2, 3, 6, 1];
            tree.insertAll(array);
            assert.equal(tree.min().key, 1);
        });

        it('max', () => {
            const tree = new SplayTree();
            const array = [4, 5, 2, 3, 6, 1];
            tree.insertAll(array);
            assert.equal(tree.max().key, 6);
        });
        it('successor', () => {
            const tree = new SplayTree();
            let array = [4, 5, 2, 3, 6, 1];
            tree.insertAll(array);
            let node= tree.search(2);
            assert.equal(tree.successor(node).key, 3);

            tree.clear();
            array = [6, 5, 7, 2, 1, 3, 4];
            tree.insertAll(array);
            node= tree.search(5);
            assert.equal(tree.successor(node).key, 6);
            node= tree.search(7);
            assert.equal(tree.successor(node), null);

            tree.clear();
            array = [10, 2, 15, 12, 13, 14];
            tree.insertAll(array);
            node= tree.search(14);
            assert.equal(tree.successor(node).key, 15);
            node= tree.search(2);
            assert.equal(tree.successor(node).key, 10);

        });

        it('predecessor', () => {
            const tree = new SplayTree();
            let array = [4, 5, 2, 3, 6, 1];
            tree.insertAll(array);
            let node= tree.search(2);
            assert.equal(tree.predecessor(node).key, 1);
            node= tree.search(3);
            assert.equal(tree.predecessor(node).key, 2);

            tree.clear();
            array = [10, 2, 15, 12, 13, 14];
            tree.insertAll(array);
            node= tree.search(2);
            assert.equal(tree.predecessor(node), null);
            node= tree.search(12);
            assert.equal(tree.predecessor(node).key, 10);
        });
        it('delete', () => {
            const tree = new SplayTree();
            const array = [100, 8, 9, 18, 4, 5, 2, 3, 6, 1, 50, 17];
            tree.insertAll(array);
            tree.delete(17);
            array.pop();
            array.sort((a, b) => a - b);
            assertArrays(array, tree.toInOrderArray());

            tree.delete(1000);
            assertArrays(array, tree.toInOrderArray());

            array.splice(array.indexOf(5), 1);
            tree.delete(5);
            assertArrays(array, tree.toInOrderArray());

            array.splice(array.indexOf(100), 1);
            tree.delete(100);
            assertArrays(array, tree.toInOrderArray());

            array.splice(array.indexOf(8), 1);
            tree.delete(8);
            assertArrays(array, tree.toInOrderArray());
        });
    });
}

describe('SplayTree', () => {
    test();
});